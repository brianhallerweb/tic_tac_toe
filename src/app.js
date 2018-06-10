import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import TicTacToeApp from "./components/TicTacToeApp";
import { Provider } from "react-redux";
import store from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <TicTacToeApp />
  </Provider>,
  document.getElementById("app")
);
