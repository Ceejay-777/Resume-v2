import Header from "../../components/Title";
import { MyProjects } from "../../components/AllProjects";

const SectionProjects = () => {
  return (
    <section className="bg-gray-100 dark:bg-pri-fade py-12 transition-all duration-500">
      <div className="max-w-[1200px] mx-auto">
        <Header>Projects</Header>
        <MyProjects main={false} num={2} />
      </div>
    </section>
  );
};

export default SectionProjects;
