import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "../style.css";
import { connect } from "react-redux";
import { showLogoutConfirm } from "../../actionCreators/MainAction";
import LogoutForm from "./LogoutConfirm";

const Sidebar = (props) => {
  let match = useRouteMatch();
  const showLogoutConfirmation = () => {
    props.showLogoutConfirm();
  };
  return (
    <div style={{ width: "75px", height: "100vh", backgroundColor: "#1f2d3c" }}>
      <div className="list-group">
        <NavLink
          to={match.url}
          exact={true}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-comment-dots fa-lg" />
        </NavLink>

        <NavLink
          to={`${match.url}/profile`}
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-user-circle fa-lg" />
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

        <button
          onClick={showLogoutConfirmation}
          className="list-group-item list-group-item-action logout-sidebar"
        >
          <i className="fas fa-sign-out-alt fa-lg" />
          <LogoutForm />
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  showLogoutConfirm,
};
export default connect(null, mapDispatchToProps)(Sidebar);
