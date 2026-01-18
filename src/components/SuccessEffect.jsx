import { useEffect, useState } from 'react';
import './SuccessEffect.css';

const SuccessEffect = ({ active }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      const newParticles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        delay: Math.random() * 2 + 's',
        color: ['#58cc02', '#ffd700', '#00599C', '#3776ab'][Math.floor(Math.random() * 4)]
      }));
      setParticles(newParticles);
      
      const timer = setTimeout(() => setParticles([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="success-overlay">
      {particles.map(p => (
        <div 
          key={p.id} 
          className="particle" 
          style={{ 
            left: p.left, 
            top: p.top, 
            backgroundColor: p.color,
            animationDelay: p.delay 
          }} 
        />
      ))}
      <div className="success-message-float">
        <h1>DESAFIO CONCLUÍDO!</h1>
        <p>+10 XP ADQUIRIDOS ⚡</p>
      </div>
    </div>
  );
};

export default SuccessEffect;
