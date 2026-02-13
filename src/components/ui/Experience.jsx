import { Dot } from "lucide-react";

const Experience = ({ experience }) => {
  const { company, title, date, highlights, location } = experience;

  return (
    <div className="relative pl-8 md:pl-0 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 group">
      <p className="text-sm font-medium opacity-50 pt-1 md:text-right uppercase tracking-wider relative">
        {date}

        <div className="absolute right-0 md:-right-6 top-2 flex flex-col items-center">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-sec bg-background dark:bg-dark-background z-10 transition-transform group-hover:scale-125" />
          <div className="w-[1px] h-full bg-accent/10 dark:bg-white/10 absolute top-2" />
        </div>
      </p>

      <div className="pb-16">
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-bold text-accent dark:text-dark-accent leading-none">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2 opacity-80">
            <span className="text-sec font-semibold">{company}</span>
            <span className="text-sm opacity-40">•</span>
            <span className="text-xs italic">{location}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {highlights.map((point, i) => (
            <li
              key={i}
              className="text-sm md:text-base leading-relaxed opacity-70 flex gap-3"
            >
              <span className="text-sec mt-1.5 shrink-0 w-1 h-1 rounded-full bg-sec" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
