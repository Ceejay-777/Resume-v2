import { skills } from "../../data";
import Header from "../../components/Title";

export const SectionSkillset = () => {
  return (
    <section className="py-20 px-10 max-w-[1200px] mx-auto">
      <Header>Skill Set</Header>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} Icon={skill.Icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

const Skill = ({ Icon, label }) => {
  return (
    <div
      className="
      group flex items-center gap-3 px-4 py-2.5 
      bg-background/50 dark:bg-dark-background/50 
      backdrop-blur-sm
      border border-accent/10 dark:border-dark-accent/10 
      rounded-full transition-all duration-300 
      hover:border-sec hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--color-sec-rgb),0.15)]
    "
    >
      <Icon
        className="
        w-5 h-5 md:w-6 md:h-6 
        text-accent/60 dark:text-dark-accent/60 
        group-hover:text-sec transition-colors duration-500 ease-in-out
      "
      />
      <span
        className="
        text-sm md:text-base font-medium 
        text-accent/80 dark:text-dark-accent/80 
        group-hover:text-accent dark:group-hover:text-dark-accent transition-colors duration-500 ease-in-out
      "
      >
        {label}
      </span>
    </div>
  );
};
