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
  }[],
  wishlist: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[],
  returnVillagersSearch: (newVillagers: {
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
}

type VillagerListState = {
  searching: boolean,
  personality: string
}
class VillagerList extends React.PureComponent<VillagerListProps> {
  constructor(props: VillagerListProps) {
    super(props);
  }

  render() {
    let villagers = this.props.villagers.map(v =>
      <VillagerCard villager={v} wishlist={this.props.wishlist}
        addToWishlist={this.props.addToWishlist}
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