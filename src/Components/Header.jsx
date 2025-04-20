import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import SunIcon from '../assets/sun.svg';
import MoonIcon from '../assets/moon.svg';


function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      {/* Top row: logo + hamburger */}
      <div className="header-top">
        <Link to="/" className="logo">
          <h1>Noah Lambe</h1>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Collapsible nav */}
      <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider">
          <img src={SunIcon} alt="Light mode" className="icon sun" />
          <img src={MoonIcon} alt="Dark mode" className="icon moon" />
          </span>
        </label>


      </nav>
    </header>
  );
}

export default Header;
