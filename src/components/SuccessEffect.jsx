import { useMemo } from 'react';
import './SuccessEffect.css';

const PARTICLE_COLORS = ['#58cc02', '#ffd700', '#00599C', '#3776ab'];

const SuccessEffect = ({ active }) => {
  const particles = useMemo(() => {
    if (!active) return [];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${(i * 23) % 100}%`,
      top: `${(i * 47) % 100}%`,
      delay: `${(i % 10) * 0.2}s`,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length]
    }));
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
