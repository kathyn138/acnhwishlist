import React from 'react';
import { NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';
import wishlistApi from './wishlistApi';

type NavBarLinkProps = {
  item: string
}

class NavBarLink extends React.PureComponent<NavBarLinkProps> {
  constructor(props: NavBarLinkProps) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <li><a href="#">{this.props.item}</a></li>
    );
  }
}

export default NavBarLink;