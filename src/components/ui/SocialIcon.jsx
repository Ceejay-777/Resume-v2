import React from "react";

const SocialIcon = ({ ref, icon, account }) => {
  return (
    <div className="p-2 md:p-4 bg-secondary dark:bg-dark-secondary rounded-full hover:scale-110 transition duration-200 w-fit">
      <a href={ref} target="_blank">
        <img src={icon} alt={`${account} icon`} className="w-6 md:w-8" />
      </a>
    </div>
  );
};

export default SocialIcon;
