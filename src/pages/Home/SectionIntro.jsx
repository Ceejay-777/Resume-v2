import Header from "../../reuseables/Header.jsx";
import MyImage from "../../reuseables/MyImage.jsx";
import Socials from "../../reuseables/Socials.jsx";
import Underline from "../../reuseables/Underline.jsx";

const SectionIntro = () => {
  return (
    <section className="max-w-[1-24px] bg-white p-4 dark:bg-pri transition-all duration-500 ">
      <Header>Me</Header>
      <div className="md:flex md:flex-row-reverse md:gap-[10%] md:items-center md:p-8">
        <div className="w-4/5 aspect-[3/4] max-w-[350px] my-5 mx-auto rounded-[40px] bg-[url('../assets/CeejayImage.jpg')] bg-cover"></div>
        <div className="max-w-[580px] mx-auto">
          <p className="text-2xl font-semibold dark:text-white">
            Hello! I'm <span className="accent">Covenant</span>
          </p>
          <p className="dark:text-white font-light text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos
            eveniet inventore quae officia nam blanditiis quia consequatur
            consectetur neque repellat dolores asperiores, sunt non veniam
            reprehenderit voluptas necessitatibus dignissimos?
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
