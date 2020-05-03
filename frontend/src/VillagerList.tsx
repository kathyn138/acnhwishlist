import React from 'react';
import './VillagerList.css';
import wishlistApi from './wishlistApi';
import VillagerCard from './VillagerCard';
import SearchBar from './SearchBar';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  personality: string;
}
interface VillagerListProps extends RouteComponentProps<MatchParams> {
  addToWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
  removeFromWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
  checkWishlist: (name: string) => boolean;
}

type VillagerListState = {
  villagers: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[],
  searching: boolean,
  personality: string
}
class VillagerList extends React.PureComponent<VillagerListProps, VillagerListState> {
  constructor(props: VillagerListProps) {
    super(props);
    this.state = {
      villagers: [],
      searching: false,
      personality: this.props.match.params.personality
    };
    this.searchVillagers = this.searchVillagers.bind(this);
  }

  async componentDidUpdate(prevProps: VillagerListProps) {
    if (this.props.match.params.personality !== prevProps.match.params.personality) {
      let result = await wishlistApi.getVillagers(this.props.match.params.personality);
      this.setState({ villagers: result });
    }
  }
  async componentDidMount() {
    let result = await wishlistApi.getVillagers(this.props.match.params.personality);
    this.setState({ villagers: result });
  }

  async searchVillagers(query: string) {
    let result = await wishlistApi.searchVillagers(query);
    this.setState({ villagers: [result], searching: true });
  }

  render() {
    let villagers = this.state.villagers ? this.state.villagers.map(v =>
      <VillagerCard key={v.id} villager={v} addToWishlist={this.props.addToWishlist}
        removeFromWishlist={this.props.removeFromWishlist}
        checkWishlist={this.props.checkWishlist} />) : "Can't find that villager :( Try another one?";

    let header = this.state.searching ? "" : <h3>{this.props.match.params.personality} Villagers</h3>;

    return (
      <div className="middle-section col-md-7">
        <SearchBar search={this.searchVillagers} />
        <div className="vl-top">
          <div className="vl-data">
            <div className="vl-header">
              {header}
            </div>
            {villagers}
          </div>
          <div className="vl-bot"></div>
        </div>
      </div>
    );
  }
}

export default VillagerList;