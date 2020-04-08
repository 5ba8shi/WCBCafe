import React, { Component } from 'react';
import './App.css';

import Nav from './Components/Nav';
import Title from './Components/Title';
import About from './Components/AboutMe';
import Works from './Components/Works';
import Contact from './Components/Contact';


class App extends Component {
  render () {
    return (
      <div className="app">
        <Nav />
        <Title />
        <About />
        <Works />
        <Contact />
      </div>   
    );
  }      
}

export default App;