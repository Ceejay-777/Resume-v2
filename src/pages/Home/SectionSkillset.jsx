import React from "react";
import { skillset } from "../../data";
import "../../styles/Skills.css"

export const SectionSkillset = () => {
  return (
    <section className="section section-skillset">
      <h2 className="sectionTitle">Skill Set</h2>

      {skillset.map((aSkill, index) => {
        const { skill, rating } = aSkill;
        return (
          <div className="aSkill-container"
          key={index}>
            <div className="skillTexts">
              <p className="skillText">{skill}</p>
              <p className="skillPercent skillText">{`${rating}%`}</p>
            </div>

            <div className="skill-container">
              <div className="skill" style={{ width: `${rating}%` }}></div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
