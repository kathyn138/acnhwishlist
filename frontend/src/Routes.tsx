import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from './Home';
import Wishlist from './Wishlist';
import About from './About';
import NavBar from './NavBar';

type RouteProps = {
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
  filterVillagers: (personalities: string[],
    species: string[]) => void,
  goHome: () => void
};

class Routes extends React.PureComponent<RouteProps> {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-3 home-nav">
                <Link to="/" className="home-btn"><i className="fas fa-home"
                  onClick={this.props.goHome}></i></Link>
              </div>
              <NavBar filterVillagers={this.props.filterVillagers}
                goHome={this.props.goHome} />
            </div>
            <div className="row">
              <Home
                villagers={this.props.villagers}
                wishlist={this.props.wishlist}
                returnVillagersSearch={this.props.returnVillagersSearch}
                addToWishlist={this.props.addToWishlist}
                removeFromWishlist={this.props.removeFromWishlist} />
              <Wishlist wishlist={this.props.wishlist}
                removeFromWishlist={this.props.removeFromWishlist} />
            </div>
          </Route>

          <Route exact path="/about">
            <div className="row">
              <div className="col home-nav">
                <Link to="/" className="home-btn"><i className="fas fa-home"
                  onClick={this.props.goHome}></i></Link>
              </div>
            </div>
            <About />
          </Route>

          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;