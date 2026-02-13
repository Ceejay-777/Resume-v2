import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import SectionProjects from "./SectionProjects";

const Home = () => {
  return (
    <main className="flex flex-col gap-12">
      <SectionIntro />
      <SectionSkillset />
      <SectionProjects />
      <SectionExperience />
    </main>
  );
};

export default Home;
