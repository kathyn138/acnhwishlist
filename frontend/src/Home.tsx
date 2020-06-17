import React from 'react';
import './Home.css';
import SearchBar from './SearchBar';
import VillagerCard from './VillagerCard';
import wishlistApi from './wishlistApi';

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

// type HomeState = {
//   villagers: {
//     id: string,
//     name: string,
//     image: string,
//     personality: string
//   }[],
// }

class Home extends React.PureComponent<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
    // this.state = {
    //   villagers: []
    // };
    this.searchVillagers = this.searchVillagers.bind(this);
  }

  async searchVillagers(query: string) {
    let result = await wishlistApi.searchVillagers(query);
    this.props.updateVillagers(result);
    console.log('in home', result)
  }

  render() {
    let welcomePage = <React.Fragment>
      <img className="welcome-isabelle" src="https://cdn.discordapp.com/attachments/709246246359138316/709246283617009724/welcome-isabelle.png" alt=""></img>
      <p className="home-message">
        Search for your favorite villager or
        click on any of the personality categories to get started!
      </p>
    </React.Fragment>;

    let searchList = this.props.villagers.map(v =>
      <VillagerCard villager={v} addToWishlist={this.props.addToWishlist}
        checkWishlist={this.props.checkWishlist}
        removeFromWishlist={this.props.removeFromWishlist}
      />);

    let data = this.props.villagers.length ? searchList : welcomePage;


    return (
      <div className="middle-section col-md-7 text-center">
        <SearchBar search={this.searchVillagers} />
        <div className="home">
          <div className="home-data">
            {data}
          </div>
          {/* <div className="home-bot"></div> */}
        </div>
      </div>
    );
  }
}

export default Home;