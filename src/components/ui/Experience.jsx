import { ArrowRight } from "lucide-react";
import { Dot } from "lucide-react";
import { ArrowBigLeft } from "lucide-react";
import React from "react";
import Skillbar from "../Skillbar";

const Experience = ({ experience }) => {
  const { company, title, date, duties, skills, duty } = experience;
  return (
    <div className="grid-cols-1 grid mlg:grid-cols-[auto_1fr]">
      <p className="w-60">{date}</p>
      <div>
        <div className="flex sm:gap-1 items-center sm:text-lg font-semibold leading-loose flex-wrap shrink-0">
          <p>{title}</p>
          <Dot className="hidden mlg:block"/>
          <p>{company}</p>
        </div>

        <p className="prose text-sm tracking-wide leading-relaxed">{duty}</p>

        {/* <Skillbar skills={skills}/> */}
      </div>
    </div>
  );
};

export default Experience;
