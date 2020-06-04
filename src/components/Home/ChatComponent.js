import React from "react";
import moment from "moment";
import jwt from "jwt-decode";
import logopdf from "../../assets/pdflogo.png";
import logopdf2 from "../../assets/pdflogo2.png";
import ReactEmoji from "react-emoji";

const Chatcomponent = (props) => {
  // console.log(props.item);

  const decodedToken = jwt(localStorage.getItem("token"));
  const time = moment(`${props.item.createdAt}`);
  const fixTime = time.format("HH:mm");
  // console.log(props.item.images);

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
                              className="my-0"
                              onClick={() => {
                                fetch(
                                  `https://api.ahmadfakhrozy.com/public/uploads/${image}`
                                )
                                  .then((resp) => resp.blob())
                                  .then((blob) => {
                                    const url = window.URL.createObjectURL(
                                      blob
                                    );
                                    const a = document.createElement("a");
                                    a.style.display = "none";
                                    a.href = url;
                                    // the filename you want
                                    a.download = "file.jpg";
                                    document.body.appendChild(a);
                                    a.click();
                                    window.URL.revokeObjectURL(url);
                                    alert("your file has downloaded!"); // or you know, something with better UX...
                                  })
                                  .catch((error) =>
                                    alert(
                                      "a problem occurred, try again later."
                                    )
                                  );
                              }}
                              className="btn-link my-0 text-light"
                              style={{ cursor: "pointer" }}
                            >
                              Download
                            </p>
                            <a
                              href={`https://api.ahmadfakhrozy.com/public/uploads/${image}`}
                              target="blank"
                              className="pl-2 btn-link my-0 text-light"
                              style={{ cursor: "pointer" }}
                            >
                              Preview
                            </a>
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
                          src={logopdf2}
                          alt={document}
                          style={{ width: "100px" }}
                        />
                        <div className="pl-2">
                          <h6 className="my-0">{document}</h6>
                          <a
                            href={`${process.env.REACT_APP_API_URL}/public/uploads/${document}`}
                            target="blank"
                            style={{ cursor: "pointer" }}
                            className="text-light my-0"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
              <h6 className="my-0">{ReactEmoji.emojify(props.item.message)}</h6>
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
                            <a
                              href={`https://api.ahmadfakhrozy.com/public/uploads/${image}`}
                              className="btn-link my-0"
                              style={{ cursor: "pointer" }}
                              download
                            >
                              Download
                            </a>
                            <a
                              href={`https://api.ahmadfakhrozy.com/public/uploads/${image}`}
                              target="blank"
                              className="pl-2 btn-link my-0"
                              style={{ cursor: "pointer" }}
                            >
                              Preview
                            </a>
                            <script>
                              {" "}
                              document.location.href ={" "}
                              {`${process.env.REACT_APP_API_URL}/public/uploads/${document}`}
                              ;{" "}
                            </script>
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
                            href={`${document}`}
                            target="blank  "
                            download
                            className="my-0"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
              <h6 className="my-0">{ReactEmoji.emojify(props.item.message)}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chatcomponent;
