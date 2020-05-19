import React, { useState } from "react";
import homePicture from "../../assets/text2.png";
import { Link } from "react-router-dom";
import "../style.css";

import {
  showDetailRecentChat,
  addMessage,
} from "../../actionCreators/ChatAction";
import { connect } from "react-redux";

const Home = (props) => {
  const [firstShow, setFirstShow] = useState(true);
  const [dataMessage, setDataMessage] = useState({
    message: "",
  });
  console.log(dataMessage);

  const changeFirstShow = (data) => {
    props.showDetailRecentChat(data);
    setFirstShow(false);
  };

  const handleChangeMessage = (event) => {
    let { name, value } = event.currentTarget;
    setDataMessage({
      ...dataMessage,
      [name]: value,
    });
  };

  const sendMessage = (data, dataMessage) => {
    props.addMessage(data, dataMessage);
  };

  // useEffect(() => {
  //   props.RecentChatContacts();
  // }, []);

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

        <div>
          {props.RecentChatContacts.map((item, index) => {
            return (
              <Link to={`/app/chat/${item._id}`} key={index}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => changeFirstShow(item)}
                  className="list-group-item list-group-item-action active section-chat py-3"
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
                      <p className="preview-chat my-0">(Recent Chat)</p>
                    </div>
                    <p className="ml-auto d-flex align-items-center time-text">
                      12.50
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {firstShow ? (
        <div className="col-md-8 bg-light vh-100">
          <div className="text-center center-div">
            <img src={homePicture} alt="..." className="w-50" />
            <h2>Welcome to Circle Messenger!</h2>
            <h4>“Executive Chatbox, for Professionals.”</h4>
          </div>
        </div>
      ) : (
        <div className="col-md-8 px-0">
          <div className="bg-main support-scrollable-div">
            <div className="bg-light d-flex py-2">
              <img
                src={props.DetailChatRecentContact.image}
                alt="..."
                className="rounded-circle img-chat ml-3"
              />
              <h5 className="align-self-center font-weight-bold pl-2 my-0">
                {props.DetailChatRecentContact.username}
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
                      <h6 className="font-weight-bold">
                        {props.DetailChatRecentContact.username}
                      </h6>
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
            </div>
            <div className="d-flex pt-2 px-2 bg-white ">
              <textarea
                name="message"
                rows="2"
                type="text"
                placeholder="Input your message here..."
                className="input-chat"
                value={dataMessage.message}
                onChange={handleChangeMessage}
              />
              <p className="align-self-center my-0">
                <i className="far fa-grin-alt h3 px-3 " />
              </p>
              <p className="align-self-center my-0">
                <i className="fas fa-paperclip h3 " />
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => sendMessage(props.DetailChatRecentContact._id)}
                className="align-self-center my-0"
              >
                <i className="fas fa-arrow-circle-right h3 px-3 " />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    RecentChatContacts: state.chatReducer.RecentChatContacts,
    DetailChatRecentContact: state.chatReducer.DetailChatRecentContact,
  };
};

const mapDispatchToProps = {
  showDetailRecentChat,
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
