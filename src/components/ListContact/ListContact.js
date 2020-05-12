import React from "react";
// import { Link } from "react-router-dom";
import profilePicture from "../../assets/Fred.png";
import profilePicture2 from "../../assets/Intan.png";
import homePicture from "../../assets/text.png";

import { connect } from "react-redux";
import { showAddContactForm } from "../../actionCreators/ChatAction";
import { showDeleteContactForm } from "../../actionCreators/ChatAction";

import AddContact from "../ListContact/AddContact";
import DeleteContact from "../ListContact/DeleteContact";
import "../style.css";

const ListContact = (props) => {
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100">
        <div className="d-flex d-row justify-content-center">
          <h2 className="text-white py-2">Your Contacts</h2>
          <p onClick={props.showAddContactForm} className="contact-icon my-0">
            <i className="fas fa-user-plus" />
          </p>
        </div>
        <input
          type="text"
          placeholder="Search Contacts..."
          className="w-100 h6 p-2"
        />

        <div className="pt-3">
          <button className="w-100 text-white listcontact-chat">
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
                <p className="preview-chat">Dm me later, busy.</p>
              </div>
              <div className="d-flex d-row ml-auto">
                <a href="/home" className="contact-icon2">
                  <i className="fas fa-comment" />
                </a>
                <p
                  onClick={props.showDeleteContactForm}
                  className="contact-icon2 my-0"
                >
                  <i className="fas fa-user-times" />
                </p>
              </div>
            </div>
          </button>

          <button className="w-100 text-white listcontact-chat">
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
                <p className="preview-chat">Available</p>
              </div>
              <div className="d-flex d-row ml-auto">
                <a href="/home" className="contact-icon2">
                  <i className="fas fa-comment" />
                </a>
                <p
                  onClick={props.showDeleteContactForm}
                  className="contact-icon2 my-0"
                >
                  <i className="fas fa-user-times" />
                </p>
              </div>
            </div>
          </button>

          <button className="w-100 text-white listcontact-chat">
            <div className="d-flex d-row">
              <img
                src={profilePicture2}
                className="chat-profile-pic"
                alt="..."
              />
              <div className="section-chat-div">
                <div className="d-flex d-row">
                  <h6 className="my-0 name-chat">Intan Adela</h6>
                  <span className="dot bg-success" />
                </div>
                <p className="preview-chat">Trying this chatboxo is Fun!</p>
              </div>
              <div className="d-flex d-row ml-auto">
                <a href="/home" className="contact-icon2">
                  <i className="fas fa-comment" />
                </a>
                <p
                  onClick={props.showDeleteContactForm}
                  className="contact-icon2 my-0"
                >
                  <i className="fas fa-user-times" />
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="col-md-8 bg-light vh-100">
        <div className="text-center">
          <img src={homePicture} alt="..." className="w-75" />
          <h1>This is your List Contact</h1>
          <h3>"You can modify your list contact here."</h3>
        </div>
      </div>
      <AddContact />
      <DeleteContact />
    </div>
  );
};
const mapDispatchToProps = {
  showAddContactForm,
  showDeleteContactForm,
};
export default connect(null, mapDispatchToProps)(ListContact);
