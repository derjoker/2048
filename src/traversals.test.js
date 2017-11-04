import traversals from './traversals';
import { DIRECTION } from './game';

describe('traversals', () => {
  it('size', () => {
    expect(traversals(3, DIRECTION.UP)).toEqual([
      [0, 3, 6], // y = 0
      [1, 4, 7], // y = 1
      [2, 5, 8], // y = 2
    ]);
    expect(traversals(3, DIRECTION.RIGHT)).toEqual([
      [2, 1, 0], // x = 0
      [5, 4, 3], // x = 1
      [8, 7, 6], // x = 2
    ]);
    expect(traversals(3, DIRECTION.DOWN)).toEqual([
      [6, 3, 0], // y = 0
      [7, 4, 1], // y = 1
      [8, 5, 2], // y = 2
    ]);
    expect(traversals(3, DIRECTION.LEFT)).toEqual([
      [0, 1, 2], // x = 0
      [3, 4, 5], // x = 1
      [6, 7, 8], // x = 2
    ]);
  });
});
