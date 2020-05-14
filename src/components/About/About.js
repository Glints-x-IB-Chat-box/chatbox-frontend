import React from "react";
// import { Link } from "react-router-dom";
import teamPicture from "../../assets/Fred.png";
import logoPicture from "../../assets/about.webp";
import "../style.css";

export default function About() {
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100">
        <div className="text-center">
          <img
            src={logoPicture}
            alt="..."
            className="rounded-circle w-75 pt-4"
          />
          <h3 className="text-white font-weight-bold pt-4 pb-2">
            About ChatBoxo
          </h3>
          <h5 className="text-white">
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod t empor incididunt ut labore et dolore magna aliqua. Pretium
            vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
            Est velit egestas dui id. Suspendisse in est ante in nibh mauris
            cursus. Sit amet luctus venenatis lectus magna fringilla urna. Id
            neque aliquam vestibulum morbi blandit cursus.
          </h5>
          <p className="mt-auto text-white">© ChatBoxo. All Rights Reserved</p>
        </div>
      </div>

      <div className="col-md-8 bg-light">
        {/* <div className="text-center">
          <img src={aboutPicture} alt="..." className="w-100" />
          <h1>Chatboxo,</h1>
          <h3>“Executive Chatbox, for Professionals.”</h3>
        </div> */}

        <div className="container">
          <div className="scrollable-div">
            <h1 className="font-weight-bold text-dark text-center pt-3 pb-2">
              OUR TEAM
            </h1>
            <div className="row mx-0 d-flex justify-content-center">
              <div className="col-6 col-md-6">
                <div className="card about-card">
                  <img
                    src={teamPicture}
                    className="card-img-top w-75 mx-auto d-block pt-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Frederick</h5>
                    <p className="card-text">
                      Hello! I'm Frederick, creating solutions for problems in
                      this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 ">
                <div className="card about-card">
                  <img
                    src={teamPicture}
                    className="card-img-top w-75 mx-auto d-block pt-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Ahmad Fakhrozy
                    </h5>
                    <p className="card-text">
                      Hello! I'm Frederick, creating solutions for problems in
                      this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 pt-4">
                <div className="card about-card">
                  <img
                    src={teamPicture}
                    className="card-img-top w-75 mx-auto d-block pt-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">River Huang</h5>
                    <p className="card-text">
                      Hello! I'm Frederick, creating solutions for problems in
                      this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-6 pt-4">
                <div className="card about-card">
                  <img
                    src={teamPicture}
                    className="card-img-top w-75 mx-auto d-block pt-4"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Intan Adela</h5>
                    <p className="card-text">
                      Hello! I'm Frederick, creating solutions for problems in
                      this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
