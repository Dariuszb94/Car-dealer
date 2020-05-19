import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Copyright from './Components/Copyright';
import Home from './Components/Home';
import Offers from './Components/Offers';
import OneCar from './Components/Offer';
import About from './Components/About';
import {
  Route,
  Switch
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
        <Switch >
          <Route exact path="/Car-dealer" component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/offer" component={OneCar} />
          <Route path="/about" component={About} />
        </Switch>
        <Copyright/>
    </div>
  );
}

export default App;
