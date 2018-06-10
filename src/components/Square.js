import React, { Component } from "react";

const Square = props => (
  <div>
    <input
      type="button"
      value={props.chosenBy}
      disabled={props.disabled}
      onClick={() => props.chooseSquare(props.sqrNum)}
    />
  </div>
);

export default Square;
