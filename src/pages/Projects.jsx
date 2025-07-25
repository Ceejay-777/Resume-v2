import React from "react";
import { MyProjects } from "../components/AllProjects";
import Header from "../components/Title";

const Projects = () => {
  return (
    <main className="main dark:bg-pri-fader transition-all duration-500 pt-26">
      <Header>Projects</Header>
      <MyProjects />
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
