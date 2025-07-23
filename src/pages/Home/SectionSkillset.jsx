import { skills } from "../../data";

export const SectionSkillset = () => {
  return (
    <section className="p-12">
      <div className="bg-secondary dark:bg-dark-secondary rounded-xl mx-auto p-3 grid grid-cols-3 w-fit justify-center gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {skills.map((skill) => {
          return <Skill Icon={skill.Icon} label={skill.label} />;
        })}
      </div>
    </section>
  );
};

const Skill = ({ Icon, label }) => {
  return (
    <div className="bg-background dark:bg-dark-background flex items-center justify-center p-2 rounded-xl flex-wrap gap-2">
      <Icon className="text-primary dark:text-dark-secondary w-6 h-6 mlg:w-8 mlg:h-8 " />
      <p className="text-accent dark:text-dark-accent text-sm font-semibold mlg:text-base">
        {label}
      </p>
    </div>
  );
};
