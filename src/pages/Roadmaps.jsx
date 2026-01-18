import { useState } from 'react';
import { MapPin, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import './Roadmaps.css';

const roadmaps = {
  frontend: {
    title: 'Frontend Developer',
    color: '#61dafb',
    stages: [
      { name: 'Fundamentos', skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Git & GitHub'], level: 'Iniciante' },
      { name: 'Frameworks', skills: ['React.js', 'Vue.js ou Angular', 'TypeScript', 'Tailwind CSS'], level: 'Intermediário' },
      { name: 'Avançado', skills: ['Next.js', 'State Management (Redux/Zustand)', 'Testing (Jest/Vitest)', 'Performance'], level: 'Avançado' },
      { name: 'Expert', skills: ['Micro-frontends', 'WebAssembly', 'PWA', 'Acessibilidade (a11y)'], level: 'Expert' }
    ]
  },
  backend: {
    title: 'Backend Developer',
    color: '#68a063',
    stages: [
      { name: 'Fundamentos', skills: ['Node.js ou Python', 'APIs REST', 'SQL Básico', 'Git'], level: 'Iniciante' },
      { name: 'Banco de Dados', skills: ['PostgreSQL/MySQL', 'MongoDB', 'Redis', 'ORMs (Prisma/SQLAlchemy)'], level: 'Intermediário' },
      { name: 'Arquitetura', skills: ['Microservices', 'Docker', 'Message Queues', 'GraphQL'], level: 'Avançado' },
      { name: 'DevOps', skills: ['Kubernetes', 'CI/CD', 'AWS/Azure', 'Monitoring'], level: 'Expert' }
    ]
  },
  mobile: {
    title: 'Mobile Developer',
    color: '#a4c639',
    stages: [
      { name: 'Fundamentos', skills: ['React Native ou Flutter', 'JavaScript/Dart', 'UI/UX Mobile', 'Git'], level: 'Iniciante' },
      { name: 'Nativo', skills: ['Android (Kotlin)', 'iOS (Swift)', 'Platform APIs', 'Push Notifications'], level: 'Intermediário' },
      { name: 'Avançado', skills: ['Offline-first', 'Performance', 'App Store Deploy', 'Analytics'], level: 'Avançado' },
      { name: 'Expert', skills: ['AR/VR', 'Wearables', 'Cross-platform', 'Security'], level: 'Expert' }
    ]
  },
  fullstack: {
    title: 'Fullstack Developer',
    color: '#f7df1e',
    stages: [
      { name: 'Web Basics', skills: ['HTML/CSS/JS', 'Node.js', 'SQL', 'Git'], level: 'Iniciante' },
      { name: 'Stack Completo', skills: ['React + Express', 'PostgreSQL', 'Authentication', 'Deployment'], level: 'Intermediário' },
      { name: 'Produção', skills: ['Next.js', 'Prisma', 'Docker', 'CI/CD'], level: 'Avançado' },
      { name: 'Arquiteto', skills: ['Microservices', 'Cloud (AWS)', 'Scaling', 'Monitoring'], level: 'Expert' }
    ]
  }
};

const Roadmaps = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState('frontend');

  const currentRoadmap = roadmaps[selectedRoadmap];

  return (
    <div className="roadmaps-page fadeIn">
      <header className="roadmaps-header">
        <h1>Roadmaps de Carreira</h1>
        <p>Trilhas completas para você se tornar um desenvolvedor profissional.</p>
      </header>

      <div className="roadmap-selector">
        {Object.entries(roadmaps).map(([key, roadmap]) => (
          <button
            key={key}
            className={`roadmap-btn ${selectedRoadmap === key ? 'active' : ''}`}
            onClick={() => setSelectedRoadmap(key)}
            style={{ borderColor: selectedRoadmap === key ? roadmap.color : 'transparent' }}
          >
            <MapPin size={18} />
            {roadmap.title}
          </button>
        ))}
      </div>

      <div className="roadmap-container">
        <div className="roadmap-title" style={{ color: currentRoadmap.color }}>
          <h2>{currentRoadmap.title}</h2>
          <p>Siga esta trilha para dominar a área</p>
        </div>

        <div className="roadmap-stages">
          {currentRoadmap.stages.map((stage, index) => (
            <div key={index} className="stage-card glass">
              <div className="stage-header">
                <div className="stage-number" style={{ background: currentRoadmap.color }}>
                  {index + 1}
                </div>
                <div className="stage-info">
                  <h3>{stage.name}</h3>
                  <span className="level-badge">{stage.level}</span>
                </div>
              </div>
              <div className="skills-list">
                {stage.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <Circle size={12} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              {index < currentRoadmap.stages.length - 1 && (
                <div className="stage-arrow">
                  <ArrowRight size={24} color={currentRoadmap.color} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
