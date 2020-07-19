import React from 'react';
import './VillagerList.css';
import VillagerCard from './VillagerCard';

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

class VillagerList extends React.PureComponent<VillagerListProps> {
  render() {
    let villagers = this.props.villagers.map(v =>
      <VillagerCard villager={v} key={v.name}
        wishlist={this.props.wishlist}
        addToWishlist={this.props.addToWishlist}
        removeFromWishlist={this.props.removeFromWishlist}
      />);

    let loadingMessage = <React.Fragment>
      <img className="loading-gif"
        alt=""
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