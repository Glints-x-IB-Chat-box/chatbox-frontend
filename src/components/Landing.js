import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>This is Landing Page</h1>
      <p>
        This page should be use for checking if user logged in or not, 
        right now that function is not exist yet.
      </p>
      <Link to="/home">
        <button type="button" className="btn-primary">
          Home
        </button>
      </Link>
      <Link to="/register">
        <button type="button" className="btn-primary">
          Register
        </button>
      </Link>
      <Link to="/login">
        <button type="button" className="btn-primary">
          Login
        </button>
      </Link>
    </div>
  );
}
