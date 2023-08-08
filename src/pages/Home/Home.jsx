import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import SectionProjects from "./SectionProjects";


const Home = () => {
  return (
    <main className="main">
      <div className="col-2">
        <SectionIntro />
        <SectionSkillset />
      </div>
      <SectionProjects />
      <SectionExperience />
    </main>
  );
};



export default Home;
