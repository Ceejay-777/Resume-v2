import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data.js";
import Project from "./Project.jsx";

export const MyProjects = ({ main }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-12">
      {
        projects.map((project) => {
          return <Project project={project} key={project.id}/>;
        })
      }
        
    </div>
  );
};
