import React from "react";
import './style.css'
import logo from './../assets/logo.png'

export default function Register() {
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
              <i className="fas fa-envelope"></i>
              </span>
                <input type="password" className="form-control with-icon" placeholder="Email" />
              </div>
              <div className="form-group">
              <span className="input-icon">
              <i className="fas fa-mobile-alt"></i>
              </span>
                <input type="password" className="form-control with-icon" placeholder="Phone Number" />
              </div>
              <div className="form-group">
              <span className="input-icon">
                  <i class="fas fa-key"></i>
                </span>
                <input type="password" className="form-control with-icon" placeholder="Password" />
              </div>
              <div className="form-group">
              <span className="input-icon">
                  <i class="fas fa-key"></i>
                </span>
                <input type="password" className="form-control with-icon" placeholder="Confirm Password" />
              </div>
              <button className="btn btn-light btn-block">REGISTER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}
