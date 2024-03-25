import React from "react";
import { skills } from "../../data";
import Header from "../../reuseables/Header";

export const SectionSkillset = () => {
  return (
    <section className="max-w-[1024px] p-8 bg-gray-50 dark:bg-priFade transition-all duration-500">
      <Header>Skills</Header>

      {skills.map((skill, index) => {
        const {icon, name} = skill
        return (
          <div className="w-16 h-16" key={index}>
            <img src={icon} alt={name} className="w-full h-full" />
          </div>
        );
      })}
    </section>
  );
};
