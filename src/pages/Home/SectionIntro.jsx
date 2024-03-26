import Header from "../../reuseables/Header.jsx";
import Socials from "../../reuseables/Socials.jsx";

const SectionIntro = () => {
  return (
    <section className=" bg-white p-4 dark:bg-pri transition-all duration-500 ">
      <div className="max-w-[1024px] mx-auto">
        <Header>Me</Header>
        <div className="md:flex md:flex-row-reverse md:gap-[10%] md:items-center md:p-8">
          <div className="w-4/5 aspect-square max-w-[350px] my-5 mx-auto rounded-full bg-[url('../assets/CeejayImage2.jpg')] bg-cover"></div>
          <div className="max-w-[580px] mx-auto">
            <p className="text-2xl font-semibold dark:text-white">
              Hello! I'm <span className="accent">Covenant</span>
            </p>
            <p className="dark:text-white font-light text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eos eveniet inventore quae officia nam blanditiis quia consequatur
              consectetur neque repellat dolores asperiores, sunt non veniam
              reprehenderit voluptas necessitatibus dignissimos?
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
