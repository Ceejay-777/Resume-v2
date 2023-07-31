import React, { useState } from "react";
import Skillbar from "../reuseables/Skillbar";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(fname, email, message)
  };
  return (
    <div className="main">
    <h1 className="sectionTitle">Contact Me</h1>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-container">
            <label htmlFor="name">Your name please</label>
            <input
              type="text"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              name="name"
              placeholder="NAME"
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              placeholder="EMAIL"
            />
          </div>

          <div className="input-container">
            <label htmlFor="message">Tell me something</label>
            <textarea
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              name="message"
              placeholder="Comment goes here"
              // style={{zIndex:"1", backgroundColor:"white"}}
            ></textarea>
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
