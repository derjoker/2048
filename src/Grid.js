import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: this.props.cells,
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
      <div style={style.grid}>
        <div style={{ position: 'absolute' }}>
          {Array(16)
            .fill(null)
            .map((_, index) => <div key={index} style={style.cell} />)}
        </div>
        <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
          {cells.map((cell, index) => <Tile key={index} cell={cell} />)}
        </div>
      </div>
    );
  }
}

const style = {
  grid: {
    position: 'relative',
    marginTop: '50px',
    padding: '7.5px',
    background: '#bbada0',
    borderRadius: '6px',
    width: '500px',
    height: '500px',
    boxSizing: 'border-box',
  },
  cell: {
    float: 'left',
    margin: '7.5px',
    width: '106.25px',
    height: '106.25px',
    background: 'rgba(238, 228, 218, .35)', // #eee4da
    borderRadius: '3px',
  },
};

Grid.propTypes = {
  cells: PropTypes.array,
};

Grid.defaultProps = {
  cells: [{ x: 0, y: 0, value: 2 }],
};

export default Grid;
