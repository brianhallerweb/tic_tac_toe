import { createStore } from "redux";
import boardReducer from "../reducers/boardReducer";

const store = createStore(
  boardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
