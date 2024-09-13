import Header from "../../reuseables/Header";
import { MyProjects } from "../../reuseables/AllProjects";

const SectionProjects = () => {
  return (
    <section className="bg-gray-100 dark:bg-priFade py-12 transition-all duration-500">
      <div className="max-w-[1200px] mx-auto">
        <Header>Projects</Header>
        <MyProjects main={false} num={2} />
      </div>
    </section>
  );
};

export default SectionProjects

