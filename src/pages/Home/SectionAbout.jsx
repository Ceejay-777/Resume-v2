import React from "react";
import Header from "../../reuseables/Header";
import { Link } from "react-router-dom";

const SectionAbout = () => {
  return (
    <section className="bg-gray-100 dark:bg-pri-fade transition-all duration-500">
      <div className="max-w-[1400px] py-12 mx-auto">
        <Header>About</Header>
        <div className="mt-12 px-8 md:px-16">
          <div className="md:w-1/2 md:float-right aspect-video rounded-xl bg-[url('./assets/CeejayImage3.jpg')] bg-contain bg-no-repeat self-start m-6 md:image-shadow bg-center mb-2"></div>
          <div className="dark:text-white mt-8 md:mt-0 text-sm leading-loose">
            <p className="text-xl font-semibold whitespace-break-spaces">
              I'm a <span className="text-sec">dedicated</span> and
              <span className="text-sec"> versatile</span> developer with a
              focus on frontend development, specializing in
              <span className="text-sec"> Next.js</span>,
              <span className="text-sec"> React.js</span>,
              <span className="text-sec"> Tailwind CSS</span>, and
              <span className="text-sec"> python</span>.
            </p>

            <br />
            <p>
              Currently in my third year of Computer Engineering studies, I'm
              passionate about merging the technical and visual aspects of
              digital products to create impactful user experiences. Crafting
              pixel-perfect designs and writing clean, high-performance code are
              my top priorities.
            </p>
            <br></br>
            <p>
              My journey in web development began in 2020, and since then, I've
              continuously embraced new challenges and technologies to evolve as
              a developer. With over 4 years of experience, I'm now in my early
              twenties, leveraging modern tools like React.js, JavaScript,
              Nest.js, Tailwind CSS, and more to build cutting-edge web
              applications.
            </p>
            <br />
            <p>
              As a forward-thinking individual, I enjoy being involved in every
              stage of product development, from concept to execution.
            </p>
            <br />
            <p>
              Outside of coding, you'll often find me exploring the startup
              scene on Twitter, studying for school, or simply enjoying some
              downtime. Follow me on Twitter for tech insights and
              behind-the-scenes development updates, or check out my{" "}
              <a
                href="https://github.com/Ceejay-777"
                target="_blank"
                className="text-sec hover:underline font-semibold"
              >
                GitHub profile
              </a>
              .
            </p>
            <br />
            <p>Quick facts about me:</p>
            <ul>
              <li>• Currently pursuing a B.E. in Computer Engineering</li>
              <li>• Passionate lifelong learner</li>
              <li>• Anime lover </li>
            </ul>
            <br />
            <p>
              You can reach out to me for work or collaborations via email at{" "}
              <a
                href="mailto: covenantcrackslord01@gmail.com"
                className="text-sec hover:underline font-semibold"
              >
                covenantcrackslord01@gmail.com
              </a>{" "}
              or reach me through the{" "}
              <Link to="/contact" className="text-sec hover:underline font-semibold">
                Contact
              </Link>{" "}
              page.
            </p>
            <br />
            <p>
              And remember, I'm always up for a game of basketball or a friendly
              match of scrabble, chess, or checkers! 🏀📚♟️"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
