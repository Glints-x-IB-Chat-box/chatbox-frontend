import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import {
  hideAddContactForm,
  getDataUser,
} from "../../actionCreators/ChatAction";

const AddContact = (props) => {
  const [data, setData] = useState({
    username: "",
  });
  console.log(data);

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
    props.getDataUser(value);
  };

  useEffect(() => {
    props.getDataUser();
  }, []);

  return (
    <Modal show={props.show} onHide={props.hideAddContactForm}>
      <Modal.Header closeButton>
        <Modal.Title>Search Your Friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="title">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your Friend's Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Friends</th>
              <th scope="col">Photo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.dataContact.map((item, index) => {
              // console.log(props.dataContact);
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.username}</td>
                  <td>
                    <img src={item.image} className="img-search" alt="" />
                  </td>
                  <td>
                    <p className="my-0 contact-icon3">
                      <i className="fas fa-user-plus" />
                    </p>
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
  //   console.log(state);
  return {
    show: state.reducersChat.isShowAdd,
    dataContact: state.reducersChat.dataContact,
  };
};

const mapDispatchToProps = {
  hideAddContactForm,
  getDataUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
