import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import profile from "../../assets/Fred.png";
import { connect } from "react-redux";

import { hideAddContactForm } from "../../actionCreators/ChatAction";

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
  };
  return (
    <Modal show={props.show} onHide={props.hideAddContactForm}>
      <Modal.Header closeButton>
        <Modal.Title>Search Your Friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="form-group">
          <label for="title">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            placeholder="Enter your Friend's Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Friends</th>
              <th scope="col">Photo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <img src={profile} className="img-search" alt="" />
              </td>
              <td>
                <p className="my-0 contact-icon3">
                  <i className="fas fa-user-plus" />
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Frederick Chen</td>
              <td>
                <img src={profile} className="img-search" alt="" />
              </td>
              <td>
                <p className="my-0 contact-icon3">
                  <i className="fas fa-user-plus" />
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Benjamin Franklin</td>
              <td>
                <img src={profile} className="img-search" alt="" />
              </td>
              <td>
                <p className="my-0 contact-icon3">
                  <i className="fas fa-user-plus" />
                </p>
              </td>
            </tr>
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
  };
};

const mapDispatchToProps = {
  hideAddContactForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
