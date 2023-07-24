import React, { useState } from "react";
import Skillbar from "../reuseables/Skillbar";

const Contact = () => {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
      <div className="main">
        <div className="contact-form">

        </div>
      </div>);
};

export default Contact;
