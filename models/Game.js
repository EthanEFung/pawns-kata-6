const Player = require("./Player");
const Pawn = require("./Pawn");

module.exports = class Game {
  constructor(n) {
    this.board = this.buildBoard(n);
    this.turns = [new Player("white"), new Player("black")];
    this.activePlayer = this.turns[0];
  }

  buildBoard(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  startGame() {
    const firstRow = this.board[0];
    const lastRow = this.board[this.board.length - 1];
    this.place("black").pawnsOn(firstRow);
    this.place("white").pawnsOn(lastRow);
  }

  place(side) {
    return {
      pawnsOn: row => {
        row.forEach((sq, i) => (row[i] = new Pawn(side)));
      }
    };
  }
};
