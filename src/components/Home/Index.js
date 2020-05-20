import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Home from "./Home";
import Sidebar from "./Sidebar";
import Profile from "../Profile/Profile";
import ListContact from "../ListContact/ListContact";
import About from "../About/About";
import Group from "../Group/Group";

export default function Index() {
  let match = useRouteMatch();

  return (
    <div className="d-flex flex-row">
      <div className="flex-grow-2">
        <Sidebar />
      </div>
      <div className="flex-fill">
        <Switch>
          <Route exact path={match.path}>
            <Home />
          </Route>

          <Route path={`${match.path}/chat/:id`}>
            <Home />
          </Route>

          <Route path={`${match.path}/profile`}>
            <Profile />
          </Route>

          <Route path={`${match.path}/listContact`}>
            <ListContact />
          </Route>

          <Route path={`${match.path}/group`}>
            <Group />
          </Route>

          <Route path={`${match.path}/about`}>
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
