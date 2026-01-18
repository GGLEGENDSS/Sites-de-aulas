import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-glow"></div>
      <div className="logo-icon-wrapper">
        <svg viewBox="0 0 100 100" className="revolutionary-logo-svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2ff" />
              <stop offset="100%" stopColor="#ff00ff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <circle cx="50" cy="50" r="45" stroke="url(#grad1)" strokeWidth="2" fill="none" className="ring-outer" />
          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          
          <g className="ring-inner">
             <path d="M25,50 L40,35 L40,65 Z" fill="#00f2ff" opacity="0.8" />
             <path d="M75,50 L60,35 L60,65 Z" fill="#ff00ff" opacity="0.8" />
             <circle cx="50" cy="50" r="8" fill="#fff" filter="url(#glow)" />
          </g>
          
          <path d="M30 50 L70 50" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" className="data-stream" />
        </svg>
      </div>
      <div className="logo-text">
        <span className="brand-code">CODE</span>
        <span className="brand-academy">REVOLUTION</span>
      </div>
    </div>
  );
};

export default Logo;
