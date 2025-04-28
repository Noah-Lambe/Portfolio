import React from 'react';
import '../Styles/About.css';

import gitLogo from '../assets/Logos/Git.png';
import htmlCssLogo from '../assets/Logos/HTML+CSS.png';
import javaLogo from '../assets/Logos/Java.png';
import javascriptLogo from '../assets/Logos/JavaScript.png';
import mongoLogo from '../assets/Logos/Mongo.webp';
import nodeExpressLogo from '../assets/Logos/Node+Express.png';
import pythonLogo from '../assets/Logos/Python.webp';
import reactLogo from '../assets/Logos/React.png';
import sqlLogo from '../assets/Logos/SQL.png';


function About() {
  const languagesAndFrameworks = [
    { name: "JavaScript", logo: javascriptLogo },
    { name: "React.js (including SSR)", logo: reactLogo },
    { name: "HTML & CSS", logo: htmlCssLogo },
    { name: "Node.js & Express.js", logo: nodeExpressLogo },
    { name: "MongoDB & Mongoose", logo: mongoLogo },
    { name: "SQL (Relational Databases)", logo: sqlLogo },
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Git & GitHub", logo: gitLogo }
  ];

  const conceptsAndTechnicalSkills = [
    "Object-Oriented Programming (OOP)",
    "State Management & UI/UX Principles",
    "RESTful API Development",
    "Command Line Interface (CLI)",
    "Version Control with Git & GitHub",
    "Agile Development Practices",
    "Code Quality, Testing, and Maintainability",
    "Jest (Unit & Component Testing)",
    "AWS (Cloud-Native Development)",
    "Responsive Web Design",
    "Authentication & Authorization",
    "Database Design & Data Modeling",
    "API Integration & Data Fetching",
    "Continuous Learning & Problem-Solving"
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="intro">
          Hi, I'm <span className="accent"><strong>Noah</strong></span>. I'm a full-stack developer with a strong front-end focus, passionate about building responsive, user-friendly web experiences. I specialize in React.js and JavaScript, but I also work comfortably across the stack with technologies like Express.js, MongoDB, REST APIs, and SQL. I enjoy turning design ideas into polished interfaces, while also handling backend logic, data flow, and deployment when needed. I'm experienced in Git-based workflows, Agile development, cloud-native projects with AWS, and writing maintainable, tested code with tools like Jest. I bring creativity, precision, and a user-first mindset to every project I build.
        </p>

        <div className="skills">
        <h3>Languages, Frameworks, & Tools</h3>
          <ul className="skills-grid">
            {languagesAndFrameworks.map((skill, index) => (
              <li key={index} className="skill-card">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>

          <h3>Concepts & Technical Skills</h3>
          <ul className="skills-animated-list">
            {conceptsAndTechnicalSkills.map((skill, index) => (
              <li key={index} style={{ '--delay': index }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="personal-info">
          <h3>More About Me</h3>
          <p>
            Beyond my technical skills, I bring a collaborative and forward-thinking mindset to every team I work with. My background in theater, multimedia production, and competitive sports has instilled in me strong communication, leadership, and teamwork skills. I thrive in fast-paced environments where I can tackle challenges head-on while fostering a supportive and inclusive atmosphere. Whether building something from scratch or improving existing systems, I am dedicated to continuous growth and creating meaningful, impactful work.
            <br />
            <br />
            And I really appreciate dark mode.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
