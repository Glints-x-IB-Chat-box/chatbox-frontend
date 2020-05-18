import { combineReducers } from "redux";

import mainReducer from "./MainReducer";
import login from "./LoginReducer";

const combineReducer = combineReducers({
  mainReducer,
  login,
});

export default combineReducer;
