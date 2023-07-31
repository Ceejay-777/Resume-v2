import React, { useState } from "react";
import Skillbar from "../reuseables/Skillbar";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    return "Okay";
  };
  return (
    <div className="main">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
            placeholder="NAME"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="EMAIL"
          />
          <textarea
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Please add a comment"
            style={{zIndex:"-1"}}
          ></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
