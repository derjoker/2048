import React, { Component } from 'react';

import Board from './Board';

import './App.css';
import 'typeface-clear-sans';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2048</h1>
        <Board />
      </div>
    );
  }
}

export default App;
