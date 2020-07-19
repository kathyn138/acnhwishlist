import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';

type RouteProps = {
  villagers: {
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
  checkWishlist: (name: string) => boolean;
};

class Routes extends React.PureComponent<RouteProps> {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Home
            villagers={this.props.villagers}
            returnVillagersSearch={this.props.returnVillagersSearch}
            addToWishlist={this.props.addToWishlist}
            checkWishlist={this.props.checkWishlist} 
            removeFromWishlist={this.props.removeFromWishlist} />} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;