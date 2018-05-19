const board = require("./board.js");

const view = {
  viewSelectSquare(index) {
    document.getElementById(index).innerText = board.player;
  },
  viewStartNew() {
    document.getElementById("xWinMessage").style.display = "none";
    document.getElementById("oWinMessage").style.display = "none";
    document.getElementById("0").innerText = "_";
    document.getElementById("1").innerText = "_";
    document.getElementById("2").innerText = "_";
    document.getElementById("3").innerText = "_";
    document.getElementById("4").innerText = "_";
    document.getElementById("5").innerText = "_";
    document.getElementById("6").innerText = "_";
    document.getElementById("7").innerText = "_";
    document.getElementById("8").innerText = "_";
  },
  viewWin(player) {
    if (player === "X") {
      document.getElementById("xWinMessage").style.display = "block";
    } else if (player === "O") {
      document.getElementById("oWinMessage").style.display = "block";
    }
  }
};

module.exports = view;
