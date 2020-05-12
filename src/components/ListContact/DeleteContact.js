import React from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideDeleteContactForm } from "../../actionCreators/ChatAction";

const DeleteContact = (props) => {
  return (
    <Modal show={props.show} onHide={props.hideDeleteContactForm}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">
          Are You Sure Want to Delete Your Friend?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideDeleteContactForm}>
          No
        </Button>
        <Button variant="danger" onClick={props.hideDeleteContactForm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    show: state.reducersChat.isShowDelete,
  };
};

const mapDispatchToProps = {
  hideDeleteContactForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContact);
