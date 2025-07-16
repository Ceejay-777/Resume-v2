import React from "react";
import { socialLinks } from "../../data";
import SocialIcon from "./SocialIcon";

const Socials = () => {
  return (
    <div className="mt-8 max-w-[480px] w-fit items-center">
      {socialLinks.map((linkTypes, index) => {
        const { fullLinks, iconLinks } = linkTypes;

        return (
          <div key={index}>
            <div className="mb-2 mlg:mb-4">
              {fullLinks.map((socialLink, index) => {
                const { icon, ref, account, text } = socialLink;
                return (
                  <div className="flex gap-6 items-center mb-2 mlg:mb-4" key={index}>
                    <SocialIcon icon={icon} href={ref} account={account} />
                    <a
                      href={ref}
                      target="_blank"
                      className="hover:underline text-sm mlg:text-lg"
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
                  <SocialIcon icon={icon} href={ref} account={account} key={index}/>
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
