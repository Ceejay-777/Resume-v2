import React from "react";
import { skillset } from "../data";
import MyImage from "../reuseables/MyImage";
import Skillbar from "../reuseables/Skillbar";
import Socials from "../reuseables/Socials"

const About = () => {
  const skills = skillset.map((skill) => skill.skill);
  return (
    <div className="main">
      <MyImage />
      <h1 className="sectionTitle">About Me</h1>
      <p className="aboutMe-info">
        Frontend Web Developer | React Developer | Python Enthusiast Hi there!
        I'm a Frontend Web Developer with around a year of experience in
        building awesome web applications. I've always been fascinated by
        technology and love creating impactful solutions.
        <br />
        I've spent time honing my skills in frontend development, and I'm
        particularly interested in working with React.
        <br />
        Building visually appealing and user-friendly interfaces is my jam, and
        I enjoy the process of making websites come to life.
        <br />
        Besides frontend work, I've also dabbled in Python-driven Machine
        Learning and Artificial Intelligence. It's been an exciting journey
        exploring data science and learning how to tackle complex challenges
        with data-driven insights. Collaboration is something I value a lot.
        <br />
        I work well in teams, partnering with designers, backend developers, and
        project managers to make sure everything fits together smoothly.
        <br />
        While I'm still relatively new to the field, I'm eager to learn and
        grow. I believe in the power of continuous improvement, and I'm always
        keeping an eye out for the latest trends and best practices in web
        development.
        <br />
        I'm super excited about the possibilities that lie ahead. Joining a team
        that shares my passion for technology and innovation would be a dream
        come true. <br />
        Send me an email at <a href="mailto: covenantcrackslord01@gmail.com">covenantcrackslord01@gmail.com</a> or reach me through the <Link to="/contact">Contact</Link> page.
        <br />
        <Socials />
      </p>
      <Skillbar skills={skills} />
    </div>
  );
};
export default About;
