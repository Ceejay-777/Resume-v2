import React from "react";
import { MyProjects } from "../components/AllProjects";
import Header from "../components/Title";

const Projects = () => {
  return (
    <main className="main dark:bg-pri-fader transition-all duration-500">
      <Header>Projects</Header>
      <MyProjects main={true} />
      <p className="text-center mb-10 dark:text-white">
        Checkout all my frontendmentor projects at{" "}
        <a
          href="https://www.frontendmentor.io/profile/Ceejay-777"
          className="accent"
          target="_blank"
        >
          Frontend Mentor
        </a>
      </p>
    </main>
  );
};

export default Projects;
