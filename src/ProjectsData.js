import portfolioImg from "./assets/Projects screenshots/Portfolio website.png";
import ecommerceImg from "./assets/Projects screenshots/Semester 2 SPRINT 2.png";
import eventManagerImg from "./assets/Projects screenshots/Event Manager app.png";
import dogGalleryImg from "./assets/Projects screenshots/Semester 2 QAP 3.png";
import modestMosImg from "./assets/Projects screenshots/Semester 1 WEB SPRINT 1.png";
import insuranceImg from "./assets/Projects screenshots/Semester 1 PYTHON QAP4.png";
import menuAppImg from "./assets/Projects screenshots/Semester 1 PYTHON SPRINT 1.png";
import historyImg from "./assets/Projects screenshots/Semester 1 WEB QAP2.png";
import carWebsiteImg from "./assets/Projects screenshots/Semester 2 QAP1.png";
import passwordGenerator from "./assets/Projects screenshots/Password-generator.png";
import pharmacyManager from "./assets/Projects screenshots/Pharmacy Management system.png";
import gymManager from "./assets/Projects screenshots/Gym management system.png";
import mathQuiz from "./assets/Projects screenshots/Math Quiz App.png";
import gameGallery from "./assets/Projects screenshots/Video Game gallery.png";
import socketChat from "./assets/Projects screenshots/Socket Chat.webp";

const projectsData = [
  {
    id: 1,
    title: "Live Messaging Application",
    description: "A fully functional, real-time chat application.",
    technologies: [
      "Javascript",
      "Express JS",
      "MongoDB",
      "EJS templates",
      "WebSockets",
    ],
    image: socketChat,
    link: "https://github.com/Noah-Lambe/Messaging-App",
  },
  {
    id: 8,
    title: "E-Commerce Web Application",
    description:
      "A feature-rich e-commerce application built with React, offering product listing, product details, shopping cart, and a simulated checkout process. Utilizes a mock API for backend interactions, delivering a seamless development and testing experience.",
    technologies: [
      "React",
      "React Router",
      "JSON Server",
      "CSS Modules",
      "Vitest",
      "React Testing Library",
    ],
    image: ecommerceImg,
    link: "https://github.com/Noah-Lambe/Sprint_2",
  },
  {
    id: 2,
    title: "Event Manager",
    description:
      "A simple web app for managing daily tasks with features like adding, editing, and deleting tasks.",
    technologies: ["React", "Node.js", "CSS", "JSON"],
    image: eventManagerImg,
    link: "https://github.com/Noah-Lambe/Event_Manager",
  },
  {
    id: 3,
    title: "Dog Image Gallery App",
    description:
      "A Dog image fetching app that uses Dog CEO API to fetch images of selected dog breeds.",
    technologies: ["React", "CSS", "JavaScript", "API"],
    image: dogGalleryImg,
    link: "https://github.com/Noah-Lambe/Noah_Lambe_QAP3",
  },
  {
    id: 14,
    title: "Video Game Library",
    description:
      "An Express-based application that allows users to explore a collection of video games.",
    technologies: ["Javascript", "Express JS"],
    image: gameGallery,
    link: "https://github.com/Noah-Lambe/Video-Game-Gallery-Website",
  },
  {
    id: 4,
    title: "Modest Mo's Computers",
    description:
      "A mock e-commerce webpage designed for purchasing computer parts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: modestMosImg,
    link: "https://github.com/Noah-Lambe/NoahW_JonathanS_NoahL_Sprint1",
  },
  {
    id: 5,
    title: "Insurance Policy Management Program",
    description:
      "A Python program designed for an insurance company to calculate and manage customer policy details, premiums, taxes, and payment options. Includes functions, data validation, and receipt generation with support for multiple claims and payment plans.",
    technologies: ["Python", "Functions", "Lists", "File Handling"],
    image: insuranceImg,
    link: "https://github.com/Noah-Lambe/QAP-4-Python",
  },
  {
    id: 6,
    title: "Comprehensive Menu-Based Application",
    description:
      "A Python application compiling five mini-programs into a menu-driven system, covering employee travel claims, interview questions, string and date manipulations, equipment maintenance schedules, and exploring new Python features. Includes well-structured functions, validations, and visually appealing input/output formatting.",
    technologies: ["Python", "Menu Systems", "Functions", "Date Handling"],
    image: menuAppImg,
    link: "https://github.com/Noah-Lambe/Group-20-Sprint-1---Python-",
  },
  {
    id: 7,
    title: "History of Computers Webpage",
    description:
      "An informational website exploring the evolution of computers, featuring key historical milestones, significant figures, and groundbreaking innovations.",
    technologies: ["HTML", "CSS"],
    image: historyImg,
    link: "https://github.com/Noah-Lambe/QAP-2-Web-Dev",
  },
  {
    id: 9,
    title: "Automobile Educational Website",
    description:
      "A multimedia educational website that explores the history and details of a selected car brand. Includes text content, open-licensed images, videos, and audio resources, with a focus on semantic HTML5 elements, responsive design using CSS or Bootstrap, and accessibility.",
    technologies: ["HTML", "CSS", "Flexbox", "Multimedia Integration"],
    image: carWebsiteImg,
    link: "https://github.com/Noah-Lambe/QAP-2-Web-Dev",
  },
  {
    id: 10,
    title: "CLI Password Generator",
    description:
      "A Node.js program to generate secure, random passwords based on user-specified options.",
    technologies: ["Javascript", "CLI"],
    image: passwordGenerator,
    link: "https://github.com/Noah-Lambe/Password-generator",
  },
  {
    id: 11,
    title: "Pharmacy Management System",
    description:
      "This program helps track patients, doctors, medications, prescriptions, and generate reports related to the pharmacy system. The application is console-based and allows the user to interact with the system by selecting various options from the menu.",
    technologies: ["Java", "CLI"],
    image: pharmacyManager,
    link: "https://github.com/Noah-Lambe/Semester_3_Sprint_1_Java/tree/main/Semester_3_Sprint_1_Java/src",
  },
  {
    id: 12,
    title: "Gym Management System",
    description:
      "This application is a tool designed to help gyms manage their customers, staff, and offered services. The functionality varies depending on the user's role.",
    technologies: ["Java", "SQL"],
    image: gymManager,
    link: "https://github.com/Noah-Lambe/Gym_Management_System",
  },
  {
    id: 13,
    title: "Math Quiz App",
    description:
      "A simple web application where users can practice solving math questions, track their streak of correct answers.",
    technologies: ["Javascript", "Express JS"],
    image: mathQuiz,
    link: "https://github.com/Noah-Lambe/Math-Quiz-App",
  },
  {
    id: 15,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React to showcase my skills and projects.",
    technologies: ["React", "CSS", "JavaScript"],
    image: portfolioImg,
    link: "https://github.com/Noah-Lambe/Portfolio",
  },
];

export default projectsData;
