import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Copyright from './Components/Copyright';
import Home from './Components/Home';
import Offers from './Components/Offers';
import OneCar from './Components/Offer';
import About from './Components/About';
import styled from "styled-components";
import {
  Route,
  Switch
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function App({ location }) {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <Switch location={location}>
              <Route exact path="/Car-dealer" component={Home} />
              <Route path="/offers" component={Offers} />
              <Route path="/offer" component={OneCar} />
              <Route path="/about" component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
      <Copyright/>
    </div>
  );
}
const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;

export default App;
