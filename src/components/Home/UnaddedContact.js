import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactEmoji from "react-emoji";

const UnaddedContact = (props) => {
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
    <div>
      <Link to={`/app/chat/${props.item.targetUserId._id}`}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => props.changeFirstShow(props.item.targetUserId)}
          className="list-group-item list-group-item-action active section-chat py-3"
        >
          <div className="d-flex d-row">
            <div
              style={contactPic(props.item.targetUserId.image)}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">
                  {props.item.targetUserId.username}
                </h6>
                {/* <span className="dot bg-success" /> */}
              </div>
              {props.detailRecentMessages.map((detail, index) => {
                // console.log(props.item._id);
                // console.log(detail);
                const found = detail.usersId.find((userId) => {
                  return userId === props.item.targetUserId._id;
                });

                if (found) {
                  return (
                    <p className="preview-chat my-0" key={index}>
                      {ReactEmoji.emojify(detail.lastMessage.message)}
                    </p>
                  );
                } else {
                  return;
                }
              })}
            </div>
            {props.detailRecentMessages.map((detail, index) => {
              const found = detail.usersId.find((userId) => {
                return userId === props.item.targetUserId._id;
              });

              if (found) {
                const time = moment(`${detail.lastMessage.createdAt}`);
                const fixTime = time.format("HH:mm");
                return (
                  <p
                    className="ml-auto align-items-center time-text my-0"
                    key={index}
                  >
                    {fixTime}
                  </p>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default UnaddedContact;
