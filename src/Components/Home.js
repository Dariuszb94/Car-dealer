import React, {Component} from 'react';
import Slider from './Slider';
import Why from './Why'
export default class Home extends Component {
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
      <div>
        <Slider/>
        <Why/>
      </div>
    );
  }
}