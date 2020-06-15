import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import homePicture from "../../assets/text.png";
import ListContactItem from "./ItemListContact";
import { connect } from "react-redux";
import {
  getDataContact,
  showAddContactForm,
} from "../../actionCreators/MainAction";

import AddContact from "../ListContact/AddContact";
import DeleteContact from "../ListContact/DeleteContact";
import BlockContact from "../ListContact/BlockContact";
import ListBlockedUser from "../ListContact/ListBlockedUser";
import "../style.css";

const ListContact = (props) => {
  const [showBlockedUser, setShowBlockedUser] = useState(false);

  const openListBlockedUser = () => {
    setShowBlockedUser(true);
  };

  const closeListBlockedUser = (boolean) => {
    setShowBlockedUser(boolean);
  };

  const SearchContact = (event) => {
    let { value } = event.currentTarget;
    props.getDataContact(value);
  };

  useEffect(() => {
    props.getDataContact("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0">
        <div className="list-group">
          <div className="list-group-item list-group-item-action py-0">
            <div className="d-flex d-row justify-content-center mt-2">
              <h4 className="text-white py-2">YOUR CONTACTS</h4>
            </div>
            <div className="form-group h-100  mb-4">
              <span className="input-icon">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="form-control with-icon h6 my-0"
                placeholder="Search Contacts..."
                onChange={SearchContact}
              />
            </div>
          </div>
        </div>

        <div className="scrollable-div contact-list">
          {props.dataContact.map((item, index) => {
            // console.log(props.dataContact);
            return (
              <ListContactItem
                key={index}
                dataContacts={item}
                // history={history}
              />
            );
          })}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 mt-3">
              <button
                onClick={props.showAddContactForm}
                className="btn add-contact-btn btn-block d-flex d-row"
              >
                <p className="my-0 mr-2">Add Contact</p>
                <i className="fas fa-user-plus align-self-center" />
              </button>
            </div>
            <div className="col-6 mt-3 pl-0">
              <button
                onClick={openListBlockedUser}
                className="btn add-contact-btn btn-block d-flex d-row"
              >
                <p className="my-0 mr-2">Blocked Contact</p>
                <i className="fas fa-ban align-self-center" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8 bg-light vh-100">
        <div className="text-center center-div">
          <img src={homePicture} alt="..." className="w-50" />
          <h2>This is your Contact List</h2>
          <h4>"You can modify your contact list here."</h4>
        </div>
      </div>
      <AddContact />
      <ListBlockedUser
        showBlockedUser={showBlockedUser}
        closeListBlockedUser={closeListBlockedUser}
      />
      <DeleteContact />
      <BlockContact />
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dataContact: state.mainReducer.dataContact,
  };
};
const mapDispatchToProps = {
  getDataContact,
  showAddContactForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContact);
