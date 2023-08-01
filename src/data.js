import facebook from "./assets/Icons/facebook.svg";
import whatsapp from "./assets/Icons/whatsapp.svg";
import email from "./assets/Icons/email.svg";
import twitter from "./assets/Icons/twitter.svg";

export const navLinks = ["Home", "About", "Projects", "Contact"];

export const socialLinks = [
  { account: "Email", icon: email },
  { account: "LinkedIn", icon: facebook },
  { account: "Github", icon: facebook },
  { account: "WhatsApp", icon: whatsapp },
  { account: "Twitter", icon: twitter },
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
    duties: ["one", "two", "three", "four", "five", "six"],
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
