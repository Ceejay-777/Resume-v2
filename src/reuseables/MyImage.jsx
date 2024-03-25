import React from "react";
import user from "../assets/CeejayImage.jpg";

const MyImage = () => {
  return (
    <div className="w-4/5 aspect-[3/4] max-w-[350px] my-5 mx-auto rounded-[40px] bg-[url('../assets/CeejayImage.jpg')] bg-cover">
      <img src={user} alt="user" className="my-img" />
    </div>
  );
};

export default MyImage;
