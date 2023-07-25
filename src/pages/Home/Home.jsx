import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import { SectionProjects } from "./SectionProjects";
import { projects } from "../../projectsdata";


const Home = () => {
  return (
    <main className="main">
      <SectionIntro />
      <SectionExperience />
      <SectionSkillset />
      <SectionProjects/> 
    </main>
  );
};



export default Home;
