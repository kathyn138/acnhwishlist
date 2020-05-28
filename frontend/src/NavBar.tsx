import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';
import wishlistApi from './wishlistApi';
import PersonalitiesMenu from './PersonalitiesMenu';
import SpeciesMenu from './SpeciesMenu';

type NavBarState = {
  menu: string,
  personalities: boolean,
  species: boolean,
  selectedPersonalities: string[],
  selectedSpecies: string[]
}
class NavBar extends React.PureComponent<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menu: '',
      personalities: false,
      species: false,
      selectedPersonalities: [],
      selectedSpecies: []
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleClick(evt: MouseEvent<HTMLButtonElement>) {
  //   if (this.state.menu === 'show') {
  //     this.setState({ menu: '' });
  //   } else {
  //     this.setState({ menu: 'show' });
  //   }
  // }

  async handleSubmit(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault();
    let result = await wishlistApi.filterVillagers(
      this.state.selectedPersonalities, this.state.selectedSpecies);
    console.log('in nav bar', result);
  }
  render() {
    let show = this.state.menu;

    return (
      <React.Fragment>
        <div className="row">
        <PersonalitiesMenu />

        <SpeciesMenu />
        </div>
      </React.Fragment>

    );
  }
}

export default NavBar;