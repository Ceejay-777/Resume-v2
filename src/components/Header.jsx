import React from "react";
import Underline from "./Underline";

const Header = ({children}) => {
  return (
    <div>
      <h1 className="text-center dark:text-white font-semibold text-lg">{children}</h1>
      <Underline />
    </div>
  );
};

export default Header;
