import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import FormData from "form-data";
import { connect } from "react-redux";

import { hideChangeImageForm, updateProfPic } from "../../actionCreators/MainAction";

class EditPicture extends Component {
  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var formData = new FormData()
    console.log('imageRef', this.imageRef.current)
    formData.append("image", this.imageRef.current.files[0])
    this.props.hideChangeImageForm()
    this.props.updateProfPic(formData)
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideChangeImageForm}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Change Profile Picture</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <input
              type="file"
              name="image"
              ref={this.imageRef}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideChangeImageForm}>
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
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    show: state.mainReducer.isShowPictureForm
  };
};

const mapDispatchToProps = {
  hideChangeImageForm,
  updateProfPic
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPicture);
