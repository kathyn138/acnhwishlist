import React from 'react';
import './VillagerList.css';
import wishlistApi from './wishlistApi';
import VillagerCard from './VillagerCard';
import SearchBar from './SearchBar';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  personality: string;
}
type VillagerListProps = {
  villagers: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[];
  updateVillagers: (newVillagers: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[]) => void;
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
  // villagers: {
  //   id: string,
  //   name: string,
  //   image: string,
  //   personality: string
  // }[],
  searching: boolean,
  personality: string
}
class VillagerList extends React.PureComponent<VillagerListProps> {
  constructor(props: VillagerListProps) {
    super(props);
    // this.state = {
    //   // villagers: [],
    //   searching: false,
    //   personality: this.props.match.params.personality
    // };
    // this.searchVillagers = this.searchVillagers.bind(this);
  }

  // difference between update and mount here in logic? 

  // async componentDidUpdate(prevProps: VillagerListProps) {
  //   if (this.props.match.params.personality !== prevProps.match.params.personality) {
  //     let result = await wishlistApi.getVillagers(this.props.match.params.personality);
  //     this.props.updateVillagers(result);
  //     // this.setState({ villagers: result });
  //   }
  // }
  // async componentDidMount() {
  //   let result = await wishlistApi.getVillagers(this.props.match.params.personality);
  //   this.props.updateVillagers(result);
  //   // this.setState({ villagers: result });
  // }

  // async searchVillagers(query: string) {
  //   let result = await wishlistApi.searchVillagers(query);
  //   this.props.updateVillagers(result);
  //   this.setState({ searching: true });
  // }

  render() {
    // let villagers = this.props.villagers ? this.props.villagers.map(v =>
    //   <VillagerCard key={v.id} villager={v} addToWishlist={this.props.addToWishlist}
    //     removeFromWishlist={this.props.removeFromWishlist}
    //     checkWishlist={this.props.checkWishlist} />) : "Can't find that villager :( Try another one?";

    // let header = this.state.searching ? "" : <h3>{this.props.match.params.personality} Villagers</h3>;

    let villagers = this.props.villagers.map(v =>
      <VillagerCard villager={v} addToWishlist={this.props.addToWishlist}
        checkWishlist={this.props.checkWishlist}
        removeFromWishlist={this.props.removeFromWishlist}
      />);

    let loadingMessage = <React.Fragment>
      <img className="loading-gif"
        src="https://cdn.discordapp.com/attachments/709643259789705317/732414740134887545/tenor.gif"></img>
      <p className="loading-message">
        Loading...
      </p>
    </React.Fragment>

    let villagerListData = this.props.villagers.length ? villagers : loadingMessage

    return (
      <div className="vl">
        <div className="vl-data">
          {villagerListData}
        </div>
      </div>
    );
  }
}

export default VillagerList;