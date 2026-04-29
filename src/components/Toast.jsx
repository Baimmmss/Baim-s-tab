import React, { useEffect, useState } from 'react';

export default function Toast({ message, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // trigger animation in
    const timerIn = requestAnimationFrame(() => {
      setVisible(true);
    });
    
    // trigger animation out
    const timerOut = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose();
      }, 300); // Wait for transition
    }, 2000);

    return () => {
      cancelAnimationFrame(timerIn);
      clearTimeout(timerOut);
    };
  }, [onClose]);

  return (
    <div
      className="toast"
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '20px'})`,
        background: 'rgba(30, 32, 53, 0.95)',
        backdropFilter: 'blur(12px)',
        color: '#fff',
        padding: '10px 24px',
        borderRadius: '10px',
        fontSize: '13px',
        fontWeight: '500',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        zIndex: 10000,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      {message}
    </div>
  );
}
