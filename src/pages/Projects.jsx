import React from "react";
import Header from "../components/Title";
import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <main className="main dark:bg-pri-fader pt-26 mlg:py-24 py-12 px-12 bg-background dark:bg-dark-background transition-colors duration-500">
      <Header>Projects</Header>
      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => {
          return (
            <Project
              project={project}
              key={project.id}
              isEven={index % 2 === 0}
            />
          );
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
