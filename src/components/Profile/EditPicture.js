import React, { Component, createRef } from "react";
import { Modal, Button } from "react-bootstrap";
import FormData from "form-data";
import { connect } from "react-redux";

import {
  hideChangeImageForm,
  updateProfPic,
} from "../../actionCreators/MainAction";

class EditPicture extends Component {
  // in order to use ref u need to use class component
  constructor(props) {
    super(props);
    // why use ref? because use state not working, use event not available.
    this.imageRef = createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    // result from append gonna go inside this "formData".
    formData.append("image", this.imageRef.current.files[0]);
    this.props.hideChangeImageForm();
    // this is why we send formData to the axios in actionCreator.
    this.props.updateProfPic(formData);
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideChangeImageForm}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Change Profile Picture</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <input type="file" name="image" ref={this.imageRef} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.hideChangeImageForm}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Change
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    show: state.mainReducer.isShowPictureForm,
  };
};

const mapDispatchToProps = {
  hideChangeImageForm,
  updateProfPic,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPicture);
