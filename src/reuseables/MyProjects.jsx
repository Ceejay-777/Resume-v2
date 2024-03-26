import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const { name, id, image, info, skills } = project;

    return (
      <div
        className="my-10 bg-gray-50 dark:bg-priFader rounded-lg shadow-md overflow-hidden md:flex  items-center"
        key={id}
      >
        <div className="p-8 md:w-1/2">
          <img
            src={image}
            alt="Project"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="bg-white dark:bg-priFade p-4 dark:text-white md:w-1/2 self-stretch md:flex justify-center ite flex-col">
          <h2 className="text-semibold mb-6">{name}</h2>
          <p className="font-light text-sm">
            {info.length >= 120 && showAll ? info : info.substring(0, 150)}{" "}
            {show}
          </p>
          <Skillbar skills={skills} />
        </div>
      </div>
    );
  };

  return (
    <div className="m-4 md:mx-12">
      {projects.map((project, index) => {
        if (index < num) {
          return <Project project={project} />;
        }
      })}
      {main || (
        <button
          className="py-1 px-3 rounded-2xl mx-auto block bg-sec font-semibold hover:scale-110 transition-all"
          onClick={() => navigate("/projects")}
        >
          Show all
        </button>
      )}
    </div>
  );
};
