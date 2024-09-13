import github from "./assets/Icons/github.svg";
import gmail from "./assets/Icons/mail.svg";
import Xlogo from "./assets/Icons/Xlogo.svg";
import linkedin from "./assets/Icons/linkedin.svg";
import phone from "./assets/Icons/phone.svg";
import javascript from "./assets/Icons/javascript.svg";
import html from "./assets/Icons/html.svg";
import css from "./assets/Icons/css.svg";
import react from "./assets/Icons/react.svg";
import nodejs from "./assets/Icons/nodejs.svg";
import nextjs from "./assets/Icons/nextjs.svg";
import figma from "./assets/Icons/figma.svg";
import flask from "./assets/Icons/flask.svg";
import git from "./assets/Icons/git.svg";
import python from "./assets/Icons/python.svg";
import bootstrap from "./assets/Icons/bootstrap.svg";
import tailwindCSS from "./assets/Icons/tailwindCSS.svg";
import cardDetails from "./assets/Project_images/carddetails_mockup.png";
import horizon from "./assets/Project_images/horizon_mockup.png";
import faqAccordion from "./assets/Project_images/faq_mockup.png";
import ratingCard from "./assets/Project_images/interactiverating_mockup.png";
import flipCard from "./assets/Project_images/cardflip_mockup.png";
import gridale from "./assets/Project_images/gridale_mockup.png";
import multistep from "./assets/Project_images/multistepform_mockup.png";
import pipeline from "./assets/Project_images/pipeline_mockup.png";
import portfolio from "./assets/Project_images/portfolio_mockup.png"
import rufus from "./assets/Project_images/rufus_mockup.png"
import rps from "./assets/Project_images/rps_mockup.png"

export const projects = [
  {
    id: 1,
    name: "My portfolio",
    image: portfolio,
    info: "A clean and modern personal portfolio showcasing my skills, projects, and experience, built using React and styled with responsive design to provide a seamless user experience across devices.",
    skills: ["ReactJS", "Tailwind", "CSS", "Git"],
    link: "https://resume-ceejay777.vercel.app",
  },
  {
    id: 9,
    name: "Gridale",
    image: gridale,
    info: "Gridale is a dynamic, visually appealing game created using React and styled with Tailwind CSS, offering players an engaging, modern user experience as they navigate through a grid-based challenge.",
    skills: ["ReactJS", "Tailwind", "JavaScript", "Git", "Redux"],
    link: "https://gridale.vercel.app",
  },
  {
    id: 9,
    name: "$RUFUS THE DOG",
    image: rufus,
    info: "An interactive and fun web page for the $RUFUS memecoin, designed with engaging visuals and smooth animations using React and tailwind. It brings a lighthearted approach to crypto.",
    skills: ["ReactJS", "Tailwind", "Git"],
    link: "https://rufus-beta.vercel.app/",
  },
  {
    id: 9,
    name: "Rock, Paper, Scissors",
    image: rps,
    info: "A visually appealing and responsive rock, paper, scissors game, developed using React and tailwind. It provides users with an intuitive and enjoyable experience while demonstrating frontend skills.",
    skills: ["ReactJS", "Tailwind", "Git"],
    link: "https://rockpaperscissors-dun.vercel.app",
  },
  {
    id: 3,
    name: "Multistep subscription card",
    image: multistep,
    info: "The multistep game subscription card is a feature that guides users through the process of selecting and subscribing to game services. It streamlines the subscription journey with clear steps and user-friendly navigation, making it easy for users to access and game services.",
    skills: ["ReactJS", "Tailwind", "JavaScript", "Git"],
    link: "https://multi-step-form-five-phi.vercel.app",
  },
  {
    id: 4,
    name: "Flip Card",
    image: flipCard,
    info: "A fun to watch ATM card that flips on mouse-hover, built with only HTML and CSS.",
    skills: ["HTML", "CSS"],
    link: "https://ceejay-777.github.io/Card-Flip",
  },
  {
    id: 5,
    name: "Interactive card details form",
    image: cardDetails,
    info: "An interactive card details form page built with HTML, CSS and Javascript. It uses JQuery for DOM traversing and JQueryFormValidation to validate the form. In this project, I learnt a lot about using the JQuery library.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery", "Git"],
    link: "https://ceejay-777.github.io/Card-Detail_Form",
  },
  {
    id: 2,
    name: "Pipeline",
    image: pipeline,
    info: "Pipeline is a fintech app I worked on with a collaborative team, offering budgeting tools, expense tracking, and real-time insights to simplify financial management for users.",
    skills: ["ReactJS", "Tailwind", "JavaScript", "Git"],
    link: "https://https://pipeline-beta.vercel.app",
  },
  {
    id: 6,
    name: "FAQ accordion component",
    image: faqAccordion,
    info: "An accordion component built with HTML, CSS, Javacript and JQuery. In this project, I was able to practice a lot with the Javascript language and JQuery and I learnt a lot about the Document Object Model (DOM) and it's manipulation.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery"],
    link: "https://ceejay-777.github.io/Faq-accordion-card",
  },
  {
    id: 7,
    name: "Horizon landing page",
    image: horizon,
    info: "Horizon is a fictional mobile device company. The horizon landing page showcases their latest product (The Horizine Note 3.0) and all it's cool specs. I learnt a lot about CSS flexbox and CSS grid while building this project.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    link: "https://ceejay-777.github.io/horizon",
  },
  {
    id: 8,
    name: "Rating card component",
    image: ratingCard,
    info: "A rating component card. A simple project from which I learnt a lot about CSS pseudo-elements and pseudo-classes.",
    skills: ["HTML", "CSS"],
    link: "https://ceejay-777.github.io/interactive-rating-component-card",
  },
];

