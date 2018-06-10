import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "./Square.js";
import {
  addX,
  addO,
  changeTurn,
  startNewGame,
  winner
} from "../actions/boardActions";
import { isXWinner, isOWinner } from "../gameEvaluator/gameEvaluator";

//You temporarily split the grid into 3 rows to avoid the css. You will go back
// and render the squares in one list and arrange them using pure css.

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (isXWinner(this.props.xBoard)) {
      this.props.dispatch(winner("X"));
    }
    if (isOWinner(this.props.oBoard)) {
      this.props.dispatch(winner("O"));
    }
  }

  chooseSquare(sqrNum) {
    if (this.props.winner) return;

    if (this.props.player === "X") {
      this.props.dispatch(addX(sqrNum));
    } else if (this.props.player === "O") {
      this.props.dispatch(addO(sqrNum));
    }

    this.props.dispatch(changeTurn());
  }

  chosenBy(sqrNum) {
    if (this.props.xBoard.includes(sqrNum)) {
      return "X";
    } else if (this.props.oBoard.includes(sqrNum)) {
      return "O";
    } else {
      return "   ";
    }
  }

  render() {
    return (
      <div>
        {this.props.winner && <div>{this.props.winner} wins!</div>}
        <div className="row1">
          {["0", "1", "2"].map(sqrNum => (
            <Square
              key={sqrNum}
              sqrNum={sqrNum}
              chooseSquare={this.chooseSquare.bind(this)}
              disabled={
                this.props.xBoard.includes(sqrNum) ||
                this.props.oBoard.includes(sqrNum)
              }
              chosenBy={this.chosenBy(sqrNum)}
            />
          ))}
        </div>
        <div className="row2">
          {["3", "4", "5"].map(sqrNum => (
            <Square
              key={sqrNum}
              sqrNum={sqrNum}
              chooseSquare={this.chooseSquare.bind(this)}
              disabled={
                this.props.xBoard.includes(sqrNum) ||
                this.props.oBoard.includes(sqrNum)
              }
              chosenBy={this.chosenBy(sqrNum)}
            />
          ))}
        </div>
        <div className="row3">
          {["6", "7", "8"].map(sqrNum => (
            <Square
              key={sqrNum}
              sqrNum={sqrNum}
              chooseSquare={this.chooseSquare.bind(this)}
              disabled={
                this.props.xBoard.includes(sqrNum) ||
                this.props.oBoard.includes(sqrNum)
              }
              chosenBy={this.chosenBy(sqrNum)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  xBoard: state.xBoard,
  oBoard: state.oBoard,
  player: state.player,
  winner: state.winner
});

export default connect(mapStateToProps)(Board);
