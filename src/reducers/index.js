import { combineReducers } from "redux";

import reducersChat from "./ChatReducer";
import login from "./LoginReducer";

const combineReducer = combineReducers({
  reducersChat,
  login,
});

export default combineReducer;
