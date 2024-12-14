import React from 'react';
import '../Styles/Header.css';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <a href="/"><h1>Noah Lambe</h1></a>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
