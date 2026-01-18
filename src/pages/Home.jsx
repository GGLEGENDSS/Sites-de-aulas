import { useNavigate } from 'react-router-dom';
import { ChevronRight, Gamepad2, Trophy, Zap } from 'lucide-react';
import './Home.css';

const tracks = [
  {
    id: 'javascript',
    title: 'JavaScript Básico',
    description: 'Aprenda a linguagem que move a web, do zero ao primeiro script.',
    lessons: 12,
    icon: '📝',
    color: 'rgba(247, 223, 30, 0.1)',
    firstLesson: 'js-1'
  },
  {
    id: 'lua',
    title: 'Roblox Masterclass (Lua)',
    description: 'Domine a lógica por trás dos jogos de sucesso no Roblox.',
    lessons: 20,
    icon: '🎮',
    color: 'rgba(255, 255, 255, 0.1)',
    firstLesson: 'lua-roblox-1'
  },
  {
    id: 'python',
    title: 'Python Essentials',
    description: 'Automação, dados e scripts poderosos com a sintaxe mais amada.',
    lessons: 15,
    icon: '🐍',
    color: 'rgba(55, 118, 171, 0.1)',
    firstLesson: 'python-1'
  },
  {
    id: 'java',
    title: 'Java para Empresas',
    description: 'Aprenda a linguagem robusta usada por grandes corporações.',
    lessons: 10,
    icon: '☕',
    color: 'rgba(237, 29, 37, 0.1)',
    firstLesson: 'java-1'
  },
  {
    id: 'cpp',
    title: 'C++ Masterclass',
    description: 'Alta performance, sistemas e o coração da computação moderna.',
    lessons: 100,
    icon: '⚙️',
    color: 'rgba(0, 89, 156, 0.1)',
    firstLesson: 'cpp-1'
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleTrackClick = (track) => {
    navigate(`/lesson/${track.firstLesson}`);
  };

  return (
    <div className="home-container">
      <section className="welcome">
        <h1>O que vamos aprender hoje?</h1>
        <p>Escolha uma trilha e transforme seu conhecimento.</p>
      </section>

      <div className="quick-access">
        <div className="quick-btn" onClick={() => navigate('/games')}>
          <Gamepad2 size={24} />
          <div>
            <h4>Mini-Jogos</h4>
            <p>Treinar é se divertir</p>
          </div>
          <ChevronRight size={20} />
        </div>
        <div className="quick-btn" onClick={() => navigate('/ranking')}>
          <Trophy size={24} />
          <div>
            <h4>Ranking Global</h4>
            <p>Veja os melhores</p>
          </div>
          <ChevronRight size={20} />
        </div>
        <div className="quick-btn" onClick={() => navigate('/blitz')}>
          <Zap size={24} />
          <div>
            <h4>CodeBlitz</h4>
            <p>Desafios rápidos</p>
          </div>
          <ChevronRight size={20} />
        </div>
      </div>

      <div className="tracks-grid">
        {tracks.map((track) => (
          <div 
            key={track.id} 
            className="track-card glass"
            onClick={() => handleTrackClick(track)}
          >
            <div className="track-icon" style={{ background: track.color }}>
              {track.icon}
            </div>
            <div className="track-info">
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="track-footer">
                <span>{track.lessons} lições</span>
                <ChevronRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
