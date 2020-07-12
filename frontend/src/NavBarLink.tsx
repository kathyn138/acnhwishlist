import React from 'react';

type NavBarLinkProps = {
  item: string,
  add: (type: string) => void,
  remove: (type: string) => void
}

type NavBarLinkState = {
  selected: boolean
}

class NavBarLink extends React.PureComponent<NavBarLinkProps, NavBarLinkState> {
  constructor(props: NavBarLinkProps) {
    super(props);
    this.state = {
      selected: false
    };
    this.onClick = this.onClick.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onClick(type: string) {
    if (!this.state.selected) {
      this.props.add(this.props.item);
      this.setState({ selected: true });
    } else {
      this.props.remove(this.props.item);
      this.setState({ selected: false });
    }
  }

  render() {
    let color = this.state.selected ? 'selected' : '';

    return (
      <li><a href="#" className={`navbar-link ${color}`}
        onClick={() => this.onClick(this.props.item)} >{this.props.item}</a></li>
    );
  }
}

export default NavBarLink;