const Game = require("../models/Game");
const Pawn = require("../models/Pawn");

describe("Game", () => {
  it("should build a board", () => {
    const test = new Game(2);
    const expected = [[null, null], [null, null]];
    expect(test.board).toEqual(expected);
  });
  it("should have a way to place pawns on a row", () => {
    const test = new Game(2);
    test.place("white").pawnsOn(test.board[0]);
    const expected = [[new Pawn("white"), new Pawn("white")], [null, null]];
    expect(test.board).toEqual(expected);
  });
});
