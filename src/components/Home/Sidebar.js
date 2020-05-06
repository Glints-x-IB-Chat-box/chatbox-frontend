import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px" }}>
      <ol>
        <li>link</li>
        <li>link</li>
      </ol>
    </div>
  );
  return (
    <div className="row">
      <div className="col-md-2">
        <h1>This is Sidebar</h1>
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <Link to="/home">
              <button type="button" className="btn-primary">
                Home Page
              </button>
            </Link>
          </div>

          <div class="p-2 bd-highlight">
            <Link to="/profile">
              <button type="button" className="btn-primary">
                Profile Page
              </button>
            </Link>
          </div>

          <div class="p-2 bd-highlight">
            <Link to="/listContact">
              <button type="button" className="btn-primary">
                ListContact Page
              </button>
            </Link>
          </div>

          <div class="p-2 bd-highlight">
            <Link to="/about">
              <button type="button" className="btn-primary">
                About Page
              </button>
            </Link>
          </div>

          <div class="p-2 bd-highlight mt-auto">
            <Link to="/about">
              <button type="button" className="btn-primary">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ul>
        <li>halo</li>
        <li>wew</li>
      </ul>
    </div>
  );
}
