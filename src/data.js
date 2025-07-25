import github from "./assets/Icons/github.svg";
import gmail from "./assets/Icons/mail.svg";
import Xlogo from "./assets/Icons/Xlogo.svg";
import linkedin from "./assets/Icons/linkedin.svg";
import phone from "./assets/Icons/phone.svg";

import portfolio from "./assets/Project_images/resumedesktop.png";
import gridale from "./assets/Project_images/gridale.png";
import learnexo from "./assets/Project_images/learnexo.png";
import docuhealth from "./assets/Project_images/docuhealth.png";
import chainagents from "./assets/Project_images/chainagents.png";
import ssrllabapp from "./assets/Project_images/ssrllabapp.png";

import {
  Next,
  Javascript,
  Django,
  Typescript,
  Flask,
  Tailwind,
  Python,
  Mongodb,
  Motion,
  Postgresql,
  Figma,
  React,
} from "../src/components/Icons/index";

export const projects = [
  {
    id: 1,
    name: "DocuHealth",
    stack: "Backend",
    image: docuhealth,
    info: "A secure hospital records API with patient onboarding, file uploads, and subscription management. Powers a real health platform adopted by over 500 users and the Osun State Government.",
    skills: ["Django", "PostgreSQL", "JWT", "Paystack", "Cloudinary"],
    link: "https://docuhealthservices.com",
  },

  {
    id: 2,
    name: "LearNEXO",
    stack: "Fullstack",
    image: learnexo,
    info: "An AI-powered learning platform for high school students in Nigeria, delivering personalized lessons and tracking progress through a fullstack dashboard and device sync.",
    skills: ["React", "Node", "TypeScript", "Flask", "MongoDB", "AI"],
    link: "https://learnexo.vercel.app/",
  },

  {
    id: 3,
    name: "SSRL Intern App",
    stack: "Fullstack",
    image: ssrllabapp,
    info: "A personnel and intern management system built for Smart Systems Research Lab to streamline onboarding, report submission, and admin tracking.",
    skills: ["React", "Flask", "MongoDB", "Redux"],
    link: "https://ssrl-lab-app.vercel.app",
  },

  {
    id: 4,
    name: "Gridale",
    stack: "Frontend",
    image: gridale,
    info: "A fast-paced puzzle game where players click matching colors before time runs out. Includes score tracking, difficulty scaling, and saved high scores.",
    skills: ["Reac", "Tailwind", "Redux"],
    link: "https://gridale.vercel.app",
  },

  {
    id: 5,
    name: "My portfolio",
    stack: "Frontend",
    image: portfolio,
    info: "A dynamic developer portfolio with theme toggles, animations, and smooth transitions showcasing projects, skills, and personal highlights in a performant, responsive layout.",
    skills: ["React", "Tailwind", "Framer Motion", "TypeScript"],
    link: "https://dacodefadav2.vercel.app",
  },

  {
    id: 6,
    name: "Chain Agents",
    stack: "Frontend",
    image: chainagents,
    info: "A sleek landing site for a crypto token project, featuring tokenomics, whitepaper, and animated sections to explain the ecosystem and build community trust.",
    skills: ["ReactJS", "Tailwind", "JavaScript", "Git", "Redux"],
    link: "https://changeagents.vercel.app/",
  },
];

export const socialLinks = [
  {
    fullLinks: [
      {
        icon: gmail,
        ref: "mailto: covenantjoshade@gmail.com.com",
        account: "email",
        text: "covenantjoshade@gmail.com",
      },
      {
        icon: phone,
        ref: "https://wa.me/2349069189724",
        account: "phone",
        text: "+234 90 691 8 9724",
      },
    ],

    iconLinks: [
      {
        icon: linkedin,
        ref: "https://www.linkedin.com/in/covenant-joshua-5080aa228",
        account: "linkedin",
      },
      { icon: github, ref: "https://github.com/Ceejay-777", account: "github" },
      { icon: Xlogo, ref: "https://twitter.com/Cee_Jay_777", account: "X" },
    ],
  },
];

export const experiences = [
  {
    nameTag: "SSRL",
    title: "Frontend Web developer, Intern",
    company: "Smart Systems Research Lab",
    location: "FUTA, Akure",
    date: "April 2024 - Present",
    duty: "Constantly worked on improving existing skills and add additional skills. Collaborated with other lab interns to develop various lab projects. Developed good rapport with other interns and members of my team. Participated in various lab organized events such as hackatons and ideatons.",
  },

  {
    nameTag: "Kinplus",
    title: "Frontend Web developer, Intern",
    company: "Kinplus Technologies ",
    location: "Ado-Ekiti, Ekiti State",
    date: "April 2023 - August 2023",
    duty: "Understand the basics of HTML, CSS and JavaScript. Developed responsive and intuitive user interfaces using HTML, CSS, and JavaScript, integrating seamlessly with RESTful APIs to enhance website functionality and user experience.  Quickly adapted to new tech, showing proactive skill development while maintaining clean frontend code, focusing on detail and readability. Utilized modern frontend frameworks such as React.js to build dynamic and interactive user interfaces, expanding proficiency in frontend development technologies.",
  },

  {
    nameTag: "BrainBench",
    title: "Junior Backend Developer(ML), Intern",
    company: "Brainbench Academy",
    location: "Ado-Ekiti, Ekiti State",
    date: "April 2022 - September 2022",
    duty: "Understand the basics of machine learning algorithms and models. This involves understanding how different algorithms work, what their strengths and weaknesses are, and how to choose the right algorithm for a particular problem. Help develop simple APIs using python. Train, test, and validate simple machine learning models. This includes using cross-validation to evaluate model performance, tuning parameters, and evaluating the impact of different features on model performance. Write code that is clean, well-documented, and easy to maintain.",
  },
];

export const skills = [
  { Icon: Next, label: "NextJS" },
  { Icon: Typescript, label: "Typescript" },
  { Icon: Django, label: "Django" },
  { Icon: Tailwind, label: "Tailwind" },
  { Icon: React, label: "React" },
  { Icon: Javascript, label: "Javascript" },
  { Icon: Mongodb, label: "Mongodb" },
  { Icon: Postgresql, label: "Postgresql" },
  { Icon: Python, label: "Python" },
  { Icon: Figma, label: "Figma" },
  { Icon: Flask, label: "Flask" },
  { Icon: Motion, label: "Motion" },
];

export const slideUpVariant = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: { duration: 1, ease: "easeInOut" },
};
