import React, {Component} from 'react';
import Search from './Search';


export default class Header extends Component {
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
      <div className="headerContainer">
        <section className="title">
          <h1><a href="/#" className="logo">Lux-cars</a></h1>
        </section>
        <Search/>
      </div>
    );
  }
}