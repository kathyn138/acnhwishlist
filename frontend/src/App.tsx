import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Wishlist from './Wishlist';
import NavBar from './NavBar';
import Routes from './Routes';

type appState = {
  wishlist: {
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
      wishlist: []
    };
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
    this.checkWishlist = this.checkWishlist.bind(this);
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
          />} />
          <div className="row">
            <Routes addToWishlist={this.addToWishlist}
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
