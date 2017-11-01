import React, { Component } from 'react';

import Game from './Game';

import './App.css';
import 'typeface-clear-sans';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2048</h1>
        <Game />
      </div>
    );
  }
}

export default App;
