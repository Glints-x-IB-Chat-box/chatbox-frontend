import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "../style.css";

export default function Sidebar() {
  let match = useRouteMatch()
  return (
    <div style={{ width: "75px", height: "100vh", backgroundColor: "#1f2d3c" }}>
      <div className="list-group">
        <Link to={match.url} className="list-group-item list-group-item-action">
          <i className="fas fa-comment-dots fa-lg" />
        </Link>

        <Link to={`${match.url}/profile`} className="list-group-item list-group-item-action">
          <i className="fas fa-user-circle fa-lg" />
        </Link>
        {/* <Link to={`${match.url}/group`} className="list-group-item list-group-item-action">
          Group
        </Link> */}
        <Link to={`${match.url}/listContact`} className="list-group-item list-group-item-action">
          <i className="fas fa-users fa-lg" />
        </Link>
        <Link to={`${match.url}/about`} className="list-group-item list-group-item-action">
          <i className="fas fa-info-circle fa-lg" />
        </Link>
        <Link to="/logout" className="mb-auto list-group-item list-group-item-action mt-auto">
          <i className="fas fa-sign-out-alt fa-lg" />
        </Link>
      </div>
    </div>
  );
}
