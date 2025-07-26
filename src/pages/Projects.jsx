import React from "react";
import Header from "../components/Title";
import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <main className="main dark:bg-pri-fader transition-all duration-500 pt-26">
      <Header>Projects</Header>
      <div className="w-full h-full flex flex-col gap-12">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
      <p className="text-center mb-10 text-accent dark:text-dark-accent m-6 text-sm">
        Checkout all my frontendmentor projects at{" "}
        <a
          href="https://www.frontendmentor.io/profile/Ceejay-777"
          className="text-complementary cursor-pointer hover:underline"
          target="_blank"
        >
          Frontend Mentor
        </a>
      </p>
    </main>
  );
};

export default Projects;
