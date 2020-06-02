import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';
import wishlistApi from './wishlistApi';
import PersonalitiesMenu from './PersonalitiesMenu';
import SpeciesMenu from './SpeciesMenu';

type NavBarState = {
  menu: string,
  openPersonalities: boolean,
  openSpecies: boolean,
  selectedPersonalities: string[],
  selectedSpecies: string[]
}
class NavBar extends React.PureComponent<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menu: '',
      openPersonalities: false,
      openSpecies: false,
      selectedPersonalities: [],
      selectedSpecies: []
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // handleClick(evt: MouseEvent<HTMLButtonElement>) {
  //   if (this.state.menu === 'show') {
  //     this.setState({ menu: '' });
  //   } else {
  //     this.setState({ menu: 'show' });
  //   }
  // }

  handleToggle(menu: string, toggle: string) {
    // need to make sure other menu isn't already open
    // before opening menu user clicks on 

    // see if it's possible to refactor this 
    if (menu === 'personalities') {
      if (!this.state.openSpecies) {
        if (toggle === 'open') {
          this.setState({ openPersonalities: true });
        } else {
          this.setState({ openPersonalities: false });
        }
      } else {
        this.setState({ openPersonalities: true, openSpecies: false });
      }
    } else {
      if (!this.state.openPersonalities) {
        if (toggle === 'open') {
          this.setState({ openSpecies: true });
        } else {
          this.setState({ openSpecies: false });
        }
      } else {
        this.setState({ openPersonalities: false, openSpecies: true });
      }
    }
  }
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
          <PersonalitiesMenu handleToggle={this.handleToggle} openPersonalities={this.state.openPersonalities} />

          <SpeciesMenu handleToggle={this.handleToggle} openSpecies={this.state.openSpecies} />
        </div>
      </React.Fragment>

    );
  }
}

export default NavBar;