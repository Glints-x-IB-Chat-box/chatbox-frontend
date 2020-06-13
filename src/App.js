import React from "react";

import { connect } from "react-redux";
import { BrowserView, MobileView } from "react-device-detect";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Index";
import Logout from "./components/Auth/Logout";

function App(props) {
  return (
    <div>
      <BrowserView>
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
              {props.token ? (
                <Redirect push to="/app" />
              ) : (
                <Redirect push to="/login" />
              )}
            </Route>

            <Route path="/app">
              {props.token ? <Home /> : <Redirect push to="/login" />}
            </Route>
          </Switch>
        </Router>
      </BrowserView>
      <MobileView>TES</MobileView>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(App);
