import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Slider from './Components/Slider';
import Financing from './Components/Financing';
import Copyright from './Components/Copyright';
import Why from './Components/Why'
function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Slider/>
      <Why/>
      <Copyright/>
    </div>
  );
}

export default App;
