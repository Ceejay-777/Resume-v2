import ceeImage from "../../assets/Ceejay_portrait.png";
import Socials from "../../components/ui/Socials";

const SectionIntro = () => {
  return (
    <section className="relative flex flex-col mlg:flex-row items-center justify-between pt-28 px-6 mlg:px-16 mlg:pt-6 bg-background dark:bg-dark-background transition-colors duration-500 text-accent dark:text-dark-accent min-h-[70vh] md:min-h-[860px] overflow-hidden ">
      <div className="flex flex-col gap-6 items-center mlg:items-start text-center mlg:text-left max-w-[800px] z-20">
        <p className="text-sm md:text-base font-medium uppercase tracking-[0.2em] opacity-80">
          Fullstack Developer
        </p>

        <h1 className="text-5xl sm:text-6xl mlg:text-8xl font-bold tracking-tighter leading-[1.1] text-balance">
          Hello! I'm{" "}
          <span className="text-secondary dark:text-dark-secondary">
            Covenant
          </span>
        </h1>

        <div className="w-full flex justify-center mlg:hidden my-8">
          <img
            src={ceeImage}
            alt="Covenant"
            className="w-4/5 max-w-[320px] drop-shadow-2xl"
          />
        </div>

        <p className="font-normal text-base md:text-xl leading-relaxed max-w-[600px] text-pretty opacity-90">
          I'm a fullstack developer passionate about building scalable backend
          systems and beautiful, performant interfaces. I specialize in{" "}
          <span className="font-semibold">
            React, TypeScript, Flask, and Django
          </span>
          —crafting solutions that are clean, functional, and user-focused.
        </p>

        <div className="mt-4">
          <Socials />{" "}
        </div>
      </div>

      <div className="hidden mlg:block absolute bottom-0 right-0 w-[45%] max-w-[700px] z-10 pointer-events-none mr-10">
        <div className="relative">
          <img
            src={ceeImage}
            alt="Covenant Portrait"
            className="w-full h-auto object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-dark-background via-transparent to-transparent h-full bottom-0 transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
