import React from 'react';

export default function MobileTopbar({ isDark, toggleDarkMode, activePage, showPage }) {
  return (
    <div className="mobile-topbar" id="mobileTopbar">
      <button 
        className="mobile-back-btn" 
        id="mobileBackBtn" 
        onClick={() => showPage('home')} 
        style={{ visibility: activePage === 'home' ? 'hidden' : 'visible' }}
      >
        <i className="fas fa-chevron-left"></i> <span>Back</span>
      </button>
      <button className="mobile-theme-btn" id="mobileThemeBtn" title="Toggle dark mode" onClick={toggleDarkMode}>
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} id="mobile-icon-theme"></i>
      </button>
    </div>
  );
}
