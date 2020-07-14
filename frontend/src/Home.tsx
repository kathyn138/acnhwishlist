import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import VillagerCard from './VillagerCard';
import wishlistApi from './wishlistApi';
import VillagerList from './VillagerList';

type HomeProps = {
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

class Home extends React.PureComponent<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
    this.searchVillagers = this.searchVillagers.bind(this);
  }

  async searchVillagers(query: string) {
    let result = await wishlistApi.searchVillagers(query);
    this.props.updateVillagers(result);
  }

  render() {
    let welcomeMessage = <React.Fragment>
      <img className="welcome-isabelle" src="https://cdn.discordapp.com/attachments/709246246359138316/709246283617009724/welcome-isabelle.png" alt=""></img>
      <p className="home-message">
        Search for your favorite villager or
        click on any of the personality categories to get started!
      </p>
    </React.Fragment>;

    let homeData = this.props.villagers.length ? <VillagerList villagers={this.props.villagers}
      updateVillagers={this.props.updateVillagers}
      addToWishlist={this.props.addToWishlist}
      checkWishlist={this.props.checkWishlist}
      removeFromWishlist={this.props.removeFromWishlist} /> : welcomeMessage;

    return (
      <div className="middle-section col-md-7 text-center">
        <SearchBar search={this.searchVillagers} />
        <div className="home">
          <div className="home-data">
            {homeData}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;