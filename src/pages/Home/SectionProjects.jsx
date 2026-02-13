import Header from "../../components/Title";
import Project from "../../components/Project";
import { projects } from "../../data";

const SectionProjects = () => {
  return (
    <section className="mt-12 mlg:py-24 py-12 px-12 bg-background dark:bg-dark-background transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <Header>Showcase</Header>
        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <Project
              project={project}
              key={project.id}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
