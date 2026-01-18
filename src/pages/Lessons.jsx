import { useNavigate } from 'react-router-dom';
import TechIcon from '../components/TechIcon';
import { ChevronRight, Star } from 'lucide-react';
import './Lessons.css';

const tracks = [
  { id: 'javascript', title: 'JavaScript Básico', lessons: 100, level: 'Fundamentos', type: 'javascript' },
  { id: 'python', title: 'Python Essentials', lessons: 100, level: 'Automação', type: 'python' },
  { id: 'lua', title: 'Roblox Masterclass', lessons: 100, level: 'Game Dev', type: 'roblox' },
  { id: 'cpp', title: 'C++ Masterclass', lessons: 100, level: 'Sistemas', type: 'cpp' },
  { id: 'database', title: 'Banco de Dados', lessons: 50, level: 'Backend', type: 'database' },
];

const Lessons = () => {
  const navigate = useNavigate();

  return (
    <div className="lessons-page fadeIn">
      <header className="lessons-header">
        <h1>Suas Trilhas de Aprendizado</h1>
        <p>Você tem 500 lições disponíveis para dominar a programação.</p>
      </header>

      <div className="tracks-list">
        {tracks.map(track => (
          <div key={track.id} className="track-row glass" onClick={() => navigate(`/lesson/${track.type}-1`)}>
            <div className="track-main-info">
              <TechIcon type={track.type} size={40} />
              <div className="track-text">
                <h3>{track.title}</h3>
                <span className="track-tag">{track.level}</span>
              </div>
            </div>
            <div className="track-stats">
              <div className="progress-mini">
                <Star size={14} fill="var(--primary)" color="var(--primary)" />
                <span>{track.lessons} Lições</span>
              </div>
              <ChevronRight size={24} color="var(--text-muted)" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
