import React, { useRef, useState } from "react";
import Skillbar from "../reuseables/Skillbar";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const messageInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(fname, email, message)
  };

  const adjustHeight = (event) => {
    event.target.style.height = 'auto'; 
    event.target.style.height = event.target.scrollHeight + 'px';
    setMessage(event.target.value)
  }
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
            <input
              type="textarea"
              value={message}
              onChange={adjustHeight}
              name="message"
              placeholder="Comment here"
              className="message-input"
              ref={messageInput}
              cols={300}
              rows={10}
            />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
