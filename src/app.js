const board = require("./board");
const controller = require("./controller");
const view = require("./view");

document.getElementById("0").addEventListener("click", () => {
  const squareIndex = document.getElementById("0").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("1").addEventListener("click", () => {
  const squareIndex = document.getElementById("1").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("2").addEventListener("click", () => {
  const squareIndex = document.getElementById("2").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("3").addEventListener("click", () => {
  const squareIndex = document.getElementById("3").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("4").addEventListener("click", () => {
  const squareIndex = document.getElementById("4").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("5").addEventListener("click", () => {
  const squareIndex = document.getElementById("5").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("6").addEventListener("click", () => {
  const squareIndex = document.getElementById("6").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("7").addEventListener("click", () => {
  const squareIndex = document.getElementById("7").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});
document.getElementById("8").addEventListener("click", () => {
  const squareIndex = document.getElementById("8").id;
  if (
    !board.xBoard.includes(squareIndex) &&
    !board.oBoard.includes(squareIndex)
  ) {
    controller.handleSelectSquare(squareIndex);
  }
});

document
  .getElementById("startNew")
  .addEventListener("click", controller.handleStartNew);
