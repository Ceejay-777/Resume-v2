import { useState } from "react";
import Skillbar from "./Skillbar.jsx";

const Project = ({ project }) => {
  const [showAll, setShowAll] = useState(false);
  const { name, image, info, skills, link } = project;
  const show = (
    <span
      className="text-sec hover:cursor-pointer"
      onClick={() => setShowAll(!showAll)}
    >
      {showAll ? "Show less" : " ...show more"}
    </span>
  );

  return (
    <div
      className={`my-10 mx-6 bg-gray-200 dark:bg-pri rounded-xl shadow-md md:flex items-center`}
    >
      <div className="p-4 md:w-1/2">
        <a href={link} target="_blank">
          <img
            src={image}
            alt="Project"
            className="h-auto hover:scale-105 transition-all max-h-[350px] mx-auto"
          />
        </a>
      </div>

      <div className="bg-white dark:bg-priFader p-4 dark:text-white md:w-1/2 self-stretch md:flex justify-center flex-col md:rounded-r-xl rounded-b-xl">
        <h2 className="text-xl font-semibold mb-6 ">{name}</h2>
        <p className="font-light text-sm">
          {info.length >= 120 && showAll ? info : info.substring(0, 150)} {show}
        </p>
        <Skillbar skills={skills} />

        <div className="ml-4 w-fit">
          <a href={link} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-sec hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
