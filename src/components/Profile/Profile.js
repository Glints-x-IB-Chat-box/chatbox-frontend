import React from "react";
// import { Link } from "react-router-dom";
import profilePicture from "../../assets/profile.png";
import logoPicture from "../../assets/ozy.png";

import { connect } from "react-redux";
import { showEditForm } from "../../actionCreators/ChatAction";
import { showAboutForm } from "../../actionCreators/ChatAction";
import { showChangeImageForm } from "../../actionCreators/ChatAction";

import Edit from "./EditName";
import AboutForm from "./EditAbout";
import EditPicture from "./EditPicture";

const Profile = (props) => {
  const showFormEdit = () => {
    props.showEditForm();
  };
  const showFormAbout = () => {
    props.showAboutForm();
  };
  const showFormImage = () => {
    props.showChangeImageForm();
  };
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0">
        <div className="text-center">
          <div>
            <img
              src={logoPicture}
              alt="..."
              className="rounded-circle w-50 pt-4"
            />
          </div>

          <button
            onClick={showFormImage}
            className="w-100 text-white section-chat"
          >
            <div className="d-flex d-row justify-content-center">
              <p className="contact-icon my-0">
                <i className="fas fa-camera" />
              </p>

              <h5 className="text-white font-weight-bold pt-4 pb-2 pl-3">
                Change your profile picture
              </h5>
            </div>
          </button>

          <button className="w-100 profile-chat mt-2">
            <div className="d-flex d-row">
              <div>
                <h5 className="text-black font-weight-bold pt-2 pb-2">
                  <u>Your Name</u>
                </h5>
                <h5 className="pl-4">Chen Frederick</h5>
              </div>
              <p onClick={showFormEdit} className="profile-icon ml-auto mr-3">
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <button className="w-100 profile-chat mt-4 mb-4">
            <div className="d-flex d-row">
              <div>
                <h5 className="text-black font-weight-bold pt-2 pb-2">
                  <u>About</u>
                </h5>
                <h5 className="pl-4">Available</h5>
              </div>
              <p onClick={showFormAbout} className="profile-icon ml-auto mr-3">
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <p className="mt-auto text-white">© ChatBoxo. All Rights Reserved</p>
        </div>
      </div>
      <div className="col-md-8 bg-secondary text-white vh-100">
        <div className="text-center">
          <img src={profilePicture} alt="..." className="w-75" />
          <h1>This is your Profile</h1>
          <h3>"You can modify your Profile details here."</h3>
        </div>
      </div>
      <Edit />
      <AboutForm />
      <EditPicture />
    </div>
  );
};
const mapDispatchToProps = {
  showEditForm,
  showAboutForm,
  showChangeImageForm,
};
export default connect(null, mapDispatchToProps)(Profile);
