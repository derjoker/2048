import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';

class Grid extends Component {
  render() {
    const { cells } = this.props;
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
  cells: [],
};

export default Grid;
