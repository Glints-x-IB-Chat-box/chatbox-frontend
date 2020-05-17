import React from "react";

import { connect } from "react-redux";
import {
  Redirect,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import Sidebar from "./components/Home/Sidebar";
import Profile from "./components/Profile/Profile";
import ListContact from "./components/ListContact/ListContact";
import About from "./components/About/About";
import Group from "./components/Group/Group";
import Logout from "./components/Logout";

function App(props) {
  return (
    <Router>
      <Switch>
        <div className="d-flex flex-row">
          <div className="flex-grow-2">
            <Sidebar />
          </div>
          <div className="flex-fill">
            {/* <Route path="/home">
              <Home />
            </Route> */}

            <Route path="/profile">
              {props.token ? <Profile /> : <Redirect push to="/login" />}
            </Route>

            <Route path="/listContact">
              {props.token ? <ListContact /> : <Redirect push to="/login" />}
            </Route>

            {/* <Route path="/group">
            {props.token ? <Group /> : <Redirect push to="/login" />}
            </Route> */}

            <Route path="/about">
              {props.token ? <About /> : <Redirect push to="/login" />}
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
              {props.token ? <Home /> : <Redirect push to="/login" />}
            </Route>
          </div>
        </div>
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
