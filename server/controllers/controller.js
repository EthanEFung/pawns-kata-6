const Game = require("../../models/Game");
module.exports = {
  startGame: (req, res) => {
    console.log("request has been made to start");
    const game = new Game(8);
    game.startGame();
    const state = JSON.stringify(game);
    res.send(state);
  },
  postMove: (req, res) => {
    console.log("request to post move", req.body);
  }
};
