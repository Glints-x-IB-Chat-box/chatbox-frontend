import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers"

import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Index";
import Logout from "./components/Logout";

const store = createStore(reducers, applyMiddleware(thunk));

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

          <Route exact path="/logout">
            <Logout />
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
