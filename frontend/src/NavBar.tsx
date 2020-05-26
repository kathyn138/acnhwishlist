import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import {MouseEvent} from 'react';

type NavBarState = {
  menu: string;
}
class NavBar extends React.PureComponent<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menu: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt: MouseEvent<HTMLButtonElement>) {
    if (this.state.menu === 'show') {
      this.setState({menu: ''});
    } else {
      this.setState({menu: 'show'});
    }
  }
  render() {
    let show = this.state.menu;

    return (
      // <nav className="nav nav-pills justify-content-center">
      //   <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/cranky">Cranky</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/jock">Jock</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/lazy">Lazy</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/normal">Normal</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/peppy">Peppy</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/smug">Smug</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/snooty">Snooty</NavLink>
      //   <NavLink className="nav-item nav-link" exact to="/villagers/uchi">Uchi</NavLink>
      // </nav>
      <div className="navbar">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" 
          id="dropdownMenu2" aria-haspopup="true" aria-expanded="false"
          onClick={this.handleClick}>
            Dropdown
  </button>
          <div className={`dropdown-menu ${show}`} aria-labelledby="dropdownMenu2">
            <div className="dropdown-content">
              <div className="row">
                <div className="col-sm-3">
                  <li><a href="#">Action1</a></li>
                  <li><a href="#">Action1</a></li>
                </div>

                <div className="col-sm-3">
                  <li><a href="#">Action2</a></li>
                  <li><a href="#">Action2</a></li>
                </div>

                <div className="col-sm-3">
                  <li><a href="#">Action3</a></li>
                  <li><a href="#">Action3</a></li>
                </div>

                <div className="col-sm-3">
                  <li><a href="#">Action4</a></li>
                  <li><a href="#">Action4</a></li>
                </div>
              </div>
            </div>
            
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;