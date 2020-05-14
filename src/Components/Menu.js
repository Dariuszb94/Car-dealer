import React, {Component} from 'react';
export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleChange() {

  }

  render() {
    return (
      <div className="menuContainer">
        <ul className="menuList">
          <li><a href="/#">Home</a></li>
          <li><a href="/#">Offers</a></li>
          <li><a href="/#">Map</a></li>
          <li><a href="/#">About us</a></li>
        </ul>
      </div>
    );
  }
}