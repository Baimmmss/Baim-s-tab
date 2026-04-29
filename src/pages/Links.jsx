import React from 'react';

export default function Links({ isActive }) {
  return (
    <section className={`page-content ${isActive ? 'active' : ''}`} id="page-links">
      <div className="page-inner">
        <div className="page-header">
          <h1>Links</h1>
          <div className="page-header-line"></div>
        </div>
        <p className="links-subtitle">Me on the internet?<br/>Go find me on...</p>
        <div className="links-grid-new">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="link-card-new">
            <div className="link-icon-new"><i className="fab fa-linkedin-in"></i></div>
            <span>LinkedIn</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="link-card-new">
            <div className="link-icon-new"><i className="fab fa-instagram"></i></div>
            <span>Instagram</span>
          </a>
          <a href="https://github.com/Baimmmss" target="_blank" rel="noopener noreferrer" className="link-card-new">
            <div className="link-icon-new"><i className="fab fa-github"></i></div>
            <span>GitHub</span>
          </a>
          <a href="mailto:ibrahimibniwan@gmail.com" className="link-card-new">
            <div className="link-icon-new"><i className="fas fa-envelope"></i></div>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
