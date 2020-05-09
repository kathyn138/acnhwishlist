import React from 'react';
import './VillagerCard.css';

type VillagerCardProps = {
  villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  },
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

type VillagerCardState = {
  onWishlist: boolean;
}
class VillagerCard extends React.PureComponent<VillagerCardProps, VillagerCardState> {
  constructor(props: VillagerCardProps) {
    super(props);
    this.state = {
      onWishlist: false
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  async componentDidMount() {
    let result = await this.props.checkWishlist(this.props.villager.name);
    this.setState({ onWishlist: result });
  }

  async handleAdd(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    await this.props.addToWishlist(this.props.villager);
    this.setState({ onWishlist: true });
  }

  async handleRemove(villager: {
    id: string,
    name: string,
    image: string,
    personality: string
  }) {
    await this.props.removeFromWishlist(this.props.villager);
    this.setState({ onWishlist: false });
  }

  render() {
    let { name, personality } = this.props.villager;
    let heart = this.state.onWishlist ? <i className="fas fa-heart filled-in-heart"
      onClick={() => this.handleRemove(this.props.villager)}
    ></i>
      : <i className="far fa-heart"
        onClick={() => this.handleAdd(this.props.villager)}
      ></i>;

    return (
      <div className="card my-auto">
        <div className="row no-gutters">
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <img src={`https://github.com/kathyn262/acnhwishlist/blob/master/frontend/src/assets/villagers/${personality.toLowerCase()}/${name}.png?raw=true`} className="card-img" alt={`${name}`} />
          </div>
          <div className="col-lg-8 my-auto">
            <div className="card-body text-center">
              {name}
            </div>
          </div>
          <div className="col-lg-2 my-auto">
            <span className="heart-btn">
              {heart}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default VillagerCard;