import React from "react";
import { connect } from "react-redux";
import { startNewGame } from "../actions/boardActions";

const NewGameButton = props => (
  <div>
    <button
      onClick={() => {
        props.dispatch(startNewGame());
      }}
    >
      Start New Game
    </button>
  </div>
);

export default connect()(NewGameButton);
