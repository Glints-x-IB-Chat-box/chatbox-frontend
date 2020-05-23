import React from "react";
import moment from "moment";
import jwt from "jwt-decode";

const Chatcomponent = (props) => {
  // console.log(props.item);

  const decodedToken = jwt(localStorage.getItem("token"));
  const time = moment(`${props.item.createdAt}`);
  const fixTime = time.format("HH:mm");
  return (
    <div>
      {decodedToken.id === props.item.senderUserId ? (
        <div className="row justify-content-end pb-2">
          <div className="col-md-6">
            <div className="bg-mainchat p-3">
              <div className="d-flex">
                <h6 className="font-weight-bold">Me</h6>
                <p className="my-0 ml-auto time-text">{fixTime}</p>
              </div>
              <h6 className="my-0">{props.item.message}</h6>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-start pb-2">
          <div className="col-md-6">
            <div className="bg-light p-3">
              <div className="d-flex">
                <h6 className="font-weight-bold">
                  {props.DetailChatRecentContact.username}
                </h6>
                <p className="my-0 ml-auto time-text">{fixTime}</p>
              </div>
              <h6 className="my-0">{props.item.message}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chatcomponent;
