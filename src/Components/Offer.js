import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Contact} from "./Contact";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class Offer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.onUnload = this.onUnload.bind(this);
    this.chooseFirstPicture = this.chooseFirstPicture.bind(this);
    this.chooseSecondPicture = this.chooseSecondPicture.bind(this);
    this.chooseThirdPicture = this.chooseThirdPicture.bind(this);

  }

  componentDidMount() {
window.addEventListener('beforeunload', this.onUnload);
if (document.getElementById("picture1") && document.getElementById("picture2") && document.getElementById("picture3")){
document.getElementById("picture1").style.display = "";
document.getElementById("picture2").style.display = "none";
document.getElementById("picture3").style.display = "none";
}
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload);
  }
  componentDidUpdate() {
    
  }
  onUnload() {
    this.props.history.push("/Offers")
    }
    chooseFirstPicture(){
      document.getElementById("picture1").style.display = ""
      document.getElementById("picture2").style.display = "none"
      document.getElementById("picture3").style.display = "none"
    }
    chooseSecondPicture(){
      document.getElementById("picture1").style.display = "none"
      document.getElementById("picture2").style.display = ""
      document.getElementById("picture3").style.display = "none"
    }
    chooseThirdPicture(){
     

    document.getElementById("picture1").style.display = "none"
    document.getElementById("picture2").style.display = "none"
    document.getElementById("picture3").style.display = ""

    }

 
  render() {
    

    return (
      
      <div>
        
        {(this.props.cars.cars==undefined ||this.props.cars.cars[this.props.id.id]==undefined)? this.onUnload() :
        <div className="carOfferWithButton">
        <section className="carOffer">
         <article className="imagesContainer">
            <div className="choosenBigPicture">
              <img id="picture1" className="offerImageBigPicture " src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image1}.jpg`)}/>
              <img id="picture2" className="offerImageBigPicture" src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image2}.jpg`)}/>
              <img id="picture3" className="offerImageBigPicture" src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image3}.jpg`)}/>
            </div>
            <div className="smallPictures">
              <img className="offerImageSmallPicture" src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image1}.jpg`)} onClick={this.chooseFirstPicture}/>
              <img className="offerImageSmallPicture" src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image2}.jpg`)} onClick={this.chooseSecondPicture}/>
              <img className="offerImageSmallPicture" src={require(`../Assets/${this.props.cars.cars[this.props.id.id].image3}.jpg`)} onClick={this.chooseThirdPicture}/>
            </div>
        </article>
        <article className="textContainer">
        
          <div className="carNameAndPrice"><div className="carName"><h2>{this.props.cars.cars[this.props.id.id].brand} {this.props.cars.cars[this.props.id.id].model}</h2></div><div className="carPrice"><h2>{this.props.cars.cars[this.props.id.id].price}</h2></div></div>
          <div className="carInfo">
            <h3>{this.props.cars.cars[this.props.id.id].year} &bull; {this.props.cars.cars[this.props.id.id].mileage} &bull; {this.props.cars.cars[this.props.id.id].fuel}</h3>
          </div>
          <div className="carDetails">
            <h3>Details</h3>
            <ul>
              <li>Power: {this.props.cars.cars[this.props.id.id].power}</li>
              <li>Displacement: {this.props.cars.cars[this.props.id.id].displacement}</li>
              <li>Cylinders: {this.props.cars.cars[this.props.id.id].cylinders}</li>
              <li>Color: {this.props.cars.cars[this.props.id.id].color}</li>
              <li>Gear box: {this.props.cars.cars[this.props.id.id].gearBox}</li>
              <li>Gears: {this.props.cars.cars[this.props.id.id].gears}</li>
              <li>Drive chain: {this.props.cars.cars[this.props.id.id].driveChain}</li>
            </ul>
          </div>
          <Contact/>
      </article>
        
        </section>
        <section className="backToOffersContainer"><NavLink to="/offers" activeClassName="active" className="backToOffers" id="backToOffersBottom">&larr; Back to offers</NavLink>
        </section>
        </div>
         }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cars: state.cars,
  id: state.id,
});
export default connect(mapStateToProps)(Offer);