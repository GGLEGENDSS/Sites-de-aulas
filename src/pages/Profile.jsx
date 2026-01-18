import { useProgress } from '../data/ProgressContext';
import { Award, Zap, Book, Flame, Star, Trophy, TrendingUp } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const { stats, completedLessons } = useProgress();

  const medals = [
    { id: 'first', name: 'Primeiros Passos', icon: '🚀', unlocked: completedLessons.length > 0 },
    { id: 'streak7', name: 'Semana Completa', icon: '🔥', unlocked: stats.streak >= 7 },
    { id: 'xp1000', name: 'Milhar', icon: '⚡', unlocked: stats.xp >= 1000 },
    { id: 'level5', name: 'Nível 5', icon: '⭐', unlocked: stats.level >= 5 },
    { id: 'explorer', name: 'Explorador', icon: '🧭', unlocked: completedLessons.length >= 5 },
    { id: 'master', name: 'Mestre', icon: '🏆', unlocked: completedLessons.length >= 10 }
  ];

  const weeklyXP = [
    { day: 'Seg', xp: 120 },
    { day: 'Ter', xp: 80 },
    { day: 'Qua', xp: 150 },
    { day: 'Qui', xp: 200 },
    { day: 'Sex', xp: 90 },
    { day: 'Sáb', xp: 180 },
    { day: 'Dom', xp: stats.xp % 200 }
  ];

  const maxXP = Math.max(...weeklyXP.map(d => d.xp));

  return (
    <div className="profile-container fadeIn">
      <header className="profile-header glass">
        <div className="profile-avatar">G</div>
        <div className="profile-main-info">
          <h1>Gomes Code</h1>
          <p>Membro desde Janeiro 2026</p>
          <div className="level-badge">Lvl {stats.level}</div>
        </div>
        <div className="profile-stats-grid">
          <div className="p-stat-card">
            <Zap size={24} color="var(--primary)" />
            <div className="p-stat-val">
              <span>XP Total</span>
              <strong>{stats.xp}</strong>
            </div>
          </div>
          <div className="p-stat-card">
            <Flame size={24} color="#ff9600" />
            <div className="p-stat-val">
              <span>Streak</span>
              <strong>{stats.streak} dias</strong>
            </div>
          </div>
          <div className="p-stat-card">
             <Book size={24} color="#3776ab" />
            <div className="p-stat-val">
              <span>Lições</span>
              <strong>{completedLessons.length}</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="progress-chart glass">
        <div className="chart-header">
          <TrendingUp size={20} color="var(--primary)" />
          <h2>XP Semanal</h2>
        </div>
        <div className="chart-bars">
          {weeklyXP.map((item, index) => (
            <div key={index} className="bar-container">
              <div 
                className="bar" 
                style={{ height: `${(item.xp / maxXP) * 100}%` }}
              >
                <span className="bar-value">{item.xp}</span>
              </div>
              <span className="bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements">
        <div className="section-header">
          <Trophy size={24} color="var(--primary)" />
          <h2>Medalhas & Conquistas</h2>
        </div>
        <div className="achievements-grid">
          {medals.map(medal => (
            <div 
              key={medal.id} 
              className={`achievement-card ${medal.unlocked ? 'unlocked' : 'locked'}`}
            >
               <div className="ach-icon">{medal.icon}</div>
               <p>{medal.name}</p>
               {medal.unlocked && <div className="unlock-badge">✓</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
