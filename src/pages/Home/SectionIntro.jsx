import Close from "../../assets/Icons/user.svg";
import Socials from "../../reuseables/socials";

const SectionIntro = () => {
    return (
      <section className="section section-intro">
        <div className="my-img-container">
          <img src={Close} alt="user" className="my-img" />
        </div>
  
        <div className="my-intro">
          <p>Hello There!</p>
          <h1>
            I'm <span className="accent">covenant</span>
          </h1>
          <h4>I'm a web developer</h4>
          <Socials />
        </div>
      </section>
    );
  };

  export default SectionIntro