import NavBar from './Components/NavBar.js';
import './App.css';

import React, { Component } from 'react';
import News from './Components/News.js';

export default class App extends Component {
 
  render() {
    return (
      <div>
          <NavBar/>
          <News/>
      </div>
    )
  }
}

