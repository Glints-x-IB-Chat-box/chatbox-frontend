import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { fetchBlockedUser } from "../../actionCreators/ChatAction";

const ListBlockedUser = (props) => {
  const handleAdd = (data) => {
    props.AddContacts(data._id);
    // window.alert(`You have added "${data.username}"`);
  };

  const closeListBlockedUser = () => {
    props.closeListBlockedUser(false);
  };

  useEffect(() => {
    props.fetchBlockedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contactPic = (picture) => {
    const url = process.env.REACT_APP_API_URL;
    const image = `${url}/${picture}`;
    const imageNotFound = `${url}/public/usersImage/default-user-icon.jpg`;
    return {
      backgroundImage: `url(${image}), url(${imageNotFound})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  return (
    <Modal show={props.showBlockedUser} onHide={closeListBlockedUser}>
      <Modal.Header closeButton>
        <Modal.Title>Your Block List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
            {props.dataBlockedUser.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{1 + index}</th>
                  <td>{item.username}</td>
                  <td>
                    <div
                      className="img-search rounded-circle"
                      style={contactPic(item.image)}
                    ></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dataBlockedUser: state.chatReducer.dataBlockedUser,
  };
};

const mapDispatchToProps = {
  fetchBlockedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBlockedUser);
