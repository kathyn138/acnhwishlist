import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import VillagerList from './VillagerList';

type RouteProps = {
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
            addToWishlist={this.props.addToWishlist}
            checkWishlist={this.props.checkWishlist} 
            removeFromWishlist={this.props.removeFromWishlist} />} />
          <Route path="/villagers/:personality" render={rtProps =>
            <VillagerList {...rtProps}
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