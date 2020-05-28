import React from 'react';
import { MouseEvent } from 'react';
import NavBarLink from './NavBarLink'

type PersonalitiesMenuState = {
  personalities: string[],
  menu: string
}

class PersonalitiesMenu extends React.PureComponent<{}, PersonalitiesMenuState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      personalities: ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Smug',
        'Snooty', 'Uchi'], 
        menu: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {
    if (this.state.menu === 'show') {
      this.setState({ menu: '' });
    } else {
      this.setState({ menu: 'show' });
    }
  }

  render() {
    let show = this.state.menu;
    return (
      <div className="navbar">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button"
            id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"
            onClick={this.handleClick}>
            Personalities
        </button>
        
        {/* refactor if possible to keep code dry */}
          <div className={`dropdown-menu ${show} personalities`} aria-labelledby="dropdownMenu2">
            <div className="dropdown-content">
              <div className="row">
                <div className="col-sm-3">
                  {this.state.personalities.slice(0, 2).map(p => <NavBarLink item={p} />)}
                </div>
                <div className="col-sm-3">
                  {this.state.personalities.slice(2, 4).map(p => <NavBarLink item={p} />)}
                </div>
                <div className="col-sm-3">
                  {this.state.personalities.slice(4, 6).map(p => <NavBarLink item={p} />)}
                </div>
                <div className="col-sm-3">
                  <NavBarLink item={this.state.personalities[6]} />
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary" >Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalitiesMenu;