import React from "react";
import { socialLinks } from "../data";

const Socials = () => {
  return (
    <div className="flex gap-4 mt-8 max-w-[480px] w-fit items-center">
      {socialLinks.map((socialLink, index) => {
        return (
          <div
            key={index}
            className="p-2 dark:bg-white rounded-full hover:scale-110"
          >
            <a href={socialLink.ref} target="_blank">
              <img
                src={socialLink.icon}
                alt={`${socialLink.account} icon`}
                className="w-6 mb:w-8"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
