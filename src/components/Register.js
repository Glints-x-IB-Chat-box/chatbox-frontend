import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>This is Login Page</h1>
      <Link to="/">
        <button type="button" className="btn-primary">
          Register
        </button>
      </Link>
    </div>
  );
}
