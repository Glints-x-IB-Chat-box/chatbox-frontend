import React from "react";
import imageMobile from "../../assets/onlymobile.png";

export default function onlyMobile() {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  return (
    <div className="container bg-light">
      <div
        style="rounded-circle w-100 mt-4 mb-3"
        style={picture(imageMobile)}
      ></div>
      <h5>
        Hello! You can check "circlemessenger.com" via website! Sorry for this
        inconvenience, we will comeback soon in the Phone!
      </h5>
    </div>
  );
}
