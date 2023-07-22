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
      <SectionProjects main = {false} num = {2}/> 
    </main>
  );
};



export default Home;
