import React from "react";
import { Link } from "react-router-dom";
import Header from "../reuseables/Header";

const About = () => {
  return (
    <div className="main dark:bg-pri transition-all duration-500 py-12">
      <Header>About</Header>

      <div className="md:flex mt-12 px-10 gap-12 max-w-[1200px] mx-auto">
        <div className="w-4/5 aspect-square max-w-[350px] my-5 mx-auto rounded-full bg-[url('../assets/CeejayImage2.jpg')] bg-cover md:w-2/5 self-start"></div>
        <div className="dark:text-white text-sm md:w-3/5 mt-8 md:mt-0">
            <p>
              I'm a dedicated and versatile developer with a focus on frontend
              development, specializing in JavaScript, React.js, Tailwind CSS,
              Next.js, and Python. Currently in my third year of Computer
              Engineering studies, I'm passionate about merging the technical and
              visual aspects of digital products to create impactful user
              experiences. Crafting pixel-perfect designs and writing clean,
              high-performance code are my top priorities.
            </p>
            <br />
            <p>
              My journey in web development began in 2020, and since then, I've
              continuously embraced new challenges and technologies to evolve as a
              developer. With over 3 years of experience, I'm now in my early
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
              Outside of coding, you'll often find me exploring the startup scene
              on Twitter, studying for school, or simply enjoying some downtime.
              Follow me on Twitter for tech insights and behind-the-scenes
              development updates, or check out my <a href="https://github.com/Ceejay-777" target="_blank" className="text-sec">GitHub profile</a>.
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
              You can reach out to me for work or collaborations via email at {" "}
              <a href="mailto: covenantcrackslord01@gmail.com" className="accent">
                covenantcrackslord01@gmail.com
              </a> {' '}
              or reach me through the{" "}
              <Link to="/contact" className="accent">
                Contact
              </Link>{" "}
              page..
            </p>
            <br />
            <p>
              And remember, I'm always up for a game of basketball or a friendly
              match of scrabble, chess, or checkers! 🏀📚♟️"
            </p>
        </div>
      </div>
    </div>
  );
};
export default About;
