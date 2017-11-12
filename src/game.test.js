import Game, { move } from './game';

describe('Game', () => {
  it('constructor', () => {
    const size = 3,
      cells = {
        0: { ids: [3], value: 2 },
        5: { ids: [2], value: 4 },
        7: { ids: [1], value: 16 },
      };
    const game = new Game(size, cells);
    expect(game.size).toEqual(size);
    expect(game.tiles()).toEqual([
      { id: 1, x: 2, y: 1, value: 16 },
      { id: 2, x: 1, y: 2, value: 4 },
      { id: 3, x: 0, y: 0, value: 2 },
    ]);
    expect(game.indexes()).toEqual([1, 2, 3, 4, 6, 8]);
  });

  it('next', () => {
    const game = new Game();

    game.next();
    expect(Object.keys(game.cells).length).toBe(1);
    game.next();
    expect(Object.keys(game.cells).length).toBe(2);

    game.start();
    expect(Object.keys(game.cells).length).toBe(2);
  });
});

describe('helper', () => {
  it('move', () => {
    expect(
      move([
        { ids: [1], value: 2 },
        { ids: [2], value: 4 },
        { ids: [3], value: 4 },
      ])
    ).toEqual([
      { ids: [1], value: 2, name: 'tile' },
      { ids: [2, 3], value: 4, name: 'tile' },
    ]);
  });
});
