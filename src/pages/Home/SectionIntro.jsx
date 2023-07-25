import MyImage from "../../reuseables/MyImage"
import Socials from "../../reuseables/socials";

const SectionIntro = () => {
    return (
      <section className="section section-intro">
        <MyImage />
        <div className="my-intro">
          <p>Hello There!</p>
          <h1>
            I'm <span className="accent">covenant</span>
          </h1>
          <h4>I'm a web developer</h4>
        </div>
        <Socials />
      </section>
    );
  };

  export default SectionIntro