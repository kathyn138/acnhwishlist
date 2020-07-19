import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import Wishlist from './Wishlist'
import About from './About';

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
};

class Routes extends React.PureComponent<RouteProps> {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Home
              villagers={this.props.villagers}
              wishlist={this.props.wishlist}
              returnVillagersSearch={this.props.returnVillagersSearch}
              addToWishlist={this.props.addToWishlist}
              removeFromWishlist={this.props.removeFromWishlist} />
            {/* <Wishlist /> */}
            <Wishlist wishlist={this.props.wishlist}
                  removeFromWishlist={this.props.removeFromWishlist} />
          </Route>
          <Route exact path="/about" render={() => <About />} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;