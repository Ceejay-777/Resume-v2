import React from "react";
import { skills } from "../../data";
import Header from "../../reuseables/Header";

export const SectionSkillset = () => {
  return (
    <section className=" py-12 px-8 bg-gray-50 dark:bg-priFade transition-all duration-500">
      <div className="max-w-[1024px] mx-auto">
        <Header>Skills</Header>
        <div className="grid gap-4 justify-between justify-items-center items-center thegrid grid-cols-[repeat(auto-fill,_68px)] mt-8">
          {skills.map((skill, index) => {
            const { icon, name } = skill;
            return (
              <div className="flex flex-col items-center w-fit" key={index}>
                <div className="w-16 h-16" key={index}>
                  <img src={icon} alt={name} className="w-full h-full" />
                </div>
                <p className="dark:text-white text-xs w-fit font-semibold">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
