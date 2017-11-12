import { map, range, sample, compact, flatten, sortBy } from 'lodash';

import traversals from './traversals';

export const DIRECTION = {
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4,
};

export function merge(array) {
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i],
      next = array[i + 1];
    if (next && next.value === curr.value) {
      curr.value = 2 * curr.value;
      i++;
    }
    ret.push(curr);
  }
  return ret;
}

export default class Game {
  constructor(size = 4, cells = {}, step = 0) {
    this.size = size;
    this.cells = cells;
    this.step = step;
  }

  tiles() {
    return sortBy(
      map(this.cells, (cell, key) => ({
        id: cell.id,
        x: Math.floor(key / this.size),
        y: key % this.size,
        value: cell.value,
      })),
      'id'
    );
  }

  indexes() {
    return range(this.size ** 2).filter(index => !this.cells[index]);
  }

  start() {
    this.step = 0;
    this.cells = {};
    this.next();
    this.next();
  }

  move(direction) {
    const _traversals = traversals(this.size, direction);
    const tmp = compact(
      flatten(
        _traversals
          .map(traversal => compact(traversal.map(index => this.cells[index])))
          .map(merge)
          .map((traversal, i) =>
            traversal.map((cell, j) => ({
              ...cell,
              index: _traversals[i][j],
            }))
          )
      )
    );
    this.cells = {};
    tmp.forEach(cell => (this.cells[cell.index] = cell));
  }

  next() {
    const indexes = this.indexes();
    if (indexes.length > 0) {
      const index = sample(indexes);
      const value = sample([2, 2, 4]);
      this.cells[index] = {
        id: this.step,
        value,
      };
      this.step += 1;
    }
  }
}
