import React from 'react';
import './NavBar.css';
import wishlistApi from './wishlistApi';
import PersonalitiesMenu from './PersonalitiesMenu';
import SpeciesMenu from './SpeciesMenu';

type NavBarState = {
  openPersonalities: boolean,
  openSpecies: boolean,
  selectedPersonalities: string[],
  selectedSpecies: string[]
}

type NavBarProps = {
  filterVillagers: (personalities: string[],
    species: string[]) => void;
}
class NavBar extends React.PureComponent<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      openPersonalities: false,
      openSpecies: false,
      selectedPersonalities: [],
      selectedSpecies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.addPersonality = this.addPersonality.bind(this);
    this.removePersonality = this.removePersonality.bind(this);
    this.addSpecies = this.addSpecies.bind(this);
    this.removeSpecies = this.removeSpecies.bind(this);
  }

  handleToggle(menu: string, toggle: string) {
    // need to make sure other menu isn't already open
    // (via !this.state.openSpecies & !this.state.openPersonalities)
    // before opening the menu the user clicked on

    // TODO: see if it's possible to refactor this 
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

  // potential refactor by passing in personality/species parameter instead
  // not sure if it's better to leave it separate for separation of concerns
  // with merge, would still have to do if statement 

  addPersonality(personality: string) {
    this.setState({
      selectedPersonalities: [...this.state.selectedPersonalities,
        personality]
    });
  }

  removePersonality(personality: string) {
    let updatedSelectedP = this.state.selectedPersonalities.filter(
      p => p !== personality);
    this.setState({ selectedPersonalities: updatedSelectedP });
  }

  addSpecies(species: string) {
    this.setState({
      selectedSpecies: [...this.state.selectedSpecies,
        species]
    });
  }

  removeSpecies(species: string) {
    let updatedSelectedS = this.state.selectedSpecies.filter(
      s => s !== species);
    this.setState({ selectedSpecies: updatedSelectedS });
  }

  async handleSubmit(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault();
    let result = await this.props.filterVillagers(
      this.state.selectedPersonalities, this.state.selectedSpecies);
    console.log('in nav bar', result);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center navbar">
          <PersonalitiesMenu
            handleMenuFilter={this.handleSubmit}
            openPersonalities={this.state.openPersonalities}
            handleToggle={this.handleToggle}
            addPersonality={this.addPersonality}
            removePersonality={this.removePersonality} />

          <SpeciesMenu
            handleMenuFilter={this.handleSubmit}
            openSpecies={this.state.openSpecies}
            handleToggle={this.handleToggle}
            addSpecies={this.addSpecies}
            removeSpecies={this.removeSpecies} />
        </div>
      </React.Fragment>

    );
  }
}

export default NavBar;