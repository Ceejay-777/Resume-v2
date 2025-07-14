import Header from "../../components/Header.jsx";
import Socials from "../../components/ui/Socials.jsx";

const SectionIntro = () => {
  return (
    <section className=" bg-background px-8 py-10 dark:bg-dark-background transition-all duration-500">
      <div className="max-w-[1200px] mx-auto">
        <Header>Me</Header>
        <div className="md:flex md:flex-row-reverse md:gap-[10%] md:items-center md:p-8 ">
          <div className="w-4/5 aspect-square max-w-[350px] my-5 mx-auto rounded-full bg-[url('./assets/CeejayImage2.jpg')] bg-cover border-12 md:image-shadow shadow-lg dark:shadow-black dark:border-pri-fade min-w-[280px]"></div>
          <div className="max-w-[580px] mx-auto">
            <p className="text-gray-400">Frontend Developer</p>
            <h1 className="text-6xl font-semibold dark:text-white">
              Hello! I'm <span className="text-sec">Covenant</span>
            </h1>
            <p className="dark:text-white font-light text-sm mt-2">
              Enthusiastic Computer Engineering student with a strong foundation
              in frontend development. I'm proficient in JavaScript (ES6+),
              HTML/CSS, React, Tailwind CSS, and Python. My passion lies in
              building visually-appealing and user-friendly web interfaces.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
