import React, { useState } from 'react';
import '../Styles/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Portfolio Website', type: 'Web' },
    { id: 2, title: 'Game App', type: 'App' },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter(project => project.type === filter);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="filters">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Web')}>Web</button>
        <button onClick={() => setFilter('App')}>App</button>
      </div>
      <div className="project-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>Type: {project.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
