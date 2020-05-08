import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import logo from './../assets/logo.png'

export default function Login() {
  return (
    <div className="bg-semidark">
      <div className="row vh-100 d-flex">
        <div className="col align-self-center">
          <div className="container text-center">
            <img src={logo} alt="logo" />
            <p><b>"Executive Chatbox, for Professionals.</b></p>
          </div>
        </div>
        <div className="col align-self-center">
          <div className="container text-center form">
            <h2>CHATBOXO</h2>
            <form>
              <div className="form-group">
                <span className="input-icon">
                  <i className="fas fa-user"></i>
                </span>
                <input type="text" className="form-control with-icon" placeholder="Username" />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <i class="fas fa-key"></i>
                </span>
                <input type="password" className="form-control with-icon" placeholder="Password" />
              </div>
              <button className="btn btn-light btn-block">LOGIN</button>
              <Link to="/register">
                <button className="btn btn-link text-white">Create your Account <i className="fas fa-long-arrow-alt-right"></i></button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}
