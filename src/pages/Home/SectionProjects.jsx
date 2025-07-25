import Header from "../../components/Title";
import { MyProjects } from "../../components/AllProjects";
import Project from "../../components/Project";
import { projects } from "../../data";

const SectionProjects = () => {
  return (
    <section className="bg-background dark:bg-dark-background transition-all duration-500">
      <Header>Projects</Header>
      <MyProjects />
    </section>
  );
};

export default SectionProjects;
