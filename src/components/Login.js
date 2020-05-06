import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>This is Login Page</h1>
      <Link to="/home">
        <button type="button" className="btn-primary">
          Login
        </button>
      </Link>
    </div>
  );
}
