import React from "react";
import "../style.css";
import { connect } from "react-redux";

import { showDeleteContactForm } from "../../actionCreators/ChatAction";

const itemListContact = (props) => {
  const showFormDelete = () => {
    props.showDeleteContactForm(props.dataContacts);
  };
  return (
    <div>
      <button className="w-100 text-white listcontact-chat">
        <div className="d-flex d-row">
          <img
            src={props.dataContacts.image}
            className="chat-profile-pic"
            alt="..."
          />
          <div className="section-chat-div">
            <div className="d-flex d-row">
              <h6 className="my-0 name-chat">{props.dataContacts.username}</h6>
              <span className="dot bg-success" />
            </div>
            <p className="preview-chat">{props.dataContacts.about}</p>
          </div>
          <div className="d-flex d-row ml-auto">
            <a href="/home" className="contact-icon2">
              <i className="fas fa-comment" />
            </a>
            <p onClick={showFormDelete} className="contact-icon2 my-0">
              <i className="fas fa-user-times" />
            </p>
          </div>
        </div>
      </button>
      ;
    </div>
  );
};

const mapDispatchToProps = {
  showDeleteContactForm,
};

export default connect(null, mapDispatchToProps)(itemListContact);
