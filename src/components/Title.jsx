import React from "react";
import Underline from "./ui/Underline";

const Title = ({ children }) => {
  return (
    <div className="mb-6">
      <h1 className="text-center text-accent dark:text-dark-accent font-semibold text-xl leading-loose ">
        {children}
      </h1>
      <Underline />
    </div>
  );
};

export default Title;
