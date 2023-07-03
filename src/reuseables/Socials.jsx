import React from "react";
import { socialLinks } from "../data";

const Socials = () => {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink, index) => {
        return (
          <div className="social-link" key={index}>
            <img
              src={socialLink.icon}
              alt={`${socialLink.account} icon`}
              className="social-link-icon"
            />
            <p className="social-link-name">{socialLink.account}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
