import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data.js";
import Project from "./Project.jsx";

const projectOne = projects[0];

export const MyProjects = ({ main }) => {
  const navigate = useNavigate();

  return (
    <div className=" ">
      {/* <div className="h-[300px] border max-w-9/10 w-fit mx-auto flex gap-2 overflow-x-clip px-2 "> */}
        {/* <Project project={projectOne} /> */}
        <Project project={projectOne} />
      {/* </div> */}
      {/* <div className="h-[300px] border max-w-9/10 w-fit mx-auto flex gap-2 overflow-x-clip px-2"> */}
        {/* <Project project={projectOne} />
        <Project project={projectOne} /> */}
      {/* </div> */}
    </div>
  );
};
