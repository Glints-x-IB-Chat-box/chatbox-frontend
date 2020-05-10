import {
    combineReducers
} from "redux";

// import chat from "./ChatReducer";
import login from "./LoginReducer";

const combineReducer = combineReducers({
    // chat,
    login
});

export default combineReducer