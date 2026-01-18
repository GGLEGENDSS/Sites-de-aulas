import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Flame, Star } from 'lucide-react';
import { useProgress } from '../data/ProgressContext';
import './Ranking.css';

// Mock data - Em produção, viria do Firebase
const mockUsers = [
  { id: 1, name: 'João Silva', xp: 2500, level: 15, streak: 25, badge: '⭐' },
  { id: 2, name: 'Maria Santos', xp: 2300, level: 14, streak: 18, badge: '🏆' },
  { id: 3, name: 'Pedro Costa', xp: 2100, level: 13, streak: 22, badge: '⚡' },
  { id: 4, name: 'Ana Paula', xp: 1950, level: 12, streak: 15, badge: '🎯' },
  { id: 5, name: 'Carlos Mendes', xp: 1800, level: 11, streak: 20, badge: '💎' },
  { id: 6, name: 'Julia Oliveira', xp: 1650, level: 10, streak: 12, badge: '🌟' },
  { id: 7, name: 'Lucas Ferreira', xp: 1500, level: 9, streak: 8, badge: '✨' },
  { id: 8, name: 'Fernanda Lima', xp: 1350, level: 8, streak: 10, badge: '🎨' },
  { id: 9, name: 'Roberto Alves', xp: 1200, level: 7, streak: 5, badge: '🚀' },
  { id: 10, name: 'Beatriz Costa', xp: 1050, level: 6, streak: 7, badge: '💪' },
];

const Ranking = () => {
  const { stats, completedLessons } = useProgress();
  const [filterBy, setFilterBy] = useState('xp');
  const [sortedUsers, setSortedUsers] = useState(mockUsers);

  useEffect(() => {
    const sorted = [...mockUsers].sort((a, b) => {
      if (filterBy === 'xp') return b.xp - a.xp;
      if (filterBy === 'level') return b.level - a.level;
      if (filterBy === 'streak') return b.streak - a.streak;
      return 0;
    });
    setSortedUsers(sorted);
  }, [filterBy]);

  const getMedalIcon = (position) => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return position;
  };

  const getRankColor = (position) => {
    if (position === 1) return 'rank-first';
    if (position === 2) return 'rank-second';
    if (position === 3) return 'rank-third';
    return 'rank-other';
  };

  return (
    <motion.div
      className="ranking-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ranking-header">
        <div className="header-content">
          <h1>🏆 Ranking Global</h1>
          <p>Veja os melhores programadores da comunidade!</p>
        </div>
        
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filterBy === 'xp' ? 'active' : ''}`}
            onClick={() => setFilterBy('xp')}
          >
            <Star size={20} /> XP
          </button>
          <button
            className={`filter-btn ${filterBy === 'level' ? 'active' : ''}`}
            onClick={() => setFilterBy('level')}
          >
            <Trophy size={20} /> Nível
          </button>
          <button
            className={`filter-btn ${filterBy === 'streak' ? 'active' : ''}`}
            onClick={() => setFilterBy('streak')}
          >
            <Flame size={20} /> Sequência
          </button>
        </div>
      </div>

      <div className="ranking-stats">
        <div className="stats-card">
          <h3>Sua Posição</h3>
          <p className="stat-value">#12</p>
        </div>
        <div className="stats-card">
          <h3>Seu XP</h3>
          <p className="stat-value">{stats.xp.toLocaleString()} XP</p>
        </div>
        <div className="stats-card">
          <h3>Seu Nível</h3>
          <p className="stat-value">Lv. {Math.floor(stats.xp / 100)}</p>
        </div>
        <div className="stats-card">
          <h3>Sua Sequência</h3>
          <p className="stat-value">{stats.streak} dias</p>
        </div>
      </div>

      <motion.div
        className="leaderboard"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="leaderboard-header">
          <div className="rank-col">Posição</div>
          <div className="name-col">Jogador</div>
          <div className="stats-col">
            {filterBy === 'xp' && 'XP'}
            {filterBy === 'level' && 'Nível'}
            {filterBy === 'streak' && 'Sequência'}
          </div>
          <div className="badge-col">Prêmio</div>
        </div>

        {sortedUsers.map((user, index) => (
          <motion.div
            key={user.id}
            className={`leaderboard-row ${getRankColor(index + 1)}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 5 }}
          >
            <div className="rank-col">
              <span className="medal">{getMedalIcon(index + 1)}</span>
            </div>
            <div className="name-col">
              <div className="user-info">
                <div className="avatar">{user.name[0]}</div>
                <span className="name">{user.name}</span>
              </div>
            </div>
            <div className="stats-col">
              {filterBy === 'xp' && <span className="stat">{user.xp.toLocaleString()} XP</span>}
              {filterBy === 'level' && <span className="stat">Lv. {user.level}</span>}
              {filterBy === 'streak' && <span className="stat">{user.streak} dias</span>}
            </div>
            <div className="badge-col">
              <span className="badge">{user.badge}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="ranking-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>📊 Como o Ranking Funciona</h2>
        <div className="info-grid">
          <div className="info-box">
            <div className="info-title">
              <Star size={24} />
              <h3>XP (Experiência)</h3>
            </div>
            <p>Ganhe XP completando lições, jogos e desafios. Mais XP = maior pontuação.</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Trophy size={24} />
              <h3>Nível</h3>
            </div>
            <p>A cada 100 XP você sobe um nível. Níveis altos indicam experiência.</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Flame size={24} />
              <h3>Sequência</h3>
            </div>
            <p>Log in consecutivos aumentam sua sequência. Máxima dedicação = maior posição!</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Medal size={24} />
              <h3>Prêmios</h3>
            </div>
            <p>Os top 3 ganham prêmios semanais e distintivos especiais de campeão.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ranking;
