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
    let wishlistNames: string[] = [];
    this.props.wishlist.map(v => wishlistNames.push(v.name));

    return (
      <div className="wl text-center">
        <div className="wl-data">
          <div className="wl-header">
            <h3>Wishlist</h3>
          </div>
          {this.props.wishlist.map(v =>
            <WishlistCard villager={v} removeFromWishlist={this.props.removeFromWishlist} />)}
        </div>
          <button type="button" className="btn wishlist-copy-btn"
            onClick={() => { navigator.clipboard.writeText(wishlistNames.join(', ')) }}>
            Copy to Clipboard</button>
      </div>
    );
  }
}

export default Wishlist;