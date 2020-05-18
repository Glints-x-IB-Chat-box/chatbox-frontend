import React, { useEffect } from "react";
import homePicture from "../../assets/text2.png";
import profilePicture from "../../assets/default.jpg";
import user1 from "../../assets/ozy.png";
import user2 from "../../assets/Fred.png";
import user3 from "../../assets/Intan.png";
import "../style.css";

import { connect } from "react-redux";
import { getDataContact } from "../../actionCreators/MainAction";

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
          <div className="list-group-item list-group-item-action py-0">
            <div className="text-center mt-2">
              <h4 className="text-white py-2">CIRCLE MESSENGER</h4>
            </div>
            <div className="form-group h-100  mb-4">
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

        {/* <div>
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
                    <p className="preview-chat my-0 text-secondary">
                      Hi! I'm new to Circle Messenger
                    </p>
                  </div>
                  <p className="ml-auto d-flex align-items-center time-text">
                    12.50
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="list-group-item list-group-item-action active section-chat py-3">
          <div className="d-flex d-row">
            <img
              src={user1}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">Frederick88</h6>
                <span className="dot bg-success" />
              </div>
              {/* <p className="preview-chat">{item.about}</p> */}
              <p className="preview-chat my-0">
                Wait yaa, let me send you my E-invitation.
              </p>
            </div>
            <p className="ml-auto d-flex align-items-center time-text">12.55</p>
          </div>
        </div>

        <div className="list-group-item list-group-item-action active section-chat py-3">
          <div className="d-flex d-row">
            <img
              src={user3}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">Carol Hughes</h6>
                <span className="dot bg-success" />
              </div>
              {/* <p className="preview-chat">{item.about}</p> */}
              <p className="preview-chat my-0">
                Okay honey, let's go dinner tonight.
              </p>
            </div>
            <p className="ml-auto d-flex align-items-center time-text">10.08</p>
          </div>
        </div>

        <div className="list-group-item list-group-item-action active section-chat py-3">
          <div className="d-flex d-row">
            <img
              src={user2}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">Michael Tamsil</h6>
                <span className="dot bg-success" />
              </div>
              {/* <p className="preview-chat">{item.about}</p> */}
              <p className="preview-chat my-0">
                Yep, give your best and get better!
              </p>
            </div>
            <p className="ml-auto d-flex align-items-center time-text">08.12</p>
          </div>
        </div>

        <div className="list-group-item list-group-item-action active section-chat py-3">
          <div className="d-flex d-row">
            <img
              src={profilePicture}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">Clarissa Gomez</h6>
                <span className="dot bg-success" />
              </div>
              {/* <p className="preview-chat">{item.about}</p> */}
              <p className="preview-chat my-0">See you tomorrow!</p>
            </div>
            <p className="ml-auto d-flex align-items-center time-text">
              Yesterday
            </p>
          </div>
        </div>

        <div className="list-group-item list-group-item-action active section-chat py-3">
          <div className="d-flex d-row">
            <img
              src={profilePicture}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">billdelvin</h6>
                <span className="dot bg-success" />
              </div>
              {/* <p className="preview-chat">{item.about}</p> */}
              <p className="preview-chat my-0">DO BIG GO BIG.</p>
            </div>
            <p className="ml-auto d-flex align-items-center time-text">
              Yesterday
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-8 bg-light vh-100">
        <div className="text-center center-div">
          <img src={homePicture} alt="..." className="w-50" />
          <h1>Welcome to Circle Messenger!</h1>
          <h3>“Executive Chatbox, for Professionals.”</h3>
        </div>
      </div>

      {/* <div className="col-md-8 px-0">
        <div className="bg-main support-scrollable-div">
          <div className="bg-light d-flex py-2">
            <img
              src={user1}
              alt="..."
              className="rounded-circle img-chat ml-3"
            />
            <h5 className="align-self-center font-weight-bold pl-2 my-0">
              Frederick88
            </h5>
          </div>

          <div className="container pt-3 scrollable-div">
            <h6 className="font-weight-bold text-center pb-1">
              Friday,15/05/20
            </h6>
            <div className="row justify-content-start pt-2">
              <div className="col-md-6">
                <div className="bg-light p-3">
                  <div className="d-flex">
                    <h6 className="font-weight-bold">Frederick88</h6>
                    <p className="my-0 ml-auto time-text">12:50</p>
                  </div>
                  <h6 className="my-0">
                    Hey Mate! Long time no see broo how are you going? I bet
                    you're doing great in your career yeahh.
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-start pt-2">
              <div className="col-md-6">
                <div className="bg-light p-3">
                  <div className="d-flex">
                    <h6 className="font-weight-bold">Frederick88</h6>
                    <p className="my-0 ml-auto time-text">12:50</p>
                  </div>
                  <h6 className="my-0">
                    I want to invite you to my Wedding Party, come and lets
                    celebrate my big day with me brother.
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
                    Hey Fred! I'm doing great here, just promoted to a higher
                    division hehhe... Sure thanks for invited me broo, when it
                    will be held?
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-start pt-2">
              <div className="col-md-6">
                <div className="bg-light p-3">
                  <div className="d-flex">
                    <h6 className="font-weight-bold">Frederick88</h6>
                    <p className="my-0 ml-auto time-text">12:55</p>
                  </div>
                  <h6 className="my-0">
                    Wait yaa, let me send you my E-invitation.
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

            <p className="align-self-center my-0">
              <i className="far fa-grin-alt h3 px-3 " />
            </p>
            <p className="align-self-center my-0">
              <i className="fas fa-paperclip h3 " />
            </p>
            <p className="align-self-center my-0">
              <i className="fas fa-arrow-circle-right h3 px-3 " />
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    dataContact: state.mainReducer.dataContact,
  };
};

const mapDispatchToProps = {
  getDataContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
