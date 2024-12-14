import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Projects from './Components/Projects';
import About from './Components/About';
import Home from './Components/Home';
import './Styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      {/* Apply dark mode class to the main wrapper */}
      <div className={darkMode ? 'app dark' : 'app'}>
        {/* Pass dark mode toggle to Header */}
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        {/* Main content with Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
