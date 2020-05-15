import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import homePicture from "../../assets/text.png";
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
      <div className="col-md-4 vh-100 px-0 bg-mainchat border-right-3 border-white scrollable-div">
        <div className="list-group">
          <div className="list-group-item list-group-item-action d-flex justify-content-center py-0">
            <div className="form-group h-100 my-0 mt-4 mb-4">
              <span className="input-icon">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="form-control with-icon h6 my-0"
                placeholder="Search Contacts..."
              />
            </div>
          </div>
        </div>

        <div>
          {props.dataContact.map((item, index) => {
            console.log(props.dataContact);
            return (
              <div
                className="list-group-item list-group-item-action active section-chat py-3"
                key={index}
              >
                <div className="d-flex d-row">
                  <img
                    src={item.image}
                    className="chat-profile-pic rounded-circle"
                    alt="..."
                  />
                  <div className="section-chat-div align-self-center">
                    <div className="d-flex d-row">
                      <h6 className="my-0 name-chat">{item.username}</h6>
                      <span className="dot bg-success" />
                    </div>
                    <p className="preview-chat">{item.about}</p>
                  </div>
                  <p className="ml-auto d-flex align-items-center time-text">
                    12.50
                  </p>
                </div>
              </div>
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

      <div className="col-md-8 px-0">
        <div className="bg-main support-scrollable-div">
          <div className="bg-light d-flex py-2">
            <img
              src={homePicture}
              alt="..."
              className="rounded-circle img-chat ml-3"
            />
            <h5 className="align-self-center font-weight-bold pl-2 my-0">
              Frederick88
            </h5>
          </div>

          <div className="container pt-3 scrollable-div">
            <h6 className="font-weight-bold text-center pb-1">
              Thursday,14/05/20
            </h6>
            <div className="row justify-content-start pt-2">
              <div className="col-md-6">
                <div className="bg-light p-3">
                  <div className="d-flex">
                    <h6 className="font-weight-bold">Frederick88</h6>
                    <p className="my-0 ml-auto time-text">12:50</p>
                  </div>
                  <h6 className="my-0">
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit,
                    sed do eiusmod t empor incididunt ut labore et dolore magna
                    aliqua.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-end pt-2">
              <div className="col-md-6">
                <div className="bg-mainchat p-3">
                  <div className="d-flex">
                    <h6 className="font-weight-bold">Me</h6>
                    <p className="my-0 ml-auto time-text">12:51</p>
                  </div>
                  <h6 className="my-0">
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit,
                    sed do eiusmod t empor incididunt ut labore et dolore magna
                    aliqua.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pt-2 px-2 bg-white">
            <textarea
              rows="2"
              type="text"
              placeholder="Input your message here..."
              className="input-chat"
            />
            <i className="far fa-grin-alt h3 px-3 align-self-center" />
            <i className="fas fa-paperclip h3 align-self-center" />
            <i className="fas fa-arrow-circle-right h3 px-3 align-self-center" />
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
