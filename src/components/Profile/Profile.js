import React from "react";
// import { Link } from "react-router-dom";
import profilePicture from "../../assets/profile.png";
import logoPicture from "../../assets/ozy.png";

export default function Profile() {
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0">
        <div className="text-center">
          <div>
            <img
              src={logoPicture}
              alt="..."
              className="rounded-circle w-50 pt-4"
            />
          </div>

          <button className="w-100 text-white section-chat">
            <div className="d-flex d-row justify-content-center">
              <a href="/home" className="contact-icon">
                <i className="fas fa-camera" />
              </a>

              <h5 className="text-white font-weight-bold pt-4 pb-2 pl-3">
                Change your profile picture
              </h5>
            </div>
          </button>

          <button className="w-100 profile-chat mt-2">
            <div className="d-flex d-row">
              <div>
                <h5 className="text-black font-weight-bold pt-2 pb-2">
                  <u>Your Name</u>
                </h5>
                <h5 className="pl-4">Chen Frederick</h5>
              </div>
              <a href="/home" className="profile-icon ml-auto mr-3">
                <i className="fas fa-pen-square" />
              </a>
            </div>
          </button>

          <button className="w-100 profile-chat mt-4 mb-4">
            <div className="d-flex d-row">
              <div>
                <h5 className="text-black font-weight-bold pt-2 pb-2">
                  <u>About</u>
                </h5>
                <h5 className="pl-4">Available</h5>
              </div>
              <a href="/home" className="profile-icon ml-auto mr-3">
                <i className="fas fa-pen-square" />
              </a>
            </div>
          </button>

          <p className="mt-auto text-white">© ChatBoxo. All Rights Reserved</p>
        </div>
      </div>
      <div className="col-md-8 bg-light vh-100">
        <div className="text-center">
          <img src={profilePicture} alt="..." className="w-75" />
          <h1>This is your Profile</h1>
          <h3>"You can modify your Profile details here."</h3>
        </div>
      </div>
    </div>
  );
}
