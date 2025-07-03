import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data.js";
import Project from "./Project.jsx";

export const MyProjects = ({ main }) => {
  const navigate = useNavigate();

  return (
    <div className="m-4 md:mx-12">
      {projects.map((project, index) => {
        if (main) {
          return <Project project={project} key={project.id} />;
        } else if (index < 3) {
          return <Project project={project} key={project.id} />;
        }
      })}
      {main || (
        <div className="mx-auto w-fit"> 
          <Link
            to="/projects"
            className="text-black dark:text-white border-2 border-gray-500 text-sm px-4 py-1 rounded-full hover:border-sec transition-all"
          >
            Show all
          </Link>
        </div>
      )}
    </div>
  );
};
