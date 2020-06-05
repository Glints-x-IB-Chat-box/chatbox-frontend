import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideEditForm, updateProfile } from "../../actionCreators/MainAction";

const EditName = (props) => {
  const [data, setData] = useState({
    username: '',
  });

  useEffect(() => {
    setData({
      username: props.username,
    });
  }, [props.username])

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const toInputLowercase = event => {
    event.target.value = event.target.value.toLowerCase();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.hideEditForm();
    props.updateProfile({ ...data });
  };
  return (
    <Modal show={props.show} onHide={props.hideEditForm}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your Name</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="title">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="change your username here"
              value={data.username}
              onChange={handleChange}
              onInput={toInputLowercase}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideEditForm}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Edit Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    show: state.mainReducer.isShowEdit,
  };
};

const mapDispatchToProps = {
  hideEditForm,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(EditName);
