import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MobileTopbar from './components/MobileTopbar';
import Toast from './components/Toast';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Links from './pages/Links';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const pageMap = { '1': 'home', '2': 'about', '3': 'work', '4': 'links', '5': 'contact' };
      if (pageMap[e.key]) {
        setActivePage(pageMap[e.key]);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!e.target.closest('.page-content')) {
        e.preventDefault();
      }
    };
    document.body.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.body.removeEventListener('wheel', handleWheel);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="desktop-frame" id="desktopFrame">
      <div className="desktop-workspace">
        <MobileTopbar 
          isDark={isDark} 
          toggleDarkMode={toggleDarkMode} 
          activePage={activePage} 
          showPage={setActivePage} 
        />
        <Sidebar 
          isDark={isDark} 
          toggleDarkMode={toggleDarkMode} 
          activePage={activePage} 
          showPage={setActivePage} 
        />
        
        <main className="main-panel" id="mainPanel">
          <Home isActive={activePage === 'home'} showPage={setActivePage} />
          <About isActive={activePage === 'about'} />
          <Work isActive={activePage === 'work'} />
          <Links isActive={activePage === 'links'} />
          <Contact isActive={activePage === 'contact'} showToast={showToast} />
        </main>
      </div>

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </div>
  );
}

export default App;
