import { MyProjects } from "../../reuseables/MyProjects";

const SectionProjects = () => {
  return (
    <section className="section section-projects">
      <h2 className="sectionTitle">Projects</h2>
      <MyProjects main={false} num={2} />
    </section>
  );
};

export default SectionProjects

