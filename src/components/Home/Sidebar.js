import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "150px" }}>
      <div class="list-group">
        <Link to="/home" class="list-group-item list-group-item-action active">
          Sidebar
        </Link>
        <Link to="/home" class="list-group-item list-group-item-action">
          Chat
        </Link>
        <Link to="/profile" class="list-group-item list-group-item-action">
          Profile
        </Link>
        <Link to="/listContact" class="list-group-item list-group-item-action">
          List Contacts
        </Link>
        <Link to="/about" class="list-group-item list-group-item-action">
          About
        </Link>
      </div>
    </div>
  );
}
