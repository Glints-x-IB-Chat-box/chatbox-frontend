import React from "react";
import imageMobile from "../../assets/onlymobile.png";

export default function onlyMobile() {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "15rem",
    };
  };
  return (
    <div
      className="container bg-light align-self-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="rounded-circle w-75 mb-4"
          style={picture(imageMobile)}
        ></div>
      </div>
      <h5 className="text-center text-justify">
        Hello! You can check "circlemessenger.com" via website! Sorry for this
        inconvenience, we will comeback soon in the Phone!
      </h5>
    </div>
  );
}
