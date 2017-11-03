import { map, range, sample } from 'lodash';

export default class Game {
  constructor(size = 4, cells = {}, step = 0) {
    this.size = size;
    this.cells = cells;
    this.step = step;
  }

  tiles() {
    return map(this.cells, (cell, key) => ({
      id: cell.id,
      x: Math.floor(key / this.size),
      y: key % this.size,
      value: cell.value,
    }));
  }

  indexes() {
    return range(this.size ** 2).filter(index => !this.cells[index]);
  }

  init() {
    this.step = 0;
    this.cells = {};
    this.next();
    this.next();
  }

  move() {}

  next() {
    const indexes = this.indexes();
    const index = sample(indexes);
    const value = sample([2, 4]);
    this.cells[index] = {
      id: this.step,
      value,
    };
    this.step += 1;
  }
}
