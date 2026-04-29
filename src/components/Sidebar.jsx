import React from 'react';

export default function Sidebar({ isDark, toggleDarkMode, activePage, showPage }) {
  return (
    <aside className="sidebar" id="sidebar">
      {/* Avatar */}
      <div className="sidebar-avatar">
        <div className="avatar-circle">
          <img src="/Profile.jpeg" alt="Profile Placeholder" className="avatar-jpeg" />
        </div>
      </div>

      {/* User Info */}
      <div className="sidebar-info">
        <div className="sidebar-name">Ibrahim</div>
        <div className="sidebar-role">Student</div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {[
          { id: 'home', icon: 'fa-home', label: 'Home' },
          { id: 'about', icon: 'fa-user', label: 'Info' },
          { id: 'work', icon: 'fa-briefcase', label: 'Work' },
          { id: 'links', icon: 'fa-link', label: 'Links' },
        ].map(nav => (
          <button 
            key={nav.id}
            className={`sidebar-nav-btn ${activePage === nav.id ? 'active' : ''}`} 
            onClick={() => showPage(nav.id)}
          >
            <i className={`fas ${nav.icon}`}></i>
            <span>{nav.label}</span>
          </button>
        ))}
      </nav>

      {/* Social Profiles (Desktop Only) */}
      <div className="sidebar-socials desktop-only">
        <a href="https://github.com/Baimmmss" target="_blank" rel="noreferrer" className="sidebar-social-btn"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="sidebar-social-btn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="sidebar-social-btn"><i className="fab fa-instagram"></i></a>
        <a href="mailto:ibrahimibniwan@gmail.com" target="_blank" rel="noreferrer" className="sidebar-social-btn"><i className="fas fa-envelope"></i></a>
      </div>

      {/* Bottom controls */}
      <div className="sidebar-bottom">
        <button className="sidebar-icon-btn" id="darkModeToggle" title="Toggle dark mode" onClick={toggleDarkMode}>
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} id="icon-theme"></i>
        </button>
        <div className="sidebar-copyright">© 2025 Baim</div>
      </div>
    </aside>
  );
}
