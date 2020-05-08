import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import reducers from "./reducers/ChatReducer";
import reducers2 from "./reducers/LoginReducer";

import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Index";

const combineReducer = combineReducers({
  reducers,
  reducers2,
});
const store = createStore(combineReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store subscribe", store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Landing />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
