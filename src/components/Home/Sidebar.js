import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ozy.png";
import "../style.css";

export default function Sidebar() {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div
      style={{ width: "150px", height: "100vh", backgroundColor: "#1f2d3c" }}
    >
      <div className="list-group">
        <Link to="/profile" class="list-group-item list-group-item-action">
          <img src={logo} alt="..." className="w-100" />
        </Link>
        <Link to="/home" class="list-group-item list-group-item-action">
          Chat
        </Link>
        <Link to="/group" class="list-group-item list-group-item-action">
          Group
        </Link>
        <Link to="/listContact" class="list-group-item list-group-item-action">
          List Contacts
        </Link>
        <Link to="/about" class="list-group-item list-group-item-action">
          About
        </Link>
        <a
          href="/"
          onClick={logOut}
          class="mb-auto list-group-item list-group-item-action"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
