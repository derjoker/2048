import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';

class Grid extends Component {
  render() {
    const { cells } = this.props;
    return (
      <div style={style.grid}>
        {cells.map((number, index) => (
          <div key={index} style={style.cell}>
            <Tile number={number} />
          </div>
        ))}
      </div>
    );
  }
}

const style = {
  grid: {
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
  cells: Array(16)
    .fill(0)
    .map((number, index) => Math.pow(2, index + 1)),
};

export default Grid;
