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
    <div className="container bg-light" style={{ height: "100vh" }}>
      <div className="text-center">
        <div
          className="rounded-circle w-75 mb-4 align-self-center"
          style={picture(imageMobile)}
        ></div>
      </div>
      <h5 className="text-center text-justify align-self-center">
        Hello! You can check "circlemessenger.com" via website! Sorry for this
        inconvenience, we will comeback soon in the Phone!
      </h5>
    </div>
  );
}
