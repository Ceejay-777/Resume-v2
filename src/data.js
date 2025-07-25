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
    title: "Backend Team Lead",
    company: "DocuHealth Services",
    date: "Dec 2024 - Present",
    duty: "At DocuHealth, I lead backend development for a hospital record platform adopted by over 500 users and the Osun State Government. I designed and implemented secure Django APIs for managing hospital and patient data, built JWT-based authentication with role-based access, and integrated MongoDB for optimized data retrieval. I also handled Paystack subscriptions and Cloudinary asset management, collaborating closely with frontend engineers to ensure seamless integration.",
  },

  {
    title: "Fullstack Developer",
    company: "Fowgate Corporation",
    date: "Feb 2024 - Present",
    duty: "I'm building a modular ERP system used by multiple Nigerian enterprises. I architected reusable database logic via a shared BaseDB class and designed flexible MongoDB schemas to support nested accounts, subscriptions, and notifications. I also integrated AI-driven document intelligence using RAG and designed Swagger-documented REST APIs for smooth collaboration with frontend teams.",
  },

  {
    title: "Software Lead (Intern)",
    company: "Smart Systems Research Lab",
    location: "Ado-Ekiti, Ekiti State",
    date: "Apr 2023 - Present",
    duty: "As part of an agile research team, I led the design and development of an internal intern management system for the lab. I built reusable React components, implemented local routing for a seamless UX, and wrote backend APIs using Flask for user and report workflows. I managed Git-based version control and coordinated sprint planning with other team leads.",
  },
  {
    title: "Frontend Developer (Intern)",
    company: "Kinplus Technologies",
    location: "Ado-Ekiti, Ekiti State",
    date: "Apr 2023 - April 2024",
    duty: "At Kinplus, I developed production-ready frontend components with a focus on responsiveness and accessibility. I collaborated with backend engineers to integrate RESTful APIs, debugged JavaScript logic and layout issues, and helped streamline frontend delivery workflows. The experience gave me hands-on exposure to agile processes, team velocity, and real-world client delivery standards.",
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
