import React from 'react';

export default function Contact({ isActive, showToast }) {
  const copyEmail = () => {
    navigator.clipboard.writeText('ibrahimibniwan@gmail.com').then(() => {
      showToast('Email copied!');
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = 'ibrahimibniwan@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Email copied!');
    });
  };

  return (
    <section className={`page-content ${isActive ? 'active' : ''}`} id="page-contact">
      <div className="page-inner page-inner-center">
        <div className="contact-hero">
          <div className="contact-emoji">📬</div>
          <h1>let's chat!</h1>
          <p>the easiest way to reach me is through email!<br/>i don't always check social media messages, so email works best 👍</p>
          <div className="contact-email-box">
            <span className="contact-email" onClick={copyEmail}>ibrahimibniwan@gmail.com</span>
            <button className="copy-btn" onClick={copyEmail} title="Copy email">
              <i className="fas fa-copy"></i>
            </button>
          </div>
          <a href="mailto:ibrahimibniwan@gmail.com" className="btn-primary">
            <i className="fas fa-paper-plane"></i> send me an email!
          </a>

          {/* Social Profiles for Mobile Contact Section */}
          <div className="mobile-socials hidden-desktop">
            <p>or find me on:</p>
            <div className="socials-row">
              <a href="https://github.com/Baimmmss" target="_blank" rel="noreferrer" className="social-btn"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-btn"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
