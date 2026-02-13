import github from "./assets/Icons/github.svg";
import gmail from "./assets/Icons/mail.svg";
import Xlogo from "./assets/Icons/Xlogo.svg";
import linkedin from "./assets/Icons/linkedin.svg";
import phone from "./assets/Icons/phone.svg";

import learnexo from "./assets/Project_images/learnexo.png";
import docuhealth from "./assets/Project_images/docuhealth.png";
import ssrllabapp from "./assets/Project_images/ssrllabapp.png";
import hackathon from "./assets/Project_images/hackathon.png";
import fowgate from "./assets/Project_images/fowgate.png";

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
    name: "DocuHealth Pharmacy API",
    stack: "Lead Backend Engineer",
    image: docuhealth,
    info: "Architected a secure medical infrastructure featuring Role-Based Access Control (RBAC) for hospital admins and patients. Implemented E2E data encryption and Paystack integration with idempotent webhooks to ensure transaction integrity for 500+ users.",
    skills: ["Django DRF", "PostgreSQL", "RBAC", "Paystack", "E2E Encryption"],
    link: "https://www.docuhealthservices.com",
  },
  {
    id: 2,
    name: "Splitpay",
    stack: "Team Lead",
    image: hackathon,
    info: "Led a team of 3 to 1st place at the Squad Hackathon. Developed a money management tool using the Squad API for virtual account generation and real-time transaction monitoring to ensure seamless financial discipline.",
    skills: ["Next.js", "Node.js", "TypeScript", "Squad API"],
    link: "https://tribuneonlineng.com/how-we-built-solution-that-improves-financial-inclusion-makes-budgeting-easier-winners-of-habaripays-squad-hackathon-contest/",
  },
  {
    id: 3,
    name: "Fowgate Multi-Sector ERP",
    stack: "Lead Backend Developer",
    status: "In Development",
    image: fowgate, 
    info: "Building the core engine for a multi-sector ERP using Flask and MongoDB. Architected a RAG-based AI system for legal document querying and developed custom OAuth2 flows for automated Google/Zoom scheduling with persistent credential management.",
    skills: [
      "Flask",
      "MongoDB",
      "Gemini Flash 2.0",
      "Pinecone",
      "OAuth2",
      "RESTful API",
    ],
    link: false,
  },
  {
    id: 4,
    name: "SSRL Lab Management",
    stack: "Software Team Lead",
    image: ssrllabapp,
    info: "Directing a team of interns at the Smart Systems Research Laboratory to build internal research tools. Focused on transforming complex research requirements into maintainable React patterns and polished UIs.",
    skills: ["React", "TypeScript", "Custom Hooks", "Component Atomicity"],
    link: false,
  },
  // {
  //   id: 5,
  //   name: "Futaverse",
  //   stack: "Lead Backend Engineer",
  //   image: futaverse_image, // Note: High-impact project from CV
  //   info: "Engineered a comprehensive ticketing system for alumni events. Implemented multi-tier Paystack integration, automated invoicing, and secured the platform using Sqids (ID Masking) to prevent ticket scraping.",
  //   skills: ["Python", "Django DRF", "Supabase", "Celery", "Sqids"],
  //   link: "https://futaverse.example.com",
  // },
  {
    id: 6,
    name: "LearNexo",
    stack: "Fullstack Developer",
    image: learnexo,
    info: "Built a personalized Edutech platform focused on distraction-free learning environments. Engineered complex multi-step onboarding workflows using React Hook Form and Zod for rigorous validation.",
    skills: ["React", "TypeScript", "Zod", "Tanstack Query"],
    link: false,
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
      { icon: Xlogo, ref: "https://x.com/daCodeFada", account: "X" },
    ],
  },
];

export const experiences = [
  {
    title: "Lead Backend Developer",
    company: "Fowgate LLC",
    location: "Remote",
    date: "Feb 2025 — Present",
    highlights: [
      "Solely architected a modular, microservices-ready backend for a multi-sector ERP using Flask and MongoDB[cite: 19].",
      "Engineered a RAG-based AI assistant using Gemini Flash 2.0 and Pinecone for semantic querying of legal documents like the PIA.",
      "Developed complex OAuth2 flows for Google and Zoom with custom token refresh logic and persistent credential management[cite: 21].",
      "Directing a team of 4 engineers, enforcing GitFlow, design guides, and comprehensive Swagger documentation.",
    ],
  },
  {
    title: "Lead Backend Developer",
    company: "DocuHealth Services",
    location: "Remote",
    date: "Dec 2024 — Present",
    highlights: [
      "Designed and implemented secure RESTful APIs using Django DRF with End-to-End data encryption for 500+ users[cite: 25, 26].",
      "Engineered Role-Based Access Control (RBAC) for Hospital Admins, Staff, and Patients[cite: 27].",
      "Integrated Paystack for subscription management with idempotent webhooks to ensure transaction integrity[cite: 28].",
      "Optimized PostgreSQL database performance through efficient indexing and atomic transaction management[cite: 29].",
    ],
  },
  {
    title: "Software Team Lead",
    company: "Smart Systems Research Laboratory",
    location: "FUTA",
    date: "Apr 2024 — Present",
    highlights: [
      "Directing a team of interns in building internal tools, specializing in transforming research requirements into polished UIs[cite: 39].",
      "Mentoring junior developers on frontend best practices, component atomicity, and custom hook patterns[cite: 40].",
      "Managed the transition of legacy UI modules to modern React patterns for better scalability[cite: 41].",
    ],
  },
  {
    title: "Frontend Intern",
    company: "Kinplus Technologies",
    location: "Ekiti, Nigeria",
    date: "Apr 2023 — July 2023",
    highlights: [
      "Delivered production-ready UI components with a focus on cross-browser compatibility and accessibility[cite: 46].",
      "Collaborated with backend engineers to integrate RESTful workflows and resolved complex layout issues[cite: 47].",
    ],
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
