import { useProgress } from '../data/ProgressContext';
import { Award, BarChart2, Book, Zap } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const { stats, completedLessons } = useProgress();

  return (
    <div className="profile-container">
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
            <Award size={24} color="#ff9600" />
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

      <section className="achievements">
        <h2>Conquistas</h2>
        <div className="achievements-grid">
          <div className={`achievement-card ${completedLessons.length > 0 ? 'unlocked' : ''}`}>
             <div className="ach-icon">🚀</div>
             <p>Primeiros Passos</p>
          </div>
          <div className="achievement-card">
             <div className="ach-icon">🔥</div>
             <p>Em Chamas (7 dias)</p>
          </div>
          <div className="achievement-card">
             <div className="ach-icon">⚡</div>
             <p>Mestre do Blitz</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
