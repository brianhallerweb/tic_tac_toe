const board = {
  player: "X",
  xBoard: [],
  oBoard: [],
  winPatterns: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ],
  isWinner() {
    if (this.player === "X") {
      return this.isXWinner();
    } else if (this.player === "O") {
      return this.isOWinner();
    }
  },
  isXWinner() {
    for (let winPattern of this.winPatterns) {
      let winner = true;
      for (let i of winPattern) {
        if (!this.xBoard.includes(i)) {
          winner = false;
          break;
        }
      }
      if (winner) return true;
    }
    return false;
  },
  isOWinner() {
    for (let winPattern of this.winPatterns) {
      let winner = true;
      for (let i of winPattern) {
        if (!this.oBoard.includes(i)) {
          winner = false;
          break;
        }
      }
      if (winner) return true;
    }
    return false;
  },
  changePlayer() {
    if (this.player === "X") {
      this.player = "O";
    } else if (this.player === "O") {
      this.player = "X";
    }
  },
  selectSquare(squareIndex) {
    if (this.player === "X") this.xBoard.push(squareIndex);
    if (this.player === "O") this.oBoard.push(squareIndex);
  }
};

module.exports = { board };
