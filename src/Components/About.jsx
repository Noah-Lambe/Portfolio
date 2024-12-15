import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="intro">
          Hi, I'm <span className='accent'><strong>Noah</strong></span>. I’m a motivated and creative individual with a passion for problem-solving and innovation. With strong technical expertise in front-end development, I excel in building responsive and scalable web applications using React.js and JavaScript. My proficiency in HTML, CSS, and state management ensures I can create engaging and intuitive user interfaces, while my experience with AWS enables me to work on cloud-native solutions, including deployment and scaling. I follow Agile development practices, write clean and maintainable code, and utilize Git for effective version control. My adaptability and focus on delivering quality solutions make me an asset to any team or project.
        </p>

        <div className="skills">
          <h3>My Skills</h3>
          <ul className="skills-list">
            <li>React.js, Server-Side Rendering (React)</li>
            <li>JavaScript, TypeScript</li>
            <li>HTML, CSS, Responsive Design</li>
            <li>State Management, UI/UX Principles</li>
            <li>AWS, Cloud-Native Development</li>
            <li>Git, GitHub, Version Control</li>
            <li>Agile Development Practices</li>
            <li>Code Quality, Testing, and Maintainability</li>
            <li>Python, Command line inteface</li>
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
