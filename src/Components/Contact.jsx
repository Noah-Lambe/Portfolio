import React from 'react';
import '../Styles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          Have a question or want to work together? Feel free to reach out! I'm excited to hear from you.
        </p>
        
        <form className="contact-form" action="https://formsubmit.co/noahalambe@gmail.com" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        
        <div className="social-links">
          <p>Or connect with me through:</p>
          <a href="https://github.com/Noah-Lambe" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icon" />GitHub</a>
          <a href="https://www.linkedin.com/in/noah-lambe/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" />LinkedIn</a>
          <a href="mailto:noahalambe@gmail.com"><FaEnvelope className="social-icon" />Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
