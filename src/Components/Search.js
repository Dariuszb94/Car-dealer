import React, {Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {CARS} from './Const';
import { connect } from 'react-redux';
import  {updateCars}from '../actions/carsActions';
import {NavLink} from "react-router-dom";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsArray:[],
      searchInput:'', 
      searchedCarArray:[]
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.setState(
      {carsArray: CARS}
    );
    this.setState(
      {searchedCarArray: CARS},
      ()=>{this.props.updateCars(this.state.searchedCarArray)}
    )
  }
/**
 * Filters car array, then set state after filter.
 * 
 */
  onSubmit() {
    let search=this.state.searchInput;
    let beforeSearchedArr=this.state.carsArray;
    let afterSearchedArr=[];
    for(let i=0;i<beforeSearchedArr.length;i++){
      let pushed={};
      Object.values(beforeSearchedArr[i]).forEach((value)=>{
        if (value!=="0" && value!==0 && value!==""){
          if (value.toUpperCase().includes(search.toUpperCase())){  
            if (pushed!==beforeSearchedArr[i]){
              pushed=beforeSearchedArr[i];
              afterSearchedArr.push(pushed);
            }
          }
        } 
      })
    }
    this.setState(
      {searchedCarArray: afterSearchedArr},
      ()=>{this.props.updateCars(this.state.searchedCarArray)}
    );
  }
/**
 *  Takes input from search, then set state.
 * @param e input from search
 */
  onChange(e){
    let value = e.target.value;
    this.setState(
      {searchInput: value},
    )
  }
  render() {
    return (
      <div className="searchContainer">
        <section>
          <input className="searchInput"
            type="text"
            placeholder="Search"
            onChange={this.onChange}
            value={this.state.title}
          />
        </section>
        <section>
        <NavLink to="/offers" activeClassName="active"> <button className="searchButton" onClick={this.onSubmit}><SearchIcon/></button></NavLink>
        </section>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  cars: state.cars,
});
export default connect(mapStateToProps,{updateCars})(Search);