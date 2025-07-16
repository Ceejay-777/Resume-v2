import React from "react";
import { skills } from "../../data";
import Header from "../../components/Title";

export const SectionSkillset = () => {
  return (
    <section className="py-12 px-8 bg-white dark:bg-pri transition-all duration-500">
      <div className="max-w-[1024px] mx-auto">
        <Header>Skills</Header>
        <div className="mt-12 grid md:grid-cols-6 grid-cols-4 justify-items-center items-center">
          {skills.map((skill, index) => {
            const { icon, name } = skill;
            return (
              <div
                className={`md:w-20 w-16 aspect-square bg-sec/30 dark:bg-gray-100/50 p-1 flex flex-col items-center border border-pri rounded-xl dark:border-slate-100 ${
                  index % 2 == 0 && "mt-12"
                }`}
                key={name}
              >
                <img src={icon} alt={name} className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
