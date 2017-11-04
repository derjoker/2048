import Game, { merge } from './game';

describe('Game', () => {
  it('constructor', () => {
    const size = 3,
      cells = {
        0: { id: 3, value: 2 },
        5: { id: 2, value: 4 },
        7: { id: 1, value: 16 },
      };
    const game = new Game(size, cells);
    expect(game.size).toEqual(size);
    expect(game.tiles()).toEqual([
      { id: 3, x: 0, y: 0, value: 2 },
      { id: 2, x: 1, y: 2, value: 4 },
      { id: 1, x: 2, y: 1, value: 16 },
    ]);
    expect(game.indexes()).toEqual([1, 2, 3, 4, 6, 8]);
  });

  it('next', () => {
    const game = new Game();

    game.next();
    expect(Object.keys(game.cells).length).toBe(1);
    game.next();
    expect(Object.keys(game.cells).length).toBe(2);

    game.init();
    expect(Object.keys(game.cells).length).toBe(2);
  });
});

describe('merge', () => {
  it('merge', () => {
    expect(merge([{ value: 2 }, { value: 4 }, { value: 4 }])).toEqual([
      { value: 2 },
      { value: 8 },
    ]);
  });
});
