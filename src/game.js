import { map, range, sample, compact, flatten, sortBy } from 'lodash';

import traversals from './traversals';

export const DIRECTION = {
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4,
};

export function move(tiles) {
  let ret = [];
  for (let i = 0; i < tiles.length; i++) {
    const curr = tiles[i],
      ids = curr.ids,
      value = curr.value,
      next = tiles[i + 1];
    if (next && next.value === value) {
      ids.push(...next.ids);
      i++;
    }
    ret.push({
      ids,
      value,
      name: 'tile',
    });
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
      flatten(
        map(this.cells, (cell, key) =>
          cell.ids.map(id => ({
            id,
            x: Math.floor(key / this.size),
            y: key % this.size,
            value: cell.value,
            name: cell.name,
          }))
        )
      ),
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
          .map(move)
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

  merge() {
    Object.keys(this.cells).forEach(key => {
      const cell = this.cells[key],
        ids = cell.ids;
      if (ids.length > 1) {
        cell.value = cell.value * ids.length;
        cell.ids = [ids[0]];
        cell.name = 'tile merge';
      } else {
        cell.name = 'tile';
      }
    });
  }

  next() {
    const indexes = this.indexes();
    if (indexes.length > 0) {
      const index = sample(indexes);
      const value = sample([2, 2, 4]);
      this.cells[index] = {
        ids: [this.step],
        value,
        name: 'tile new',
      };
      this.step += 1;
    }
  }
}
