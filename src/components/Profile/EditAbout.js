import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideAboutForm, updateProfile } from "../../actionCreators/MainAction";

const EditAbout = (props) => {
  const [data, setData] = useState({
    about: '',
  });

  useEffect(() => {
    setData({
      about: props.about,
    });
  }, [props.about])

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.hideAboutForm();
    props.updateProfile({ ...data });
  };
  return (
    <Modal show={props.show} onHide={props.hideAboutForm}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your About</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="title">About</label>
            <input
              type="text"
              className="form-control"
              id="about"
              name="about"
              placeholder="change your about here"
              value={data.about}
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideAboutForm}>
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
    show: state.mainReducer.isShowAbout,
  };
};

const mapDispatchToProps = {
  hideAboutForm,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAbout);
