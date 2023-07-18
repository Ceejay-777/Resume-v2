import React from "react";
import { projects } from "../../projectsdata.js";

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
                <h1>{index + 1}</h1>

                <div className="project-imgs">
                  <div>
                    <img
                      src={images[0]}
                      alt="Project"
                      className=" project-img main-project-img"
                    />
                  </div>

                  <div className="more-project-img">
                    {images.slice(1).map((img, index) => {
                      return (
                        <img
                          src={img}
                          alt="Project"
                          key={index}
                          className={"project-img"}
                        />
                      );
                    })}
                  </div>
                </div>

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
