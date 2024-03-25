import MyImage from "../../reuseables/MyImage.jsx";
import Socials from "../../reuseables/Socials.jsx";
import Underline from "../../reuseables/Underline.jsx";

const SectionIntro = () => {
  return (
    <section className="section bg-white p-4 dark:bg-pri">
      <h1 className="text-center dark:text-white font-semibold text-lg">Me</h1>
      <Underline />
      <MyImage />
      <div className="my-intro">
        <p className="text-2xl">Hello There!</p>
        <h1>
          I'm <span className="accent">covenant</span>
        </h1>
        <h4>I'm a web developer</h4>
      </div>
      <Socials />
    </section>
  );
};

export default SectionIntro;
