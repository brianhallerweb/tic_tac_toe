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

//////////////

// const board = {
//   board: [[null, null, null], [null, null, null], [null, null, null]],
//   player: 0 /* 0 => "X" and 1 => "O" */,
//   winner: null,
//   _winPatterns: [
//     [
//       [this.player, this.player, this.player],
//       [null, null, null],
//       [null, null, null]
//     ],
//     [
//       [null, null, null],
//       [this.player, this.player, this.player],
//       [null, null, null]
//     ],
//     [
//       [null, null, null],
//       [null, null, null],
//       [this.player, this.player, this.player]
//     ]
//   ],
//   _flatten(arr) {},
//   choice(x, y) {
//     this.board[x][y] = this.player;
//   },
//   isWinner() {
//     const flatBoard = this._flatten(this.board);
//     this._winPatterns.forEach(winPattern => {
//       const flatWinPattern = this._flatten(winPattern);
//       for (let i = 0; i < flatBoard.length; i++) {
//         if (flatWinPattern === this.player && flatBoard !== this.player) {
//           break;
//         }
//       }
//     });
//   },
//   changePlayer() {
//     if (this.player === 0) this.player = 1;
//     if (this.player === 1) this.player = 0;
//   }
// };
