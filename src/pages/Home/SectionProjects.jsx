import Header from "../../components/Title";
import Project from "../../components/Project";
import { projects } from "../../data";

const SectionProjects = () => {
  return (
    <section className="bg-background dark:bg-dark-background transition-all duration-500">
      <Header>Projects</Header>
      <div className="w-full h-full flex flex-col gap-12">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default SectionProjects;
