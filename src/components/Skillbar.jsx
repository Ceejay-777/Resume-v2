import { Link } from 'lucide-react';
import React from 'react'

const Skillbar = ({skills, link}) => {
  return (
    <div className="w-fit flex flex-wrap gap-2 items-center">
      {skills.map((skill, ID) => {
        return (
          <p
            className="px-3 py-1  border rounded-full border-secondary dark:border-dark-secondary text-complementary text-xs"
            key={ID}
          >
            {skill}
          </p>
        );
      })}
      <a href={link} target="_blank">
        <Link />
      </a>
    </div>
  );
}

export default Skillbar