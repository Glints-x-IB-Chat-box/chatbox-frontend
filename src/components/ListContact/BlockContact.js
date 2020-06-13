import React from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import {
  hideBlockContactForm,
  blockContacts,
} from "../../actionCreators/MainAction";

const BlockContact = (props) => {
  //console.log(props.data);

  const handleBlock = () => {
    props.blockContacts(props.data);
  };
  return (
    <Modal show={props.show} onHide={props.hideBlockContactForm}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">
          Are You Sure Want to Block Your Contact, "{props.data.username}
          "?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideBlockContactForm}>
          No
        </Button>
        <Button variant="danger" onClick={handleBlock}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.mainReducer.isShowBlock);
  return {
    show: state.mainReducer.isShowBlock,
    data: state.mainReducer.showBlockData,
    // dataBlock: state.mainReducer.dataBlock,
  };
};

const mapDispatchToProps = {
  hideBlockContactForm,
  blockContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockContact);
