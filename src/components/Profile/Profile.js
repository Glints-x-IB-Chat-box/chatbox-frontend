import React, { useState, useEffect } from "react";
import profilePicture from "../../assets/profile.png";

import { connect } from "react-redux";
import {
  showEditForm,
  showAboutForm,
  showChangeImageForm,
  getDataProfile,
} from "../../actionCreators/MainAction";

import Edit from "./EditName";
import AboutForm from "./EditAbout";
import EditPicture from "./EditPicture";

const Profile = (props) => {
  const [data, setData] = useState({
    username: "",
    about: "",
    image: "",
  });
  const { profile, showEditForm, showAboutForm, showChangeImageForm } = props;
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setData({
      username: profile.username,
      about: profile.about,
      image: profile.image,
    });
  }, [profile]);

  useEffect(() => {
    props.getDataProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const image = `${url}/${
    data.image || "public/usersImage/default-user-icon.jpg"
  }`;
  const imageNotFound = `${url}/public/usersImage/default-user-icon.jpg`;

  const myProfile = {
    backgroundImage: `url(${image}), url(${imageNotFound})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "50%",
    width: "50%"
  };
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0">
        <div className="text-center">
          <div>
            <div className="mt-4 mx-auto rounded-circle" style={myProfile}></div>
          </div>

          <button
            onClick={showChangeImageForm}
            className="w-100 text-white section-profile mb-2"
          >
            <div className="d-flex d-row justify-content-center">
              <p className="contact-icon my-0">
                <i className="fas fa-camera" />
              </p>
              <h5 className="text-white font-weight-bold pt-4 pb-2 pl-3 mb-2">
                Change your profile picture
              </h5>
            </div>
          </button>

          <button
            onClick={showEditForm}
            className="w-75 profile-chat mt-2 pb-2 pl-0"
          >
            <div className="d-flex d-row">
              <div className="text-left">
                <h6 className="text-black font-weight-bold py-2 pl-4 my-0">
                  <u>Username</u>
                </h6>
                <h6 className="my-0 pl-4">{data.username}</h6>
              </div>
              <p className="profile-icon ml-auto mr-3 my-0">
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <button
            onClick={showAboutForm}
            className="w-75 profile-chat my-4 pb-2 pl-0"
          >
            <div className="d-flex d-row">
              <div className="text-left">
                <h6 className="text-black font-weight-bold py-2 pl-4 my-0">
                  <u>About</u>
                </h6>
                <h6 className="my-0 pl-4">{data.about}</h6>
              </div>
              <p className="profile-icon ml-auto mr-3 my-0">
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <div className="d-flex justify-content-center">
            <p className="text-white copyright-txt">
              © CircleMessenger. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-8 vh-100">
        <div className="text-center center-div">
          <img src={profilePicture} alt="..." className="w-50" />
          <h2>This is your Profile</h2>
          <h4>"You can modify your Profile details here."</h4>
        </div>
      </div>
      <Edit username={data.username} />
      <AboutForm about={data.about} />
      <EditPicture />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.mainReducer.dataProfile,
  };
};
const mapDispatchToProps = {
  getDataProfile,
  showEditForm,
  showAboutForm,
  showChangeImageForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
