import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import homePicture from "../../assets/text.png";
import ListContactItem from "./ItemListContact";

import { connect } from "react-redux";
import {
  getDataContact,
  showAddContactForm,
} from "../../actionCreators/ChatAction";

import AddContact from "../ListContact/AddContact";
import DeleteContact from "../ListContact/DeleteContact";
import "../style.css";

const ListContact = (props) => {
  useEffect(() => {
    props.getDataContact();
  }, [props.getDataContact]);

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
          {props.dataContact.map((item, index) => {
            // console.log(props.dataContact);
            return <ListContactItem key={index} dataContacts={item} />;
          })}
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
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dataContact: state.reducersChat.dataContact,
  };
};
const mapDispatchToProps = {
  getDataContact,
  showAddContactForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContact);