export const projectsLength = projects.length


export const socialLinks = [
  {fullLinks : 
    [{
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
    }],

  iconLinks : [{
      icon: linkedin,
      ref: "https://www.linkedin.com/in/covenant-joshua-5080aa228",
      account: "linkedin",
    },
    { icon: github, ref: "https://github.com/Ceejay-777", account: "github" },
    { icon: Xlogo, ref: "https://twitter.com/Cee_Jay_777", account: "X" },
  ]
}];

export const experiences = [
  {
    nameTag: "Kinplus",
    title: "Frontend Web developer, Intern",
    company: "Kinplus Technologies ",
    location: "Ado-Ekiti, Ekiti State",
    date: "April 2023 - Present",
    duties: [
      "Understand the basics of HTML, CSS and JavaScript.",
      "Developed responsive and intuitive user interfaces using HTML, CSS, and JavaScript, integrating seamlessly with RESTful APIs to enhance website functionality and user experience. ",
      "Quickly adapted to new tech, showing proactive skill development while maintaining clean frontend code, focusing on detail and readability.",
      "Utilized modern frontend frameworks such as React.js to build dynamic and interactive user interfaces, expanding proficiency in frontend development technologies.",
    ],
  },

  {
    nameTag: "BrainBench",
    title: "Junior Backend Developer(ML), Intern",
    company: "Brainbench Academy",
    location: "Ado-Ekiti, Ekiti State",
    date: "April 2022 - September 2022",
    duties: [
      "Understand the basics of machine learning algorithms and models. This involves understanding how different algorithms work, what their strengths and weaknesses are, and how to choose the right algorithm for a particular problem.",
      "Help develop simple APIs using python.",
      "Train, test, and validate simple machine learning models. This includes using cross-validation to evaluate model performance, tuning parameters, and evaluating the impact of different features on model performance.",
      "Write code that is clean, well-documented, and easy to maintain.",
    ],
  },
];

export const skills = [
  { icon: nextjs, name: "NextJS" },
  { icon: react, name: "React" },
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: javascript, name: "Javascript" },
  { icon: nodejs, name: "NodeJS" },
  { icon: tailwindCSS, name: "Tailwindcss" },
  { icon: bootstrap, name: "Bootstrap" },
  { icon: python, name: "Python" },
  { icon: figma, name: "Figma" },
  { icon: flask, name: "Flask" },
  { icon: git, name: "Git" },
];
