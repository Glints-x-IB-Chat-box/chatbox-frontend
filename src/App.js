import React from "react";

import { connect } from "react-redux";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Index";
import Logout from "./components/Logout";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          {props.token ? <Redirect push to="/" /> : <Register />}
        </Route>

        <Route path="/login">
          {props.token ? <Redirect push to="/" /> : <Login />}
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route exact path="/">
          {props.token ? <Redirect push to="/app" /> : <Redirect push to="/login" />}
        </Route>

        <Route path="/app">
          {props.token ? <Home /> : <Redirect push to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(App);
