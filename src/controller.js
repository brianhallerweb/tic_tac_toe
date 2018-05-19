const view = require("./view");
const board = require("./board.js");

const controller = {
  handleSelectSquare(index) {
    board.selectSquare(index);
    view.viewSelectSquare(index);
    const didWin = board.isWinner();
    if (didWin) {
      view.viewWin(board.player);
    } else {
      board.changePlayer();
    }
  },
  handleStartNew() {
    view.viewStartNew();
    board.player = "X";
    board.xBoard = [];
    board.oBoard = [];
  }
};

module.exports = controller;
