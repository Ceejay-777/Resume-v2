import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../projectsdata";
import Skillbar from "./Skillbar";

export const MyProjects = ({ main, num }) => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const show = (
    <span className="text-sec" onClick={() => setShowAll(!showAll)}>
      {showAll ? "Show less" : " ...show more"}
    </span>
  );

  const Project = ({ project }) => {
    const { name, id, image, info, skills, link } = project;

    return (
      <div
        className={`my-10 bg-gray-50 dark:bg-pri rounded-lg shadow-md overflow-hidden md:flex  items-center`}
        key={id}
      >
        <div className="p-8 md:w-1/2">
          <img
            src={image}
            alt="Project"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="bg-white dark:bg-priFader p-4 dark:text-white md:w-1/2 self-stretch md:flex justify-center ite flex-col">
          <h2 className="text-semibold mb-6">{name}</h2>
          <p className="font-light text-sm">
            {info.length >= 120 && showAll ? info : info.substring(0, 150)}{" "}
            {show}
          </p>
          <Skillbar skills={skills} />

          <div className="ml-4">
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

  return (
    <div className="m-4 md:mx-12">
      {projects.map((project, index) => {
        if (index < num) {
          return <Project project={project} key={index}/>;
        }
      })}
      {main || (
        <button
          className="py-1 px-3 rounded-2xl mx-auto block bg-sec dark:text-white font-semibold hover:scale-110 transition-all"
          onClick={() => navigate("/projects")}
        >
          Show all
        </button>
      )}
    </div>
  );
};
