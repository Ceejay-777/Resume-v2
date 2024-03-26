import Header from "../../reuseables/Header";
import { MyProjects } from "../../reuseables/MyProjects";

const SectionProjects = () => {
  return (
    <section className="bg-white dark:bg-pri py-12 transition-all duration-500">
      <div className="max-w-[1024px] ">
        <Header>Projects</Header>
        <MyProjects main={false} num={2} />
      </div>
    </section>
  );
};

export default SectionProjects

