import React from "react";
import Underline from "./ui/Underline";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-center dark:text-white font-semibold text-lg">
        {children}
      </h1>
      <Underline />
    </div>
  );
};

export default Title;
