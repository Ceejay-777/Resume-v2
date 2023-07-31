import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../projectsdata";
import Skillbar from "./Skillbar";


export const MyProjects = ({ main, num }) => {
  const [showAll, setShowAll] = useState(false);
  const show = <span className="accent" onClick={() => setShowAll(!showAll)}>
  {showAll ? "show less" : "show more"}...
</span>
  return (
    <div className="projects">
      {projects.map((project, index) => {
        const { name, id, images, info, skills } = project;
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
                  <div className={images.length !== 2 ? "more-project-imgs" : "more-project-imgs extra-project-img"}>
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

                {info.length >= 150 ? showAll ? (
                  <p className="project-info">{info}  {show}</p>
                ) : (
                  <p className="project-info">{info.substring(0, 150)} {show}</p>
                ): <p className="project-info">{info}</p>}
              <Skillbar skills={skills} />
            </div>
          );
        }
      })}
      {main || (
        <Link to="/projects" className="show-all-projects">
          <button className="btn">Show all</button>
        </Link>
      )}
    </div>
  );
};
