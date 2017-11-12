import React, { Component } from 'react';

import Grid from './Grid';

import Game, { DIRECTION } from './game';

class Board extends Component {
  constructor() {
    super();
    this.game = new Game();
    this.game.start();
    this.state = {
      tiles: this.game.tiles(),
    };
  }

  componentWillMount() {
    window.addEventListener('keydown', event => {
      const map = {
        38: DIRECTION.UP,
        39: DIRECTION.RIGHT,
        40: DIRECTION.DOWN,
        37: DIRECTION.LEFT,
      };
      const direction = map[event.keyCode];
      if (direction) {
        event.preventDefault();
        this.game.move(direction);
        this.setState({
          tiles: this.game.tiles(),
        });
        setTimeout(() => {
          this.game.merge();
          this.game.next();
          this.setState({
            tiles: this.game.tiles(),
          });
        }, 200);
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
