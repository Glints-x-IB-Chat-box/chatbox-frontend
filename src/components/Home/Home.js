import React from "react";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row mx-0">
      <div className="col-md-4 bg-primary text-white">
        <h1 className="text-center">ChatBoxo</h1>
        <input
          type="text"
          placeholder="Search Contacts..."
          className="w-100 h-25"
        />
        <h1>This is Home Page</h1>
        <h1>This is Home Page</h1>
      </div>

      <div className="col-md-8 bg-success">
        <h1>This is Home Page</h1>
        <h1>This is Home Page</h1>
        <h1>This is Home Page</h1>
        <h1>This is Home Page</h1>
      </div>
    </div>
  );
}
