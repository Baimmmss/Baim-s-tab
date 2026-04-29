import React from 'react';

export default function About({ isActive }) {
  return (
    <section className={`page-content ${isActive ? 'active' : ''}`} id="page-about">
      <div className="page-inner">
        <div className="page-header">
          <h1>About Me</h1>
          <div className="page-header-line"></div>
        </div>
        <div className="about-intro">
          <div className="about-emoji">
            <img src="/ppp.jpeg" alt="About Profile" className="about-jpeg" />
          </div>
          <div>
            <h2>Ibrahim</h2>
            <p className="about-tagline">ID-Based Developer, and Designer Student </p>
          </div>
        </div>
        <div className="tag-list">
          <span className="tag">HTML/CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Lua</span>
          <span className="tag">Python</span>
          <span className="tag">UI/UX</span>
          <span className="tag">IoT</span>
        </div>
        <p className="about-desc">I'm a student who likes to code. I...</p>

        <ul className="about-list">
          <li>do <strong>frontend web development</strong>,</li>
          <li>create <strong>IoT things</strong>, and</li>
          <li>explore <strong>New things</strong>!</li>
        </ul>
        <p className="about-cta">interested? DM me! :)</p>

        <div className="about-section">
          <h3 className="section-title">Education</h3>
          <div className="section-indent">
            <p>SMP IDN Boarding School</p>
            <span className="muted">(currently)</span>
          </div>
          <div className="section-indent">
            <p>SD Ibnu Katsir Berau</p>
            <span className="muted">(2018-2024)</span>
          </div>
        </div>

        <div className="about-section">
          <h3 className="section-title">Other Interests</h3>
          <ul className="about-list">
            <li>game development</li>
            <li>open source projects</li>
            <li>learning new technologies</li>
            <li>cybersecurity</li>
            <li>engineering</li>
          </ul>
        </div>

        <div className="about-section">
          <h3 className="section-title">Languages</h3>
          <div className="section-indent">
            <p>fluent in <span className="hl">Indonesian</span></p>
            <p>can speak <span className="hl">English</span></p>
          </div>
        </div>

        <div className="about-section">
          <h3 className="section-title">Achievement</h3>
          <div className="section-indent">
            <p>First place in the <span className="hl">MYRC 2025</span></p>
            <p>First place in the <span className="hl">Scratch Coding competition, TECNO 2024 </span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
