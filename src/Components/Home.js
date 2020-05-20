import React, {Component} from 'react';
import Slider from './Slider';
import Why from './Why'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <Why/>
      </div>
    );
  }
}