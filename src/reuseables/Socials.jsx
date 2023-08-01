import React from "react";
import { socialLinks } from "../data";
import { Link } from "react-router-dom";


const Socials = () => {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink, index) => {
        return (
          <div
            className="social-link"
            key={index}
            style={{ animationDelay: `${0.5 * index}s` }}
          >
            <Link>
              <img
                src={socialLink.icon}
                alt={`${socialLink.account} icon`}
                className="social-link-icon"
              />
              <p className="social-link-name">{socialLink.account}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
