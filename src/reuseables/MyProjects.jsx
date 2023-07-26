import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../projectsdata";

export const MyProjects = ({ main, num }) => {
  return (
    

      <div className="projects">
        {projects.map((project, index) => {
          const { name, id, images, info } = project;
          if (index < num) {
            return (
              <div className="project" key={id}>
                <div className="project-header">
                  <h2>{index + 1}.</h2>
                  <h2>{name} project</h2>
                </div>

                <div className="project-imgs">
                  <div>
                    <img
                      src={images[0]}
                      alt="Project"
                      className=" project-img main-project-img"
                    />
                  </div>

                  {main && (
                    <div className="more-project-img">
                      {images.slice(1).map((img, index) => {
                        return (
                          <div className="project-img-container" key={index}>
                            <img
                              src={img}
                              alt="Project"
                              className={"project-img"}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <p className="project-info">{info}</p>
              </div>
            );
          }
        })}
        {main || (
          <Link to="/projects">
            <button className="btn">Show all</button>
            {/* Okay */}
          </Link>
        )}
      </div>
  );
};
