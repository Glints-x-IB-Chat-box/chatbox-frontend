import React, { useEffect, useState } from "react";
import homePicture from "../../assets/text2.png";
import { Link } from "react-router-dom";
import moment from "moment";
import "../style.css";
import Chatcomponent from "./ChatComponent";
// import io from "socket.io-client";

import {
  showDetailRecentChat,
  addMessage,
  getDataMessage,
} from "../../actionCreators/ChatAction";
import { connect } from "react-redux";

const Home = (props) => {
  // const socket = io(`${process.env.REACT_APP_API_URL}`);
  const [firstShow, setFirstShow] = useState(true);
  const [targetUserId, setTargetUserId] = useState();
  const [messagesApi, setMessagesApi] = useState([]);
  // setMessagesApi(props.dataMessage);

  const [dataMessage, setDataMessage] = useState({
    message: "",
  });
  console.log(dataMessage);

  const changeFirstShow = (data) => {
    setTargetUserId(data._id);
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

  const sendMessage = (dataTargetUserId) => {
    props.addMessage(dataTargetUserId, dataMessage);
  };

  useEffect(() => {
    props.getDataMessage(targetUserId);
  }, [sendMessage, firstShow, targetUserId]);

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
              {props.dataMessage.map((item, index) => {
                const time = moment(`${item.createdAt}`);
                // const time2 = moment(`${item.createdAt}`).subtract(1, "days");

                const fixDate = time.format("dddd,D MMMM YYYY");
                // const fixDate2 = time2.format("dddd,D MMMM YYYY");
                return (
                  <div>
                    <h6 className="font-weight-bold text-center pb-1">DATE</h6>

                    <Chatcomponent
                      dataItem={item}
                      // dataMessageApi={messagesApi}
                      DetailChatRecentContact={props.DetailChatRecentContact}
                      key={index}
                    />
                  </div>
                );
              })}
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
                required
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
    dataMessage: state.chatReducer.dataMessage,
  };
};

const mapDispatchToProps = {
  showDetailRecentChat,
  addMessage,
  getDataMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
