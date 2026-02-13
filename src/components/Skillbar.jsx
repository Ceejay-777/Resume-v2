import { Link } from 'lucide-react';
import React from 'react'

const Skillbar = ({ skills, link }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, id) => (
          <span
            key={id}
            className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-accent/20 dark:border-white/10 rounded-md bg-accent/5 dark:bg-white/5 text-accent/60 dark:text-dark-accent/60"
          >
            {skill}
          </span>
        ))}
      </div>

      {link && <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-semibold text-sec hover:underline group w-fit"
      >
        View Case Study
        <Link
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>}
    </div>
  );
};

export default Skillbar