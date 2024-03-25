import React from "react";
import user from "../assets/CeejayImage.jpg";

const MyImage = () => {
  return (
    <div className="my-img-container">
      <img src={user} alt="user" className="my-img" />
    </div>
  );
};

export default MyImage;
