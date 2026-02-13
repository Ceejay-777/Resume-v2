import { socialLinks } from "../../data";
import SocialIcon from "./SocialIcon";

const Socials = () => {
  return (
    <div className="mt-10 flex flex-col gap-8 z-30">
      {socialLinks.map((linkTypes, index) => {
        const { fullLinks, iconLinks } = linkTypes;

        return (
          <div key={index} className="flex flex-col gap-6">
            {/* Full Links: Email & Phone */}
            <div className="flex flex-col gap-4">
              {fullLinks.map((socialLink, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <SocialIcon
                    icon={socialLink.icon}
                    href={socialLink.ref}
                    account={socialLink.account}
                  />
                  <a
                    href={socialLink.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium opacity-60 group-hover:opacity-100 group-hover:text-sec transition-all"
                  >
                    {socialLink.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Icon-only Links: LinkedIn, GitHub, X */}
            <div className="flex gap-4">
              {iconLinks.map((socialLink, i) => (
                <SocialIcon
                  key={i}
                  icon={socialLink.icon}
                  href={socialLink.ref}
                  account={socialLink.account}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
