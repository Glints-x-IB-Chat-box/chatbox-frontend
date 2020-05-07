import React from "react";
// import { Link } from "react-router-dom";
import profilePicture from "../../assets/Fred.png";
import "../style.css";
export default function Home() {
  // const iconSearch = <i class="fas fa-search"></i>;

  // handling preview limit
  // const maxPreview = 30;
  // stackoverflow-Maximum amount of characters in a div/paragraph tag in react

  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2">
        <h1 className="text-center text-white py-2">ChatBoxo</h1>
        <input
          type="text"
          placeholder="Search Contacts..."
          className="w-100 h6 p-2"
        />

        <div className="pt-3">
          <button className="w-100 text-white section-chat">
            <div className="d-flex d-row">
              <img
                src={profilePicture}
                className="chat-profile-pic"
                alt="..."
              />
              <div className="section-chat-div">
                <div className="d-flex d-row">
                  <h6 className="my-0 name-chat">River Huang</h6>
                  <span className="dot bg-success" />
                </div>
                <p className="preview-chat">Hi,Welcome to Chatboxo.</p>
              </div>
              <p className="ml-auto d-flex align-items-center">12.50</p>
            </div>
          </button>

          <button className="w-100 text-white section-chat">
            <div className="d-flex d-row">
              <img
                src={profilePicture}
                className="chat-profile-pic"
                alt="..."
              />
              <div className="section-chat-div">
                <div className="d-flex d-row">
                  <h6 className="my-0 name-chat">Ahmad Fakhrozy</h6>
                  <span className="dot bg-danger" />
                </div>
                <p className="preview-chat">Hi,Frederick!</p>
              </div>
              <p className="ml-auto d-flex align-items-center">11.21</p>
            </div>
          </button>
        </div>

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
