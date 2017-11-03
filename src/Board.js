import React, { Component } from 'react';

import Grid from './Grid';

import Game from './game';

class Board extends Component {
  constructor() {
    super();
    const game = new Game();
    game.init();
    this.state = {
      tiles: game.tiles(),
    };
  }

  componentWillMount() {
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
          tiles: this.state.tiles.map(cell => {
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
    const { tiles } = this.state;
    return (
      <div>
        <Grid tiles={tiles} />
      </div>
    );
  }
}

export default Board;
