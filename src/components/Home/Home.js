import React from "react";
// import { Link } from "react-router-dom";
import homePicture from "../../assets/text.png";
import "../style.css";

import { connect } from "react-redux";
// import { getDataContact } from "../../actionCreators/ChatAction";

const Home = (props) => {
  // const iconSearch = <i className="fas fa-search"></i>;

  // handling preview limit
  // const maxPreview = 30;
  // stackoverflow-Maximum amount of characters in a div/paragraph tag in react

  // useEffect(() => {
  //   props.getDataContact();
  // }, []);

  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100">
        <h2 className="text-center text-white py-2">CHATBOXO</h2>
        <input
          type="text"
          placeholder="Search Contacts..."
          className="w-100 h6 p-2"
        />

        {/* <div className="pt-3">
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
                  <p className="ml-auto d-flex align-items-center time-text">
                    12.50
                  </p>
                </div>
              </button>
            );
          })}
        </div> */}
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
          <div className="bg-light d-flex">
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
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     dataContact: state.reducersChat.dataContact,
//   };
// };

// const mapDispatchToProps = {
//   getDataContact,
// };

export default connect(null, null)(Home);
