// Sistema de Missões e Recompensas
export const missions = [
  // Missões Diárias
  {
    id: 'daily-login',
    title: 'Retorno do Aprendiz',
    description: 'Faça login hoje',
    type: 'daily',
    xpReward: 10,
    points: 5,
    completed: false,
    resetDaily: true,
    icon: '📅'
  },
  {
    id: 'daily-first-lesson',
    title: 'Primeiras Ações',
    description: 'Complete sua primeira lição do dia',
    type: 'daily',
    xpReward: 25,
    points: 10,
    completed: false,
    resetDaily: true,
    icon: '📚'
  },
  {
    id: 'daily-typing-challenge',
    title: 'Dedos em Ação',
    description: 'Complete um desafio de digitação',
    type: 'daily',
    xpReward: 30,
    points: 15,
    completed: false,
    resetDaily: true,
    icon: '⌨️'
  },
  {
    id: 'daily-three-lessons',
    title: 'Triplo Aprendizado',
    description: 'Complete 3 lições em um dia',
    type: 'daily',
    xpReward: 50,
    points: 25,
    completed: false,
    resetDaily: true,
    icon: '🎯'
  },

  // Missões Semanais
  {
    id: 'weekly-7-lessons',
    title: 'Semana Produtiva',
    description: 'Complete 7 lições em uma semana',
    type: 'weekly',
    xpReward: 100,
    points: 50,
    completed: false,
    resetWeekly: true,
    icon: '📖'
  },
  {
    id: 'weekly-mini-games',
    title: 'Jogador Ativo',
    description: 'Jogue 5 mini-games diferentes',
    type: 'weekly',
    xpReward: 80,
    points: 40,
    completed: false,
    resetWeekly: true,
    icon: '🎮'
  },
  {
    id: 'weekly-streak',
    title: 'Consistência é Chave',
    description: 'Faça login 7 dias seguidos',
    type: 'weekly',
    xpReward: 150,
    points: 75,
    completed: false,
    resetWeekly: true,
    icon: '🔥'
  },

  // Missões Permanentes
  {
    id: 'first-completion',
    title: 'Primeiro Passo',
    description: 'Complete sua primeira lição',
    type: 'permanent',
    xpReward: 50,
    points: 25,
    completed: false,
    icon: '🚀'
  },
  {
    id: 'complete-track',
    title: 'Mestre em JavaScript',
    description: 'Complete uma track completa',
    type: 'permanent',
    xpReward: 500,
    points: 250,
    completed: false,
    icon: '👑'
  },
  {
    id: 'level-10',
    title: 'Ascensão',
    description: 'Alcance o nível 10',
    type: 'permanent',
    xpReward: 200,
    points: 100,
    completed: false,
    icon: '⭐'
  },
  {
    id: 'streak-30',
    title: 'Lenda Viva',
    description: 'Faça login 30 dias seguidos',
    type: 'permanent',
    xpReward: 1000,
    points: 500,
    completed: false,
    icon: '💎'
  }
];

// Badges (Crachás)
export const badges = [
  {
    id: 'first-steps',
    name: 'Primeiros Passos',
    description: 'Complete sua primeira lição',
    icon: '👣',
    rarity: 'common',
    unlockedAt: null
  },
  {
    id: 'quick-learner',
    name: 'Aprendiz Rápido',
    description: 'Complete 5 lições em 1 dia',
    icon: '⚡',
    rarity: 'uncommon',
    unlockedAt: null
  },
  {
    id: 'typing-master',
    name: 'Mestre da Digitação',
    description: 'Acerte 100 palavras sem erros',
    icon: '⌨️',
    rarity: 'rare',
    unlockedAt: null
  },
  {
    id: 'game-enthusiast',
    name: 'Entusiasta de Jogos',
    description: 'Jogue 20 mini-games',
    icon: '🎮',
    rarity: 'uncommon',
    unlockedAt: null
  },
  {
    id: 'consistent',
    name: 'Consistente',
    description: 'Faça login 30 dias seguidos',
    icon: '🔥',
    rarity: 'epic',
    unlockedAt: null
  },
  {
    id: 'javascript-master',
    name: 'Mestre JavaScript',
    description: 'Complete a track de JavaScript',
    icon: '⭐',
    rarity: 'epic',
    unlockedAt: null
  },
  {
    id: 'legend',
    name: 'Lenda',
    description: 'Alcance o nível 50',
    icon: '👑',
    rarity: 'legendary',
    unlockedAt: null
  }
];

// Sistema de Níveis
export const levelSystem = {
  baseXpPerLevel: 100,
  multiplier: 1.1,
  getLevelRequirements: (level) => {
    return Math.floor(levelSystem.baseXpPerLevel * Math.pow(levelSystem.multiplier, level - 1));
  },
  getTotalXpForLevel: (level) => {
    let total = 0;
    for (let i = 1; i < level; i++) {
      total += levelSystem.getLevelRequirements(i);
    }
    return total;
  }
};
