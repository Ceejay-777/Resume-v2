import github from "./assets/Icons/github.svg";
import whatsapp from "./assets/Icons/whatsapp.svg";
import gmail from "./assets/Icons/gmail.svg";
import twitter from "./assets/Icons/twitter.svg";
import linkedin from "./assets/Icons/linkedin2.svg";

export const navLinks = ["Home", "About", "Projects", "Contact"];

export const socialLinks = [
  {
    account: "Email",
    icon: gmail,
    ref: "mailto: covenantcrackslord01@gmail.com",
  },
  {
    account: "LinkedIn",
    icon: linkedin,
    ref: "https://www.linkedin.com/in/covenant-joshua-5080aa228",
  },
  { account: "Github", icon: github, ref: "https://github.com/Ceejay-777" },
  {
    account: "WhatsApp",
    icon: whatsapp,
    ref: "https://wa.me/2349069189724",
  },
  { account: "Twitter", icon: twitter, ref: "https://twitter.com/Cee_Jay_777" },
];

export const experiences = [
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

  {
    nameTag: "Kinplus",
    title: "Frontend Web developer, Intern",
    company: "Kinplus Technologies ",
    location: "Ado-Ekiti, Ekiti State",
    date: "April 2023 - Present",
    duties: [
      "Understand the basics of HTML, CSS and JavaScript.",
      "Develop and maintain responsive web pages using said technologies.",
      "Collaborate with designers and back-end developers to implement user interfaces. This involves working closely with designers to understand their vision and then collaborating with the backend team to implement said vision correctly ",
      "Test and debug code to ensure optimal performance",
    ],
  },
];

export const skillset = [
  {
    skill: "Python",
    rating: 80,
  },
  {
    skill: "HTML",
    rating: 90,
  },
  {
    skill: "CSS",
    rating: 80,
  },
  {
    skill: "JavaScript",
    rating: 85,
  },
  {
    skill: "ReactJS",
    rating: 70,
  },
  {
    skill: "Tailwind CSS",
    rating: 30,
  },
  {
    skill: "JQuery",
    rating: 80,
  },
];
