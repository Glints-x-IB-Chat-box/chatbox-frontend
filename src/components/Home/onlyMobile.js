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
      <div className="align-self-center">
        <div
          className="rounded-circle w-75 mt-4 mb-3"
          style={picture(imageMobile)}
        ></div>
        <h5 className="text-center text-justify">
          Hello! You can check "circlemessenger.com" via website! Sorry for this
          inconvenience, we will comeback soon in the Phone!
        </h5>
      </div>
    </div>
  );
}
