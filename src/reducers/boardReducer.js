const boardReducerDefaultState = {
  xBoard: [],
  oBoard: [],
  player: "X",
  winner: null
};

function boardReducer(state = boardReducerDefaultState, action) {
  switch (action.type) {
    case "ADD_X":
      return Object.assign({}, state, {
        xBoard: state.xBoard.concat(action.sqrNum)
      });
    case "ADD_O":
      return Object.assign({}, state, {
        oBoard: state.oBoard.concat(action.sqrNum)
      });
    case "CHANGE_TURN":
      return Object.assign({}, state, {
        player: state.player === "X" ? "O" : "X"
      });
    case "WINNER":
      return Object.assign({}, state, {
        winner: action.winningPlayer
      });
    case "START_NEW_GAME":
      return boardReducerDefaultState;
    default:
      return state;
  }
}

export default boardReducer;
