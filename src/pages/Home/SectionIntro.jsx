import Socials from "../../components/ui/Socials.jsx";
import ceeImage from "../../assets/Ceejay_portrait.png";

const SectionIntro = () => {
  return (
    <section className="relative text-center mlg:text-left pt-16 px-8 mlg:pt-4 bg-background dark:bg-dark-background transition-all duration-500  mlg:flex mlg:flex-row mlg:items-center text-accent dark:text-dark-accent md:min-h-[860px]">
      <div className="flex flex-col gap-4 items-center mx-auto mlg:mx-0 mlg:block max-w-[700px] mlg:w-full mlg:ml-12 z-20">
        <p className="text-lg">Frontend Developer</p>
        <h1 className="text-4xl mlg:text-8xl font-semibold">
          Hello! I'm <span className="text-sec">Covenant</span>
        </h1>

        <img src={ceeImage} alt="CeeJay" className="w-3/5 pt-4 mlg:hidden" />

        <p className="font-light text-sm mlg:text-lg mt-2">
          Enthusiastic Computer Engineering student with a strong foundation in
          frontend development. I'm proficient in JavaScript (ES6+), HTML/CSS,
          React, Tailwind CSS, and Python. My passion lies in building
          visually-appealing and user-friendly web interfaces.
        </p>
        <Socials />
      </div>
      <div className="w-[calc(60%_-_64px)] max-w-[860px] h-fit self-end hidden mlg:block absolute bottom-0 right-16 z-10">
        <img src={ceeImage} alt="CeeJay" className=" w-full" />
      </div>
    </section>
  );
};

export default SectionIntro;
