import React from 'react';

export default function Home({ isActive, showPage }) {
  return (
    <section className={`page-content ${isActive ? 'active' : ''}`} id="page-home">
      <div className="page-inner">
        <div className="greeting-section">
          <div className="home-avatar hidden-desktop">
            <img src="/Profile.jpeg" alt="Baim Profile" />
          </div>
          <h1 className="greeting-title"><span className="highlight">Call me Baim</span></h1>
          <p className="greeting-sub">ID-Based developer, and designer Student</p>
        </div>
        <div className="home-cards">
          <div className="home-card" onClick={() => showPage('about')}>
            <div className="home-card-icon"><i className="fas fa-user"></i></div>
            <h3>About Me?</h3>
            <p>learn more about who i am</p>
          </div>
          <div className="home-card" onClick={() => showPage('work')}>
            <div className="home-card-icon"><i className="fas fa-code"></i></div>
            <h3>My Work</h3>
            <p>projects and skills</p>
          </div>
          <div className="home-card" onClick={() => showPage('links')}>
            <div className="home-card-icon"><i className="fas fa-globe"></i></div>
            <h3>Links</h3>
            <p>find me on the internet</p>
          </div>
          <div className="home-card" onClick={() => {
            if (window.innerWidth <= 900) {
              showPage('contact');
            } else {
              window.location.href = 'mailto:ibrahimibniwan@gmail.com';
            }
          }}>
            <div className="home-card-icon"><i className="fas fa-paper-plane"></i></div>
            <h3>Contact</h3>
            <p>let's chat!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
