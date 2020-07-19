import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import wishlistApi from './wishlistApi';
import Wishlist from './Wishlist';
import NavBar from './NavBar';
import Routes from './Routes';

type appState = {
  wishlist: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[],
  villagers: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[];
}
class App extends React.PureComponent<{}, appState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      wishlist: [],
      villagers: []
    };
    this.filterVillagers = this.filterVillagers.bind(this);
    this.returnVillagersSearch = this.returnVillagersSearch.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
  }

  async componentDidMount() {
    // let wake = await wishlistApi.wakeBackend();
    // console.log(wake);
  }

  async filterVillagers(personalities: string[], species: string[]) {
    let result = await wishlistApi.filterVillagers(
      personalities, species);
    this.setState({ villagers: result });
  }

  returnVillagersSearch(newVillagers: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[]) {
    this.setState({ villagers: newVillagers });
  }

  addToWishlist(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    this.setState({ wishlist: [...this.state.wishlist, villager] });
  }

  removeFromWishlist(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    this.setState({ wishlist: this.state.wishlist.filter(v => v.name !== villager.name) });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" render={rtProps => <NavBar {...rtProps}
            filterVillagers={this.filterVillagers}
          />} />
        </BrowserRouter>
        <div className="App container-fluid">
          <div className="row">
            <BrowserRouter>
              <Routes
                villagers={this.state.villagers}
                wishlist={this.state.wishlist}
                returnVillagersSearch={this.returnVillagersSearch}
                addToWishlist={this.addToWishlist}
                removeFromWishlist={this.removeFromWishlist} />
            </BrowserRouter>
            <div className="col-md-5">
              <Wishlist wishlist={this.state.wishlist}
                removeFromWishlist={this.removeFromWishlist} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
