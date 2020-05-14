import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import homePicture from "../../assets/text2.png";
import "../style.css";

import { connect } from "react-redux";
import { getDataContact } from "../../actionCreators/ChatAction";

const Home = (props) => {
  // const iconSearch = <i className="fas fa-search"></i>;

  // handling preview limit
  // const maxPreview = 30;
  // stackoverflow-Maximum amount of characters in a div/paragraph tag in react

  useEffect(() => {
    props.getDataContact();
  }, []);

  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100">
        <h1 className="text-center text-white py-2">ChatBoxo</h1>
        <input
          type="text"
          placeholder="Search Contacts..."
          className="w-100 h6 p-2"
        />

        <div className="pt-3">
          {props.dataContact.map((item, index) => {
            console.log(props.dataContact);
            return (
              <button className="w-100 text-white section-chat" key={index}>
                <div className="d-flex d-row">
                  <img
                    src={item.image}
                    className="chat-profile-pic"
                    alt="..."
                  />
                  <div className="section-chat-div">
                    <div className="d-flex d-row">
                      <h6 className="my-0 name-chat">{item.username}</h6>
                      <span className="dot bg-success" />
                    </div>
                    <p className="preview-chat">{item.about}</p>
                  </div>
                  <p className="ml-auto d-flex align-items-center">12.50</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* <div className="col-md-8 bg-light vh-100">
        <div className="text-center">
          <img src={homePicture} alt="..." className="w-75" />
          <h1>Welcome to Chatboxo!</h1>
          <h3>“Executive Chatbox, for Professionals.”</h3>
        </div>
      </div> */}

      <div className="col-md-8 bg-light vh-100 px-0">
        <div className="scrollable-div">
          <div className="bg-secondary">
            <img src={homePicture} alt="..." className="rounded-circle w-75" />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    dataContact: state.reducersChat.dataContact,
  };
};

const mapDispatchToProps = {
  getDataContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
