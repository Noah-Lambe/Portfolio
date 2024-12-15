import React from 'react';
import '../Styles/Home.css';
import ProfilePhoto from '../assets/Profile-photo3.jpg';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="image-container">
          <img src={ProfilePhoto} alt="Noah Lambe" />
        </div>
        <div className="intro">
          <h1>Hi, I'm <span>Noah</span></h1>
          <p>
            A <strong>Front-End Developer</strong> Crafting Engaging Web Experiences
          </p>
          <a href="projects" className="cta-button">See my Work</a>
          <p className="subtext">
            Interested in collaborating? Feel free to reach out and let's build something great together.
          </p>
          <a href="contact" className="secondary-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
