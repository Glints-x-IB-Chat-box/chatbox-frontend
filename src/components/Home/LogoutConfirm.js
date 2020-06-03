import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { hideLogoutConfirm } from "../../actionCreators/MainAction";

const LogoutConfirmation = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    history.push("/logout");
  };
  return (
    <Modal show={props.show} onHide={props.hideLogoutConfirm}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">Are You Sure Want to Logout?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideLogoutConfirm}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleLogout}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state.mainReducer.isShowLogoutForm);
  return {
    show: state.mainReducer.isShowLogoutForm,
  };
};

const mapDispatchToProps = {
  hideLogoutConfirm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutConfirmation);
