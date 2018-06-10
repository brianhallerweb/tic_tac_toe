function addX(sqrNum) {
  return {
    type: "ADD_X",
    sqrNum
  };
}

function addO(sqrNum) {
  return {
    type: "ADD_O",
    sqrNum
  };
}

function changeTurn() {
  return {
    type: "CHANGE_TURN"
  };
}

function winner(winningPlayer) {
  return {
    type: "WINNER",
    winningPlayer
  };
}

function startNewGame() {
  return {
    type: "START_NEW_GAME"
  };
}

module.exports = {
  addX,
  addO,
  changeTurn,
  winner,
  startNewGame
};
