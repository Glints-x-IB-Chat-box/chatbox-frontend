import React, { useEffect, useState } from "react";
import homePicture from "../../assets/text2.png";
import { useParams } from "react-router-dom";
import moment from "moment";
import jwt from "jwt-decode";
import "../style.css";
import Chatcomponent from "./ChatComponent";
import RecentContact from "./RecentContact";
import RecentContact2 from "./RecentContact2";
import UnaddedRecentChat from "./UnaddedContact";
import axios from "axios";

import io from "socket.io-client";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import {
  showDetailRecentChat,
  getDataMessage,
  fetchHistoryChat,
  fetchRecentChat,
} from "../../actionCreators/ChatAction";
import { getDataContact } from "../../actionCreators/MainAction";
import { connect } from "react-redux";

const Home = (props) => {
  const socket = io("ws://34.87.159.36:8000/", {
    transports: ["websocket"],
  });

  // Set the welcome page turn into chat page.
  const [firstShow, setFirstShow] = useState(true);

  // After fetch DataMessage from Message Database, it will be pass to here.
  const [dataMessage, setDataMessage] = useState([]);

  // Use params is used to get id from the URL.
  let { id } = useParams();
  const sender = jwt(localStorage.getItem("token"));
  const senderId = sender.id;

  // Set the message that user input in Textarea Box
  const [message, setMessage] = useState("");

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  // console.log(id);
  const selectFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const selectDocuments = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const sendDocument = (e) => {
    e.preventDefault();
    setFile(null);
    setFileName("");
    const fd = new FormData();
    fd.append("documents", file);
    fd.append("senderUserId", sender.id);
    fd.append("targetUserId", id);
    axios
      .post("https://api.ahmadfakhrozy.com/chat/postchat", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
        onUploadProgress: (progressEvent) => {
          console.log(
            `Upload Progress: ${
              (progressEvent.loaded, progressEvent.total)
            } ${Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )} %`
          );
        },
      })
      .then((res) => {
        console.log(res);
        setFile("");
        setFileName("");
      })
      .catch((err) => console.log(err));
  };
  const sendImage = (e) => {
    e.preventDefault();
    setFile(null);
    setFileName("");
    const fd = new FormData();
    fd.append("images", file);
    fd.append("senderUserId", sender.id);
    fd.append("targetUserId", id);
    axios
      .post("https://api.ahmadfakhrozy.com/chat/postchat", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
        onUploadProgress: (progressEvent) => {
          console.log(
            `Upload Progress: ${
              (progressEvent.loaded, progressEvent.total)
            } ${Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )} %`
          );
        },
      })
      .then((res) => {
        console.log(res);
        setFile("");
        setFileName("");
      })
      .catch((err) => console.log(err));
  };

  // Set the welcome page turn into chat page, and get the data of the recent chat that is clicked.
  const changeFirstShow = (data) => {
    console.log(data);
    props.showDetailRecentChat(data);
    props.getDataMessage(data._id);
    setFirstShow(false);
  };

  const handleChangeMessage = (event) => {
    let { value } = event.currentTarget;
    setMessage(value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://api.ahmadfakhrozy.com/chat/postchat`,
        { senderUserId: senderId, targetUserId: id, message: message },
        { headers: { "x-access-token": localStorage.getItem("token") } }
      )
      .then((value) => {
        console.log(value.data.messages);
        setMessage("");
        socket.emit("sendMessage", message, () => setMessage(""));
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   // console.log(targetUserId);
  //   // setMessagesApi(props.dataMessage);
  //   props.getDataMessage(targetUserId);
  //   // socket.on("sendMessage", (Message) => {
  //   //   setMessagesApi(props.dataMessage, Message);
  //   // });
  // }, [sendMessage, changeFirstShow]);
  // useEffect(() => {
  // }, []);

  const SearchContact = (event) => {
    let { value } = event.currentTarget;
    props.fetchHistoryChat(value);
  };

  // In the beginning user open, there will be RecentChats and The Data Contact.
  useEffect(() => {
    // props.getDataMessage(id);
    props.getDataContact();
    props.fetchHistoryChat("");
    props.fetchRecentChat();
  }, []);

  // When User send Message there will be update/changes.
  useEffect(() => {
    props.fetchRecentChat();
    axios
      .get(`https://api.ahmadfakhrozy.com/chat/gettarget/${id}`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        // props.getDataMessage(response.data);
        setDataMessage(response.data);

        socket.on("sendMessage", (message) => {
          props.getDataMessage(response.data);
          setDataMessage(response.data);
        });
      });
  }, [props.dataMessage, file]);

  let chatDate = undefined;

  const contactPic = (picture) => {
    const url = process.env.REACT_APP_API_URL;
    const image = `${url}/${picture}`;
    const imageNotFound = `${url}/public/usersImage/default-user-icon.jpg`;
    return {
      backgroundImage: `url(${image}), url(${imageNotFound})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };

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
                placeholder="Search Chat..."
                onChange={SearchContact}
              />
            </div>
          </div>
        </div>

        <div>
          {props.RecentChatContacts2.map((item, index) => {
            // console.log(item);
            // console.log(props.dataContact);

            return (
              <RecentContact2
                item={item}
                key={index}
                changeFirstShow={changeFirstShow}
              />
            );
          })}
        </div>

        <div>
          {props.RecentChatContacts.map((item, index) => {
            // console.log(item);
            // console.log(props.RecentChatContacts);

            return (
              <RecentContact
                item={item}
                key={index}
                changeFirstShow={changeFirstShow}
                detailRecentMessages={props.detailRecentMessages}
              />
            );
          })}
        </div>

        <div className="pb-4">
          <h5 className="pt-3 text-center">Unadded Contacts</h5>
          <hr className="bg-light mt-0 w-50" />
          {props.UnaddedRecentChat.map((item, index) => {
            // console.log(item);
            // console.log(props.RecentChatContacts);

            return (
              <UnaddedRecentChat
                item={item}
                key={index}
                changeFirstShow={changeFirstShow}
                detailRecentMessages={props.detailRecentMessages}
              />
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
              <div
                style={contactPic(props.DetailChatRecentContact.image)}
                alt="..."
                className="rounded-circle img-chat ml-3"
              />
              <h5 className="align-self-center font-weight-bold pl-2 my-0">
                {props.DetailChatRecentContact.username}
              </h5>
            </div>

            <div className="container pt-3 scrollable-div">
              {dataMessage.map((item) => {
                let newChatComponent = <></>;
                // IF item.id == id - mengcover agar saat pindah ke user lain data messagenya adalah milik user itu
                // item && item.usersId - mengcover error pada item._id, dmana error bisa terjadi saat si "item"._id ini ngga ada.
                if (item && item.usersId.find((item) => item._id === id)) {
                  newChatComponent = item.messages.map((itemMessage, index) => {
                    // console.log(itemMessage);

                    const time = moment(`${itemMessage.createdAt}`);

                    const fixDate = time.format("dddd,D MMMM YYYY");

                    // PERBANDINGAN STRING DI TIME
                    let showTanggal = <></>;
                    if (chatDate !== fixDate) {
                      showTanggal = (
                        <h6 className="font-weight-bold text-center pb-1">
                          {fixDate}
                        </h6>
                      );
                      chatDate = fixDate;
                    }

                    return (
                      <div key={index}>
                        {showTanggal}

                        <Chatcomponent
                          item={itemMessage}
                          DetailChatRecentContact={
                            props.DetailChatRecentContact
                          }
                        />
                      </div>
                    );
                  });
                  return newChatComponent;
                }
                return <></>;
              })}
            </div>
            <div className="d-flex pt-2 px-2 bg-white justify-content-center">
              <textarea
                id="inputform"
                name="message"
                rows="2"
                type="text"
                placeholder="Input your message here..."
                className="input-chat mr-3"
                value={message}
                onChange={handleChangeMessage}
                required
              />
              {/* <p className="align-self-center my-0 ">
                <i className="far fa-grin-alt h3 px-3 chat-btn" />
              </p> */}

              <div className="align-self-center mb-2">
                {["up"].map((direction) => (
                  <>
                    <DropdownButton
                      as={ButtonGroup}
                      className="send-btn"
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      size="sm"
                      drop={direction}
                      title={<i className="fas fa-paperclip h4 px-2 my-0" />}
                    >
                      <h6 className="my-0 font-weight-bold">Document</h6>
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={selectDocuments}
                      />
                      <button
                        className="text-white btn-block mt-2 send-btn"
                        onClick={sendDocument}
                      >
                        Send Document
                      </button>

                      <Dropdown.Divider />
                      <h6 className="my-0 font-weight-bold">Image</h6>
                      <input
                        type="file"
                        // ref={inputRef}
                        className="form-control-file"
                        onChange={selectFile}
                      />
                      <button
                        className="text-white btn-block mt-2 send-btn"
                        onClick={sendImage}
                      >
                        Send Image
                      </button>
                    </DropdownButton>{" "}
                  </>
                ))}
              </div>

              {/* <input type="file"  ref={inputRef} className="form-control-file" onChange={selectFile}/>   */}

              <p
                style={{ cursor: "pointer" }}
                onClick={(event) => sendMessage(event)}
                className="align-self-center my-0"
              >
                <i className="fas fa-arrow-circle-right h3 px-3 chat-btn" />
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
    RecentChatContacts2: state.chatReducer.RecentChatContacts2,
    UnaddedRecentChat: state.chatReducer.UnaddedRecentChat,
    DetailChatRecentContact: state.chatReducer.DetailChatRecentContact,
    dataMessage: state.chatReducer.dataMessage,
    detailRecentMessages: state.chatReducer.detailRecentMessages,
  };
};

const mapDispatchToProps = {
  showDetailRecentChat,
  getDataMessage,
  fetchHistoryChat,
  fetchRecentChat,
  getDataContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
