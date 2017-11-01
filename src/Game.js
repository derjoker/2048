import React, { Component } from 'react';
import { random } from 'lodash';

import Cell from './cell';
import Grid from './Grid';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      cells: [],
    };
  }

  componentWillMount() {
    this.setState({
      cells: [new Cell({ x: random(3), y: random(3) }, 2 * random(1, 2))],
    });
    window.addEventListener('keydown', event => {
      const map = {
        38: 1, // Up
        39: 2, // Right
        40: 3, // Down
        37: 4, // Left
      };
      console.log(event.keyCode);
      if (map[event.keyCode]) {
        event.preventDefault();
        this.setState({
          cells: this.state.cells.map(cell => {
            if (map[event.keyCode] === 1) {
              return {
                ...cell,
                y: 0,
              };
            }
            if (map[event.keyCode] === 2) {
              return {
                ...cell,
                x: 3,
              };
            }
            if (map[event.keyCode] === 3) {
              return {
                ...cell,
                y: 3,
              };
            }
            if (map[event.keyCode] === 4) {
              return {
                ...cell,
                x: 0,
              };
            }
          }),
        });
      }
    });
  }

  render() {
    const { cells } = this.state;
    return (
      <div>
        <Grid cells={cells} />
      </div>
    );
  }
}

export default Game;
