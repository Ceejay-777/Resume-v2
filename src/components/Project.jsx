import { useState, useRef, useEffect } from "react";
import Skillbar from "./Skillbar.jsx";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const Project = ({ project }) => {
  const { name, image, info, skills, link } = project;

  return (
    <div className="px-12 flex flex-col md:flex-row gap-6 items-center max-w-[1440px] mx-auto">
      <div className="md:w-[55%] rounded-xl border border-complementary/20 h-fit min-w- project relative overflow-hidden">
        <img src={image} alt="Project" className="" />
      </div>

      <ProjectInfo name={name} info={info} skills={skills} link={link} />
    </div>
  );
};

export default Project;

const ProjectInfo = ({ name, info, skills, link }) => {
  return (
    <div className="md:w-2/5 flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold font-heading">{name}</h2>
      <p className="text-sm ">{info}</p>

      <Skillbar skills={skills} link={link} />
    </div>
  );
};
