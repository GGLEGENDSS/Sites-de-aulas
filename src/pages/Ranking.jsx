import { Trophy, Flame, Zap, Award } from 'lucide-react';
import { useProgress } from '../data/ProgressContext';
import './Ranking.css';

const Ranking = () => {
  const { stats, completedLessons } = useProgress();

  // Calculate user's position based on XP
  const calculatePosition = (xp) => {
    if (xp >= 10000) return 1;
    if (xp >= 5000) return Math.floor(Math.random() * 50) + 2;
    if (xp >= 1000) return Math.floor(Math.random() * 200) + 50;
    return Math.floor(Math.random() * 500) + 200;
  };

  const userPosition = calculatePosition(stats.xp);

  return (
    <div className="ranking-container fadeIn">
      <header className="ranking-header">
        <h1>Seu Progresso</h1>
        <p>Acompanhe sua evolução no CodeAcademy Renovador.</p>
      </header>

      <div className="ranking-stats-summary glass">
        <div className="stat-card">
          <Trophy size={32} color="#ffd700" />
          <div className="stat-info">
            <span>Posição Estimada</span>
            <strong>#{userPosition}</strong>
          </div>
        </div>
        <div className="stat-card">
          <Zap size={32} color="#58cc02" />
          <div className="stat-info">
            <span>Seu XP Total</span>
            <strong>{stats.xp.toLocaleString()}</strong>
          </div>
        </div>
        <div className="stat-card">
          <Flame size={32} color="#ff9600" />
          <div className="stat-info">
            <span>Sua Ofensiva</span>
            <strong>{stats.streak} dias</strong>
          </div>
        </div>
      </div>

      <div className="progress-overview glass">
        <h2>Suas Conquistas</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="achievement-icon">📚</div>
            <div className="achievement-details">
              <strong>{completedLessons.length}</strong>
              <span>Lições Completas</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">⭐</div>
            <div className="achievement-details">
              <strong>Nível {stats.level}</strong>
              <span>Experiência</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🔥</div>
            <div className="achievement-details">
              <strong>{stats.streak} dias</strong>
              <span>Sequência</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-icon">🎯</div>
            <div className="achievement-details">
              <strong>{Math.floor((completedLessons.length / 1200) * 100)}%</strong>
              <span>Progresso Total</span>
            </div>
          </div>
        </div>
      </div>

      <div className="motivational-card glass">
        <Award size={32} color="var(--primary)" />
        <div className="motivational-content">
          <h3>Continue Assim!</h3>
          <p>
            {stats.xp < 1000 ? 
              'Você está no começo da jornada. Continue praticando!' :
              stats.xp < 5000 ?
              'Ótimo progresso! Você está dominando os fundamentos.' :
              stats.xp < 10000 ?
              'Incrível! Você está entre os melhores alunos.' :
              'Você é um MESTRE! Continue inspirando outros desenvolvedores.'
            }
          </p>
          <div className="next-milestone">
            <span>Próximo marco:</span>
            <strong>
              {stats.xp < 1000 ? '1.000 XP' :
               stats.xp < 5000 ? '5.000 XP' :
               stats.xp < 10000 ? '10.000 XP' :
               '20.000 XP (Lendário!)'}
            </strong>
          </div>
        </div>
      </div>

      <div className="info-note glass">
        <p>
          💡 <strong>Dica:</strong> Seu progresso é salvo localmente no navegador. 
          Complete mais lições para subir de nível e desbloquear conquistas!
        </p>
      </div>
    </div>
  );
};

export default Ranking;
