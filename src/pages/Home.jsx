import React, { useEffect, useState } from "react";
import user from "../assets/Icons/user.svg";
import Socials from "../reuseables/socials";
import { experiences, projects } from "../data";
import image2 from "../assets/Project_images/project2.jpg";

const Home = () => {
  return (
    <main className="main">
      {/* <SectionIntro /> */}
      {/* <SectionExperience /> */}
      {/* <SectionProjects />  */}
    </main>
  );
};

const SectionIntro = () => {
  return (
    <section className="main-intro">
      <div className="my-img-container">
        <img src={user} alt="user" className="my-img" />
      </div>

      <div className="my-intro">
        <p>Hello There!</p>
        <h1>
          I'm <span className="accent">covenant</span>
        </h1>
        <h4>I'm a web developer</h4>
        <Socials />
      </div>
    </section>
  );
};

const SectionExperience = () => {
  const [currentExp, setCurrentExp] = useState("BrainBench");

  const current = experiences.find(
    (experience) => experience.nameTag === currentExp
  );

  const handleExp = (event) => {
    setCurrentExp(event.target.textContent);
  };

  return (
    <>
      <h2 className="sectionTitle">Work Experience</h2>

      <div className="experiences">
        {experiences.map((experience, index) => {
          return (
            <button key={index} className="exp-btn" onClick={handleExp}>
              {experience.nameTag}
            </button>
          );
        })}
      </div>

      <div className="expInfo">
        <h2>{current.title}</h2>
        <p>{current.nameTag}</p>
        <h4>{current.date}</h4>
        <ul>
          {current.duties.map((duty, index) => {
            return <li key={index}>{duty}</li>;
          })}
        </ul>
      </div>

      <button>See More</button>
    </>
  );
};

const SectionProjects = () => {
  // const componentPath = new URL('.', import.meta.url).pathname
  // console.log(componentPath)

  return (
    <>
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((project, index) => {
          const { name, id, img, info } = project;
          if (index < 2) {
            return (
              <div className="project" key={id}>
                <h3>{index + 1}</h3>
                <img src={img} alt={name} className="project-img" />
                <p>{info}</p>
              </div>
            );
          }
        })}
        <button>Show all</button>
      </div>
    </>
  );
};

export default Home;
