import React from "react";
import { Link } from "react-router-dom";

const RecentContact = (props) => {
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
      <Link to={`/app/chat/${props.item._id}`}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => props.changeFirstShow(props.item)}
          className="list-group-item list-group-item-action active section-chat py-3"
        >
          <div className="d-flex d-row">
            <div
              style={contactPic(props.item.image)}
              className="chat-profile-pic rounded-circle"
              alt="..."
            />
            <div className="section-chat-div align-self-center">
              <div className="d-flex d-row">
                <h6 className="my-0 name-chat">{props.item.username}</h6>
                {/* <span className="dot bg-success" /> */}
              </div>
              <p className="preview-chat my-0">{props.item.about}</p>
            </div>
            {/* <p className="ml-auto d-flex align-items-center time-text">12.50</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RecentContact;
