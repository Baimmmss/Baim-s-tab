import React from 'react';

export default function Work({ isActive }) {
  return (
    <section className={`page-content ${isActive ? 'active' : ''}`} id="page-work">
      <div className="page-inner">
        <div className="page-header">
          <h1>My Work</h1>
          <div className="page-header-line"></div>
        </div>

        <div className="work-notice">
          <i className="fas fa-star"></i>
          <div>
            <strong>Open to collaborate!</strong><br/>
            Doing web development, UI/UX design, and creative coding. :)
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-col">
            <h3 className="section-title">Tools</h3>
            <div className="tag-list">
              <span className="tag">VS Code</span>
              <span className="tag">Figma</span>
              <span className="tag">Git</span>
            </div>
          </div>
          <div className="skills-col">
            <h3 className="section-title">Development</h3>
            <div className="tag-list">
              <span className="tag">JavaScript</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">Python</span>
              <span className="tag">Lua</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <h3 className="section-title">Projects</h3>

        <div className="project-card-new">
          <div className="project-thumb" style={{background: 'linear-gradient(135deg,#c4b5fd,#818cf8)'}}>
            <span style={{fontSize: '3rem'}}>🌐</span>
          </div>
          <div className="project-details">
            <h3>Personal Website</h3>
            <p>view this website template! a desktop-themed personal portfolio built from scratch with vanilla HTML, CSS, and JavaScript.</p>
            <a href="#" className="project-link">view source →</a>
          </div>
        </div>

        <div className="project-card-new">
          <div className="project-thumb" style={{background: 'linear-gradient(135deg,#6ee7b7,#34d399)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{width: '3rem', height: '3rem'}}>
              <path d="M5.441 0L0 19.349L18.559 24L24 4.651L5.441 0zM10.741 8.529L14.73 9.47L13.789 13.458L9.8 12.518L10.741 8.529z"/>
            </svg>
          </div>
          <div className="project-details">
            <h3>Game Scripts</h3>
            <p>various lua scripts and game modifications created for learning and fun. exploring game mechanics and scripting engines.</p>
            <a href="https://github.com/Baimmmss/RBXscripts" className="project-link" target="_blank" rel="noreferrer">check it out →</a>
          </div>
        </div>

        <div className="divider"></div>

        <p className="more-projects"><strong>Other projects:</strong></p>
        <ul className="about-list">
          <li>IoT Web Dashboard</li>
          <li>more coming soon... stay tuned! :)</li>
        </ul>
        <p className="github-link">See more on <a href="https://github.com/Baimmmss" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </section>
  );
}
