import React, { useState } from "react";
import { experiences } from "../../data";
import arrow from "../../assets/Icons/down.svg";
import Header from "../../reuseables/Header";

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

      {experiences.map((experience, index) => {
        const {title, company, date, duties} = experience
        return (
          <div className="dark:bg-priFade py-8 px-2 rounded-xl dark:text-white mt-8 bg-gray-200 md:flex justify-center md:px-8 items-center gap-4" key={index}>
            
              <div className="md:w-2/5">
                <p className="font-semibold mb-3 border-2 border-sec rounded-3xl w-fit py-2 px-3">{company}</p>
                <h4 className=" mb-3">{title}</h4>
                <p className="text-xs my-3 md:mt-0">{date}</p>
              </div>
              <ul className="md:w-3/5 max-w-[540px] mx-4">
                {duties.map((duty, index) => {
                  return (
                    <li className="flex gap-5 items-center mb-3 text-xs" key={index}>
                      <img src={arrow} alt=">" className="w-4" />
                      <p>{duty}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          
        );
      })}

      
    </section>
  );
};
