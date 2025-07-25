import Header from "../../components/Title";
import { MyProjects } from "../../components/AllProjects";
import Project from "../../components/Project";
import { projects } from "../../data";

const SectionProjects = () => {
  return (
    <section className="bg-background dark:bg-dark-background transition-all duration-500 h-screen">
        {/* <MyProjects main={false} num={2} /> */}
        <MyProjects />
    </section>
  );
};

export default SectionProjects;
