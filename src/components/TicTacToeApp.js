import React from "react";
import Board from "./Board";
import NewGameButton from "./NewGameButton";

const TicTacToeApp = props => (
  <div>
    <h3>Tic Tac Toe</h3>
    <Board />
    <NewGameButton />
  </div>
);

export default TicTacToeApp;
