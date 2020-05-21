import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "../style.css";

export default function Sidebar() {
  let match = useRouteMatch();
  return (
    <div style={{ width: "75px", height: "100vh", backgroundColor: "#1f2d3c" }}>
      <div className="list-group">
        <NavLink
          to={`${match.url}/profile`}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-user-circle fa-lg" />
        </NavLink>

        <NavLink
          to={match.url}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-comment-dots fa-lg" />
        </NavLink>
        {/* <Link to={`${match.url}/group`} className="list-group-item list-group-item-action">
          Group
        </Link> */}
        <NavLink
          to={`${match.url}/listContact`}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-address-book fa-lg" />
        </NavLink>
        <NavLink
          to={`${match.url}/about`}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-info-circle fa-lg" />
        </NavLink>
        <NavLink
          to="/logout"
          className="list-group-item list-group-item-action mt-auto"
        >
          <i className="fas fa-sign-out-alt fa-lg" />
        </NavLink>
      </div>
    </div>
  );
}
