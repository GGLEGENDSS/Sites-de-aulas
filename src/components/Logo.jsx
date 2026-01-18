import { Terminal } from 'lucide-react';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-glow"></div>
      <div className="logo-icon-wrapper">
        <Terminal size={32} className="logo-icon" />
      </div>
      <div className="logo-text">
        <span className="brand-code">Code</span>
        <span className="brand-academy">Academy</span>
        <div className="brand-badge">Renovador</div>
      </div>
    </div>
  );
};

export default Logo;
