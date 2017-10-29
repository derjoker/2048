import React, { Component } from 'react';

import './Tile.css';

class Tile extends Component {
  render() {
    const { number } = this.props;
    return (
      <div className="tile" style={styles[number]}>
        {number}
      </div>
    );
  }
}

const styles = {
  2: {
    fontSize: '55px',
    background: '#eee4da',
  },
  4: {
    fontSize: '55px',
    background: '#ede0c8',
  },
  8: {
    fontSize: '55px',
    color: '#f9f6f2',
    background: '#f2b179',
  },
  16: {
    fontSize: '55px',
    color: '#f9f6f2',
    background: '#f59563',
  },
  32: {
    fontSize: '55px',
    color: '#f9f6f2',
    background: '#f67c5f',
  },
  64: {
    fontSize: '55px',
    color: '#f9f6f2',
    background: '#f65e3b',
  },
  128: {
    fontSize: '45px',
    color: '#f9f6f2',
    background: '#edcf72',
  },
  256: {
    fontSize: '45px',
    color: '#f9f6f2',
    background: '#edcc61',
  },
  512: {
    fontSize: '45px',
    color: '#f9f6f2',
    background: '#edc850',
  },
  1024: {
    fontSize: '35px',
    color: '#f9f6f2',
    background: '#edc53f',
  },
  2048: {
    fontSize: '35px',
    color: '#f9f6f2',
    background: '#edc22e',
  },
  4096: {
    fontSize: '30px',
    color: '#f9f6f2',
    background: '#3c3a32',
  },
  8192: {
    fontSize: '30px',
    color: '#f9f6f2',
    background: '#3c3a32',
  },
};

export default Tile;
