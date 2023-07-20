import SectionIntro from "./SectionIntro";
import { SectionExperience } from "./SectionExperience";
import { SectionSkillset } from "./SectionSkillset";
import { SectionProjects } from "./SectionProjects";

const Home = () => {
  return (
    <main className="main">
      {/* <SectionIntro /> */}
      {/* <SectionExperience /> */}
      {/* <SectionSkillset /> */}
      <SectionProjects num = {2}/> 
    </main>
  );
};



export default Home;
