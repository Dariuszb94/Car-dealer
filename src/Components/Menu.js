import React, {Component} from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
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
          <li><a href="/#"><NavLink exact to="/" activeClassName="active">Home</NavLink></a></li>
          <li><a href="/#"><NavLink to="/about" activeClassName="active">Offers</NavLink></a></li>
          <li><a href="/#">Map</a></li>
          <li><a href="/#">About us</a></li>
        </ul>
      </div>
    );
  }
}