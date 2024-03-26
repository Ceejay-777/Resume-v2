import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import SectionProjects from "./SectionProjects";
import SectionAbout from "./SectionAbout";

const Home = () => {
  return (
    <main className="main">
      <SectionIntro />
      <SectionAbout />
      <SectionSkillset />
      <SectionProjects />
      <SectionExperience />
    </main>
  );
};

export default Home;
