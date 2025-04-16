import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>Noah Lambe</h1>
      </Link>

      <nav className="nav-container">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
