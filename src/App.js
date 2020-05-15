import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Copyright from './Components/Copyright';
import Home from './Components/Home';
import About from './Components/About';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
        <Switch >
          <Route exact path="/Car-dealer" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Copyright/>
    </div>
  );
}

export default App;
