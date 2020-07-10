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
    this.updateVillagers = this.updateVillagers.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
    this.checkWishlist = this.checkWishlist.bind(this);
  }

  async componentDidMount() {
    let wake = await wishlistApi.wakeBackend();
    console.log(wake);
  }

  async filterVillagers(personalities: string[], species: string[]) {
    let result = await wishlistApi.filterVillagers(
      personalities, species);
    this.setState({ villagers: result });
  }

  updateVillagers(newVillagers: {
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
    this.setState({ wishlist: this.state.wishlist.filter(v => v.name !== villager.name)});
  }

  checkWishlist(name: string) {
    if (this.state.wishlist.filter(villager => villager.name === name).length === 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <BrowserRouter>
          <Route path="/" render={rtProps => <NavBar {...rtProps}
            filterVillagers={this.filterVillagers}
          />} />
          <div className="row">
            <Routes 
              villagers={this.state.villagers}
              updateVillagers={this.updateVillagers}
              addToWishlist={this.addToWishlist}
              checkWishlist={this.checkWishlist} 
              removeFromWishlist={this.removeFromWishlist} />
            <div className="col-md-5">
              <Wishlist wishlist={this.state.wishlist} 
              removeFromWishlist={this.removeFromWishlist}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
