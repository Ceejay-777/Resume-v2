import React, { useEffect, useState } from "react";
import user from "../assets/Icons/user.svg";
import Socials from "../reuseables/socials";
import { experiences, projects , skillset} from "../data";

const Home = () => {
  return (
    <main className="main">
      <SectionIntro />
      <SectionSkillset />
      <SectionExperience />
      <SectionProjects /> 
    </main>
  );
};

const SectionIntro = () => {
  return (
    <section className="section section-intro">
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

const SectionSkillset = () => {
  return (
    <section className="section section-skillset">
      <h2 className="sectionTitle">Skill Set</h2>

      {skillset.map((aSkill) => {
        const {skill, rating} = aSkill
        return (
          <div className="aSkill-container">
            <div className="skillTexts">
              <p className="skillText">{skill}</p>
              <p className="skillPercent skillText">{`${rating}%`}</p>
            </div>

            <div className="skill-container">
              <div className="skill" style={{width: `${rating}%`}}></div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const SectionExperience = () => {
  const [currentExp, setCurrentExp] = useState("BrainBench");

  const current = experiences.find(
    (experience) => experience.nameTag === currentExp
  );

  const handleExp = (event) => {
    setCurrentExp(event.target.textContent);
  };

  return (
    <section className="section section-exp">
      <h2 className="sectionTitle">Work Experience</h2>

      <div className="exp-opt-bar">
        {experiences.map((experience, index) => {
          return (
            <button key={index} className={`tag ${experience.nameTag === currentExp && 'active-exp'}`} onClick={handleExp}>
              {experience.nameTag}
            </button>
          );
        })}
      </div>

      <div className="exp-info">
        <h4 className="exp-title">{current.title}</h4>
        <p className="exp-company">{current.company}</p>
        <p className="exp-date">{current.date}</p>
        <ul>
          {current.duties.map((duty, index) => {
            return <li key={index} className="exp-duty">{duty}</li>;
          })}
        </ul>
      </div>

      <button className="exp-see-more btn">See More</button>
    </section>
  );
};

const SectionProjects = () => {

  return (
    <section className="section section-projects">
      <h2 className="sectionTitle">Projects</h2>

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
        <button className="btn">Show all</button>
      </div>
    </section>
  );
};

export default Home;
