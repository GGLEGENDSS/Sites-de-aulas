import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Flame, Star, Code, Target } from 'lucide-react';
import { useProgress } from '../data/ProgressContext';
import './Ranking.css';

const Ranking = () => {
  const { stats, languageLevels, completedMissions, user } = useProgress();
  const [rankingCategory, setRankingCategory] = useState('xp'); // xp, streak, languages, missions
  const [languageFilter, setLanguageFilter] = useState('javascript');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [userRank, setUserRank] = useState(null);

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
    { id: 'python', name: 'Python', icon: '🐍', color: '#3776ab' },
    { id: 'cpp', name: 'C++', icon: '⚙️', color: '#00599C' },
    { id: 'lua', name: 'Lua/Roblox', icon: '🎮', color: '#000080' },
    { id: 'database', name: 'Banco de Dados', icon: '🗄️', color: '#4db33d' }
  ];

  // Função para obter todos os usuários com todas as métricas
  const getAllUsersWithMetrics = () => {
    const users = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      
      if (key && key.startsWith('userStats_')) {
        const uid = key.replace('userStats_', '');
        const statsData = JSON.parse(localStorage.getItem(key)) || {};
        const languageLevelsData = JSON.parse(localStorage.getItem(`languageLevels_${uid}`)) || {};
        const missionsData = JSON.parse(localStorage.getItem(`completedMissions_${uid}`)) || [];
        const nameKey = `userName_${uid}`;
        const userName = localStorage.getItem(nameKey) || `Usuário_${uid.slice(0, 6)}`;
        
        users.push({
          id: uid,
          name: userName,
          xp: statsData.xp || 0,
          level: Math.floor((statsData.xp || 0) / 100) + 1,
          streak: statsData.streak || 0,
          languageLevels: languageLevelsData,
          completedMissions: missionsData.length || 0,
          badge: getBadgeForLevel(Math.floor((statsData.xp || 0) / 100) + 1)
        });
      }
    }
    
    return users;
  };

  const getBadgeForLevel = (level) => {
    if (level >= 20) return '⭐';
    if (level >= 15) return '🏆';
    if (level >= 10) return '⚡';
    if (level >= 7) return '🎯';
    if (level >= 5) return '💎';
    return '🌟';
  };

  // Atualizar ranking em tempo real
  useEffect(() => {
    const allUsers = getAllUsersWithMetrics();
    
    if (allUsers.length === 0) {
      const mockUsers = [
        { id: 1, name: 'João Silva', xp: 2500, level: 15, streak: 25, languageLevels: { javascript: 15, python: 10, cpp: 5, lua: 8, database: 6 }, completedMissions: 18, badge: '⭐' },
        { id: 2, name: 'Maria Santos', xp: 2300, level: 14, streak: 18, languageLevels: { javascript: 14, python: 12, cpp: 8, lua: 10, database: 7 }, completedMissions: 15, badge: '🏆' },
      ];
      setSortedUsers(mockUsers);
      return;
    }

    let sorted = [...allUsers];

    if (rankingCategory === 'xp') {
      sorted.sort((a, b) => b.xp - a.xp);
    } else if (rankingCategory === 'streak') {
      sorted.sort((a, b) => b.streak - a.streak);
    } else if (rankingCategory === 'languages') {
      sorted.sort((a, b) => 
        (b.languageLevels[languageFilter] || 0) - (a.languageLevels[languageFilter] || 0)
      );
    } else if (rankingCategory === 'missions') {
      sorted.sort((a, b) => b.completedMissions - a.completedMissions);
    }

    setSortedUsers(sorted);

    if (user) {
      const position = sorted.findIndex(u => u.id === user.uid) + 1;
      setUserRank(position || null);
    }
  }, [rankingCategory, languageFilter, user]);

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
          <p>Compita e suba no ranking!</p>
        </div>
        
        <div className="filter-buttons">
          <button
            className={`filter-btn ${rankingCategory === 'xp' ? 'active' : ''}`}
            onClick={() => setRankingCategory('xp')}
          >
            <Star size={20} /> XP
          </button>
          <button
            className={`filter-btn ${rankingCategory === 'streak' ? 'active' : ''}`}
            onClick={() => setRankingCategory('streak')}
          >
            <Flame size={20} /> Sequência
          </button>
          <button
            className={`filter-btn ${rankingCategory === 'languages' ? 'active' : ''}`}
            onClick={() => setRankingCategory('languages')}
          >
            <Code size={20} /> Linguagens
          </button>
          <button
            className={`filter-btn ${rankingCategory === 'missions' ? 'active' : ''}`}
            onClick={() => setRankingCategory('missions')}
          >
            <Target size={20} /> Missões
          </button>
        </div>
      </div>

      {/* Filtro de Linguagem (apenas para ranking de linguagens) */}
      {rankingCategory === 'languages' && (
        <div className="language-filter">
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`lang-btn ${languageFilter === lang.id ? 'active' : ''}`}
              onClick={() => setLanguageFilter(lang.id)}
              style={{
                borderColor: languageFilter === lang.id ? lang.color : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: languageFilter === lang.id ? `${lang.color}20` : 'rgba(255, 255, 255, 0.05)',
                color: languageFilter === lang.id ? lang.color : 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <span style={{ fontSize: '1.3em' }}>{lang.icon}</span> {lang.name}
            </button>
          ))}
        </div>
      )}

      <div className="ranking-stats">
        <div className="stats-card">
          <h3>Sua Posição</h3>
          <p className="stat-value">{userRank ? `#${userRank}` : 'Não ranqueado'}</p>
        </div>
        <div className="stats-card">
          <h3>Seu XP</h3>
          <p className="stat-value">{stats.xp.toLocaleString()} XP</p>
        </div>
        <div className="stats-card">
          <h3>Sua Sequência</h3>
          <p className="stat-value">{stats.streak} dias</p>
        </div>
        <div className="stats-card">
          <h3>Melhor Linguagem</h3>
          <p className="stat-value">
            {languageLevels && Object.entries(languageLevels).length > 0
              ? Object.entries(languageLevels).sort((a, b) => b[1] - a[1])[0][0].toUpperCase()
              : 'Nenhuma'
            }
          </p>
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
            {rankingCategory === 'xp' && 'XP Total'}
            {rankingCategory === 'streak' && 'Dias Seguidos'}
            {rankingCategory === 'languages' && `${languages.find(l => l.id === languageFilter)?.name} Nível`}
            {rankingCategory === 'missions' && 'Missões Completas'}
          </div>
          <div className="badge-col">Status</div>
        </div>

        {sortedUsers.slice(0, 10).map((rankUser, index) => (
          <motion.div
            key={rankUser.id}
            className={`leaderboard-row ${index === 0 ? 'rank-first' : index === 1 ? 'rank-second' : index === 2 ? 'rank-third' : 'rank-other'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 5 }}
          >
            <div className="rank-col">
              <span className="medal">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
              </span>
            </div>
            <div className="name-col">
              <div className="user-info">
                <div className="avatar">{rankUser.name[0]}</div>
                <span className="name">{rankUser.name}</span>
              </div>
            </div>
            <div className="stats-col">
              {rankingCategory === 'xp' && <span className="stat">{rankUser.xp.toLocaleString()} XP</span>}
              {rankingCategory === 'streak' && <span className="stat">{rankUser.streak} dias</span>}
              {rankingCategory === 'languages' && <span className="stat">Nível {rankUser.languageLevels[languageFilter] || 0}</span>}
              {rankingCategory === 'missions' && <span className="stat">{rankUser.completedMissions} missões</span>}
            </div>
            <div className="badge-col">
              <span className="badge">{rankUser.badge}</span>
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
        <h2>📊 4 Maneiras de Competir</h2>
        <div className="info-grid">
          <div className="info-box">
            <div className="info-title">
              <Star size={24} />
              <h3>XP Total</h3>
            </div>
            <p>Acumule experiência completando lições e desafios. O ranking geral mais competitivo!</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Flame size={24} />
              <h3>Sequência de Dias</h3>
            </div>
            <p>Faça login todos os dias para manter sua sequência. Consistência é fundamental!</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Code size={24} />
              <h3>Especialista em Linguagem</h3>
            </div>
            <p>Escolha uma linguagem e domine! Ranque entre os melhores em JavaScript, Python, C++, Lua ou SQL.</p>
          </div>
          <div className="info-box">
            <div className="info-title">
              <Target size={24} />
              <h3>Caçador de Missões</h3>
            </div>
            <p>Complete missões especiais para ganhar pontos extras. Quanto mais missões, maior seu status!</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ranking;
