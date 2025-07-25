import React, { useRef, useState } from "react";
import Skillbar from "../components/Skillbar";
import TextareaAutosize from "react-textarea-autosize";
import Socials from "../components/ui/Socials.jsx";
import Header from "../components/Title.jsx";

const Contact = () => {
  return (
    <div className="main dark:bg-pri transition-all duration-500 py-24">
      <Header>Contact Me</Header>
      <div className="mx-auto w-fit mt-8">
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
