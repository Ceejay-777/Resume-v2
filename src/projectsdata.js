import cardDetails1 from "./assets/Project_images/card_details/01.jpg";
import horizon1 from "./assets/Project_images/horizon/horizon1.JPG";
import faqAccordion1 from "./assets/Project_images/faq_accordion/shot1.jpg";
import ratingCard1 from "./assets/Project_images/rating_component_card/shot1.jpg";
import flipCard1 from "./assets/Project_images/flip_card/shot1.jpg";
import gridale from "./assets/Project_images/gridale/gridale.jpg";

export const projects = [
  {
    id: 1,
    name: "Gridale",
    image: gridale,
    info: "Gridale is a dynamic, visually appealing game created using React and styled with Tailwind CSS, offering players an engaging, modern user experience as they navigate through a grid-based challenge.",
    skills: ["ReactJS", "Tailwind", "JavaScript", "Git"],
    link: "https://gridale.vercel.app"
  },
  {
    id: 2,
    name: "Horizon landing page",
    image: horizon1,
    info: "Horizon is a fictional mobile device company. The horizon landing page showcases their latest product (The Horizine Note 3.0) and all it's cool specs. I learnt a lot about CSS flexbox and CSS grid while building this project.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    id: 3,
    name: "Interactive card details form",
    image: cardDetails1,
    info: "An interactive card details form page built with HTML, CSS and Javascript. It uses JQuery for DOM traversing and JQueryFormValidation to validate the form. In this project, I learnt a lot about using the JQuery library.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery", "Git"],
  },
  {
    id: 4,
    name: "FAQ accordion component",
    image: faqAccordion1,
    info: "An accordion component built with HTML, CSS, Javacript and JQuery. In this project, I was able to practice a lot with the Javascript language and JQuery and I learnt a lot about the Document Object Model (DOM) and it's manipulation.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery"],
  },
  {
    id: 5,
    name: "Flip Card",
    image: flipCard1,
    info: "A fun to watch ATM card that flips on mouse-hover, built with only HTML and CSS.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery"],
  },
  {
    id: 6,
    name: "Rating card component",
    image: ratingCard1,
    info: "A rating component card. A simple project from which I learnt a lot about CSS pseudo-elements and pseudo-classes.",
    skills: ["HTML", "CSS"],
  },
];
