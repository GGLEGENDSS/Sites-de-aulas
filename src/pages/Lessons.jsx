import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import './Lessons.css';

const tracks = [
  { id: 'javascript', title: 'JavaScript Básico', lessons: 200, level: 'Fundamentos → Expert', type: 'javascript' },
  { id: 'python', title: 'Python Essentials', lessons: 200, level: 'Automação → Expert', type: 'python' },
  { id: 'lua', title: 'Roblox Masterclass', lessons: 200, level: 'Game Dev → Expert', type: 'roblox' },
  { id: 'cpp', title: 'C++ Masterclass', lessons: 200, level: 'Sistemas → Expert', type: 'cpp' },
  { id: 'database', title: 'Banco de Dados', lessons: 100, level: 'Backend → Expert', type: 'database' },
];

const Lessons = () => {
  const navigate = useNavigate();

  return (
    <div className="lessons-page fadeIn">
      <header className="lessons-header">
        <h1>Suas Trilhas de Aprendizado</h1>
        <p>Você tem 1200 lições disponíveis para dominar a programação profissional.</p>
      </header>

      <div className="tracks-list">
        {tracks.map(track => (
          <div key={track.id} className="track-row glass" onClick={() => navigate(`/lesson/${track.type}-1`)}>
            <div className="track-main-info">
              <span style={{fontSize: '40px'}}>{['javascript', 'python', 'lua', 'cpp', 'database'].includes(track.type) ? ['📝', '🐍', '🎮', '⚙️', '🗄️'][['javascript', 'python', 'lua', 'cpp', 'database'].indexOf(track.type)] : '📚'}</span>
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
