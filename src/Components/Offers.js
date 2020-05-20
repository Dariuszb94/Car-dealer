import React, {Component} from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SpeedIcon from '@material-ui/icons/Speed';
import {connect } from 'react-redux';
import {updateId}from '../actions/currentCarIdActions'
import {NavLink} from "react-router-dom";
class Offers extends Component {
  constructor(props) {
    super(props);
    this.submitId = this.submitId.bind(this);
  }
  submitId(e) {
    this.props.updateId(e.target.value);
      }
  render() {
    return (
      <ul  className="offersContainer">
        {this.props.cars.cars===undefined ? null :  this.props.cars.cars.map((value, index) => {
          return <li key={index} className="offerContainer">     
                  <section className="photo">
                    <img className="offerImage" alt={value.model} src={require(`../Assets/${value.image1}.jpg`)}/>
                  </section>
                  <section className="offerText">
                    <article>
                      <div className="offerHeadName">
                        <div>
                          <h2 className="offerHead offerHeadBrand ">{value.brand}</h2>
                        </div>
                        <div>
                          <h2 className="offerHead">{value.model}</h2>
                        </div>
                      </div>
                    </article>
                    <article className="offerDetails">
                      <div><CalendarTodayIcon fontSize="small"/> {value.year}</div>
                      <div><SpeedIcon fontSize="small"/> {value.mileage}</div>
                    </article>
                  </section>
                  <section className="offerPrice">
                    <h2>{value.price}</h2>
                    <NavLink to="/offer" activeClassName="active">
                      <button  value={value.id} className="seeOffer" onClick={this.submitId}>See offer</button>
                    </NavLink>
                  </section>
                </li>
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars,
  id: state.id,
});
export default connect(mapStateToProps,{updateId})(Offers);