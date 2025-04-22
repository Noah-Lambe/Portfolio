import React from 'react';
import '../Styles/About.css';

function About() {
  const skills = [
    "React.js, Server-Side Rendering (React)",
    "JavaScript",
    "HTML, CSS, Responsive Design",
    "State Management, UI/UX Principles",
    "Express.js, RESTful API Development",
    "MongoDB, Mongoose (NoSQL Databases)",
    "SQL & Relational Database Concepts",
    "Java, Object-Oriented Programming (OOP)",
    "Python, Command Line Interface",
    "Git, GitHub, Version Control",
    "Agile Development Practices",
    "Code Quality, Testing, and Maintainability",
    "Jest (Unit & Component Testing)",
    "AWS, Cloud-Native Development"
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="intro">
          Hi, I'm <span className="accent"><strong>Noah</strong></span>. I'm a full-stack developer with a strong front-end focus, passionate about building responsive, user-friendly web experiences. I specialize in React.js and JavaScript, but I also work comfortably across the stack with technologies like Express.js, MongoDB, REST APIs, and SQL. I enjoy turning design ideas into polished interfaces, while also handling backend logic, data flow, and deployment when needed. I'm experienced in Git-based workflows, Agile development, cloud-native projects with AWS, and writing maintainable, tested code with tools like Jest. I bring creativity, precision, and a user-first mindset to every project I build.
        </p>
        
        <div className="skills">
          <h3>My Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} style={{ '--delay': index }}>{skill}</li>
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
