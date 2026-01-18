import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TechIcon from '../components/TechIcon';
import './Home.css';

const tracks = [
  {
    id: 'javascript',
    title: 'JavaScript Básico',
    description: 'Aprenda a linguagem que move a web, do zero ao primeiro script.',
    lessons: 12,
    icon: <TechIcon type="javascript" />,
    color: 'rgba(247, 223, 30, 0.1)',
    firstLesson: 'js-1'
  },
  {
    id: 'lua',
    title: 'Roblox Masterclass (Lua)',
    description: 'Domine a lógica por trás dos jogos de sucesso no Roblox.',
    lessons: 20,
    icon: <TechIcon type="roblox" />,
    color: 'rgba(255, 255, 255, 0.1)',
    firstLesson: 'lua-roblox-1'
  },
  {
    id: 'python',
    title: 'Python Essentials',
    description: 'Automação, dados e scripts poderosos com a sintaxe mais amada.',
    lessons: 15,
    icon: <TechIcon type="python" />,
    color: 'rgba(55, 118, 171, 0.1)',
    firstLesson: 'python-1'
  },
  {
    id: 'java',
    title: 'Java para Empresas',
    description: 'Aprenda a linguagem robusta usada por grandes corporações.',
    lessons: 10,
    icon: <TechIcon type="java" />,
    color: 'rgba(237, 29, 37, 0.1)',
    firstLesson: 'java-1'
  },
  {
    id: 'cpp',
    title: 'C++ Masterclass',
    description: 'Alta performance, sistemas e o coração da computação moderna.',
    lessons: 100,
    icon: <TechIcon type="cpp" />,
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
