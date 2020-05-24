import React from "react";
import moment from "moment";
import jwt from "jwt-decode";
import logopdf from "../../assets/pdflogo.png";

const Chatcomponent = (props) => {
  console.log(props.item);

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

              {props.item.images.length >= 1
                ? props.item.images.map((image) => {
                    return (
                      <div className="d-flex flex-row flex-wrap">
                        <img
                          style={{ width: "100px" }}
                          src={`https://api.ahmadfakhrozy.com/public/uploads/${image}`}
                          alt={image}
                        />
                        <div className="pl-2">
                          <h6 className="my-0">{image}</h6>
                          <div className="d-flex d-row">
                            <p
                              className="btn-link my-0 text-light"
                              style={{ cursor: "pointer" }}
                            >
                              Download
                            </p>
                            <p
                              className="pl-2 btn-link my-0 text-light"
                              style={{ cursor: "pointer" }}
                            >
                              Preview
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              {props.item.documents.length >= 1
                ? props.item.documents.map((document) => {
                    return (
                      <div className="d-flex flex-row">
                        <img
                          src={logopdf}
                          alt={document}
                          style={{ width: "100px" }}
                        />
                        <div className="pl-2">
                          <h6 className="my-0">{document}</h6>
                          <a
                            href={`https://api.ahmadfakhrozy.com/public/uploads/${document}`}
                            target="blank"
                            className="text-light my-0"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
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
              {props.item.images.length >= 1
                ? props.item.images.map((image) => {
                    return (
                      <div className="d-flex flex-row flex-wrap">
                        <img
                          style={{ width: "100px" }}
                          src={`https://api.ahmadfakhrozy.com/public/uploads/${image}`}
                          alt={image}
                        />
                        <div className="pl-2">
                          <h6 className="my-0">{image}</h6>
                          <div className="d-flex d-row">
                            <p
                              className="btn-link my-0"
                              style={{ cursor: "pointer" }}
                            >
                              Download
                            </p>
                            <p
                              className="pl-2 btn-link my-0"
                              style={{ cursor: "pointer" }}
                            >
                              Preview
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}

              {props.item.documents.length >= 1
                ? props.item.documents.map((document) => {
                    return (
                      <div className="d-flex flex-row">
                        <img
                          src={logopdf}
                          alt={document}
                          style={{ width: "100px" }}
                        />
                        <div className="pl-2">
                          <h6 className="my-0">{document}</h6>
                          <a
                            href={`https://api.ahmadfakhrozy.com/public/uploads/${document}`}
                            target="blank"
                            className="my-0"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
              <h6 className="my-0">{props.item.message}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chatcomponent;
