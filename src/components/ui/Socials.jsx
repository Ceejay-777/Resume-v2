import React from "react";
import { socialLinks } from "../../data";

const Socials = () => {
  return (
    <div className="gap-4 mt-8 max-w-[480px] w-fit items-center">
      {socialLinks.map((linkTypes, index) => {
        const { fullLinks, iconLinks } = linkTypes;

        return (
          <div key={index}>
            <div className="mb-2">
              {fullLinks.map((socialLink, index) => {
                const { icon, ref, account, text } = socialLink;
                return (
                  <div className="flex gap-6 items-center mb-2" key={index}>
                    <div
                      key={index}
                      className="p-2 dark:bg-white bg-gray-200 rounded-full hover:scale-110 w-fit"
                    >
                      <a href={ref} target="_blank">
                        <img
                          src={icon}
                          alt={`${account} icon`}
                          className="w-6 mb:w-8"
                        />
                      </a>
                    </div>
                    <a
                      href={ref}
                      target="_blank"
                      className="text-sec hover:underline text-sm md:text-md"
                    >
                      {text}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-6">
              {iconLinks.map((socialLink, index) => {
                const { icon, ref, account } = socialLink;
                return (
                  <div
                    key={index}
                    className="p-2 dark:bg-white bg-gray-200 rounded-full hover:scale-110 w-fit"
                  >
                    <a href={ref} target="_blank">
                      <img
                        src={icon}
                        alt={`${account} icon`}
                        className="w-6 mb:w-8"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
