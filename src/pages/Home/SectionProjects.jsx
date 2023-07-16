import React from "react";
import { projects } from "../../data";

export const SectionProjects = () => {
  return (
    <section className="section section-projects">
      <h2 className="sectionTitle">Projects</h2>

      <div className="projects">
        {projects.map((project, index) => {
          const { name, id, images, info } = project;
          if (index < 2) {
            return (
              <div className="project" key={id}>
                <h3>{index + 1}</h3>
                {images.map((img, index) => {
                  return <img src={img} alt="Project" key={index} className={index === 3 ? "project-img main-project-img" : "project-img"}/>;
                })}
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
