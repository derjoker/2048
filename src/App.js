import React, { Component } from 'react';

import Grid from './Grid';

import './App.css';
import 'typeface-clear-sans';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>2048</h1>
        <Grid />
      </div>
    );
  }
}

export default App;
