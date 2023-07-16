import facebook from './assets/Icons/facebook.svg'

import card1 from "./assets/Project_images/card_details/01.jpg"

import card2 from "./assets/Project_images/card_details/02.jpg"

import card3 from "./assets/Project_images/card_details/03.jpg"

export const navLinks = ["Home", "About", "Projects", "Contact"]

export const socialLinks = [
    {account: "LinkedIn", icon: facebook},
    {account: "Facebook", icon: facebook},
    {account: "Twitter", icon: facebook},
    {account: "Whatsapp", icon: facebook},
    {account: "Github", icon: facebook}
]

export const experiences = [
    {
        nameTag: "BrainBench",
        title: "Backend Junior Developer(ML), Intern",
        company: 'Brainbench Academy',
        location: "Ado-Ekiti, Ekiti State",
        date: "April 2022 - September 2022",
        duties : [
            'one',
            'two',
            'three',
            'four'
        ]
    },

    {
        nameTag: "Kinplus",
        title: "Frontend Web developer, Intern",
        company: 'Kinplus Technologies ',
        location: "Ado-Ekiti, Ekiti State",
        date: "April 2023 - Present",
        duties : [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six'
        ]
    }
]

export const skillset = [
    {
        skill: "Python",
        rating: 80
    },
    {
        skill: "HTML",
        rating: 90
    },
    {
        skill: "CSS",
        rating: 80
    },
    {
        skill: "JavaScript",
        rating: 85
    },
    {
        skill: "React",
        rating: 70
    },
    {
        skill: "Tailwind CSS",
        rating: 30
    },
]

export const projects = [ 
    {
        id: 1,
        name: 'first',
        images: [
            {img1 : card1,
            img2 : card2,
            img3 : card3},
        ],
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates expedita voluptas iure omnis rerum facilis, cupiditate error itaque necessitatibus iusto accusantium at recusandae quisquam amet reprehenderit quasi, placeat sint.'
    },
    {
        id: 2,
        name: 'second',
        images: [
            {img1 : card1,
            img2 : card2,
            img3 : card3},
        ],
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates expedita voluptas iure omnis rerum facilis, cupiditate error itaque necessitatibus iusto accusantium at recusandae quisquam amet reprehenderit quasi, placeat sint.'
    },
    {
        id: 3,
        name: 'third',
        images: [
            {img1 : card1,
            img2 : card2,
            img3 : card3},
        ],
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates expedita voluptas iure omnis rerum facilis, cupiditate error itaque necessitatibus iusto accusantium at recusandae quisquam amet reprehenderit quasi, placeat sint.'
    },
    {
        id: 3,
        name: 'third',
        images: [
            {img1 : card1,
            img2 : card2,
            img3 : card3},
        ],
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates expedita voluptas iure omnis rerum facilis, cupiditate error itaque necessitatibus iusto accusantium at recusandae quisquam amet reprehenderit quasi, placeat sint.'
    },

    
]