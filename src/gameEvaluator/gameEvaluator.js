const winPatterns = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"]
];

function isXWinner(xBoard) {
  for (let winPattern of winPatterns) {
    let winner = true;
    for (let i of winPattern) {
      if (!xBoard.includes(i)) {
        winner = false;
        break;
      }
    }
    if (winner) return true;
  }
  return false;
}

function isOWinner(oBoard) {
  for (let winPattern of winPatterns) {
    let winner = true;
    for (let i of winPattern) {
      if (!oBoard.includes(i)) {
        winner = false;
        break;
      }
    }
    if (winner) return true;
  }
  return false;
}

export { isXWinner, isOWinner };
