import { experiences } from "../../data";
import Header from "../../components/Title";
import Experience from "../../components/ui/Experience";

export const SectionExperience = () => {
  return (
    <section className="dark:bg-pri py-12 px-6 md:px-8">
        <Header>Work Experience</Header>

      <div className="flex flex-col gap-8">
        {experiences.map((experience) => {
          return (
            <Experience experience={experience} />
          );
        })}
      </div>
    </section>
  );
};
