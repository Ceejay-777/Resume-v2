import cardDetails1 from "./assets/Project_images/card_details/01.jpg";
import cardDetails2 from "./assets/Project_images/card_details/02.jpg";
import cardDetails3 from "./assets/Project_images/card_details/03.jpg";

import horizon1 from "./assets/Project_images/horizon/horizon1.JPG"
import horizon2 from "./assets/Project_images/horizon/horizon2.JPG"
import horizon3 from "./assets/Project_images/horizon/horizon3.JPG"
import horizon4 from "./assets/Project_images/horizon/horizon4.JPG"

import faqAccordion1 from "./assets/Project_images/faq_accordion/shot1.PNG"
import faqAccordion2 from "./assets/Project_images/faq_accordion/shot2.PNG"
import faqAccordion3 from "./assets/Project_images/faq_accordion/shot3.PNG"
import faqAccordion4 from "./assets/Project_images/faq_accordion/mobile_view.PNG"


export const projects = [
    {
        id: 1,
        name: "Horizon landing page",
        images: [horizon1, horizon2, horizon3, horizon4],
        info: "Horizon is a fictional mobile device company. The horizon landing page showcases their latest product (The Horizine Note 3.0) and all it's cool specs. I learnt a lot about CSS flexbox and CSS grid while building this project.",
        skills: ["HTML", "CSS", "JavaScript", "Git"],
    },
    {
        id: 2,
        name: "Interactive card details form",
        images: [cardDetails1, cardDetails2, cardDetails3],
        info: "An interactive card details form page built with HTML, CSS and Javascript. It uses JQuery for DOM traversing and JQueryFormValidation to validate the form. In this project, I learnt a lot about using the JQuery library.",
        skills: ["HTML", "CSS", "JavaScript", "JQuery", "Git"]
    },
    {
        id: 3,
        name: "FAQ accordion component",
        images: [faqAccordion1, faqAccordion2, faqAccordion3, faqAccordion4],
        info: "An accordion component built with HTML, CSS, Javacript and JQuery. In this project, I was able to practice a lot with the Javascript language and JQuery and I learnt a lot about the Document Object Model (DOM) and it's manipulation.",
        skills: ["HTML", "CSS", "JavaScript", "JQuery"],
    },
    {
        id: 4,
        name: "third",
        images: [cardDetails1, cardDetails2, cardDetails3],
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates expedita voluptas iure omnis rerum facilis, cupiditate error itaque necessitatibus iusto accusantium at recusandae quisquam amet reprehenderit quasi, placeat sint.",
        skills: ["HTML", "CSS", "JavaScript", "JQuery"],
    },
];
