import { Trophy, Flame, Zap, Award } from 'lucide-react';
import './Ranking.css';

const rankings = [
  { id: 1, name: 'Gabriel R.', xp: 12450, streak: 45, badge: 'Mestre Java' },
  { id: 2, name: 'Ana Silva', xp: 11200, streak: 32, badge: 'Pythonista' },
  { id: 3, name: 'Lucas G.', xp: 9800, streak: 12, badge: 'Explorador Lua' },
  { id: 4, name: 'Beatriz M.', xp: 8500, streak: 8, badge: 'Veterana JS' },
  { id: 5, name: 'Rafael K.', xp: 7200, streak: 21, badge: 'Iniciante' },
];

const Ranking = () => {
  return (
    <div className="ranking-container">
      <header className="ranking-header">
        <h1>Ranking Global</h1>
        <p>Acompanhe os melhores alunos do CodeAcademy Renovador.</p>
      </header>

      <div className="ranking-stats-summary glass">
        <div className="stat-card">
          <Trophy size={32} color="#ffd700" />
          <div className="stat-info">
            <span>Sua Posição</span>
            <strong>#152</strong>
          </div>
        </div>
        <div className="stat-card">
          <Zap size={32} color="#58cc02" />
          <div className="stat-info">
            <span>Seu XP Total</span>
            <strong>1.250</strong>
          </div>
        </div>
        <div className="stat-card">
          <Flame size={32} color="#ff9600" />
          <div className="stat-info">
            <span>Sua Ofensiva</span>
            <strong>3 dias</strong>
          </div>
        </div>
      </div>

      <div className="ranking-list glass">
        <div className="ranking-row header">
          <span>#</span>
          <span>Usuário</span>
          <span>Título</span>
          <span>XP</span>
          <span>Ofensiva</span>
        </div>
        {rankings.map((user, index) => (
          <div key={user.id} className={`ranking-row ${index === 0 ? 'top-1' : ''}`}>
            <span className="rank-pos">{index + 1}</span>
            <div className="rank-user">
              <div className="rank-avatar">{user.name[0]}</div>
              <span>{user.name}</span>
            </div>
            <span className="rank-badge">{user.badge}</span>
            <span className="rank-xp">{user.xp.toLocaleString()} XP</span>
            <span className="rank-streak">🔥 {user.streak}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
