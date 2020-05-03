import React from 'react';
import './Wishlist.css';
import WishlistCard from './WishlistCard';

type WishlistProps = {
  wishlist: {
    id: string,
    name: string,
    image: string,
    personality: string
  }[],
  removeFromWishlist: (villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) => void,
}
class Wishlist extends React.PureComponent<WishlistProps> {

  render() {
    return (
      <div className="wl-top">
        <div className="wl-data">
          {this.props.wishlist.map(v =>
            <WishlistCard villager={v} removeFromWishlist={this.props.removeFromWishlist} />)}
        </div>
        <div className="wl-bot"></div>
      </div>
    );
  }
}

export default Wishlist;