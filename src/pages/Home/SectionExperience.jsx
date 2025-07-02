import React, { useState } from "react";
import { experiences } from "../../data";
import arrow from "../../assets/Icons/down.svg";
import Header from "../../components/Header";

export const SectionExperience = () => {
  const [currentExp, setCurrentExp] = useState("BrainBench");

  const current = experiences.find(
    (experience) => experience.nameTag === currentExp
  );

  const handleExp = (event) => {
    setCurrentExp(event.target.textContent);
  };

  return (
    <section className="dark:bg-pri py-12 px-4 md:px-8">
      <Header>Work Experience</Header>

      {experiences.map((experience,) => {
        const { title, company, date, duties } = experience;
        return (
          <fieldset
            className="border-4 px-4 my-8 border-gray-600 dark:border-gray-300 dark:text-white max-w-[1024px] mx-auto"
            key={company}
          >
            <legend className="font-semibold mb-3 text-xl rounded-3xl w-fit pl-6 pr-12">
              {company}
            </legend>
            <div className="p-4 gap-4">
              <div className="md:w-2/5 md:float-left md:mb-1 mb-2">
                <h4 className=" mb-3 text-xl">{title}</h4>
                <p className="text-sm my-3 md:mt-0">{date}</p>
              </div>
              <ul className=" mx-4 ">
                {duties.map((duty, index) => {
                  return (
                    <li
                      className="flex gap-5 items-center mb-3 text-xs"
                      key={index}
                    >
                      <img src={arrow} alt=">" className="w-4" />
                      <p>{duty}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </fieldset>
        );
      })}
    </section>
  );
};
