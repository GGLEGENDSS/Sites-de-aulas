import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Brain, Gauge } from 'lucide-react';
import TypingChallenge from '../components/games/TypingChallenge';
import { LogicQuiz } from '../components/games/LogicQuiz';
import { MemoryGame } from '../components/games/MemoryGame';
import { ReflexGame } from '../components/games/ReflexGame';
import './Games.css';

const games = [
  {
    id: 'typing',
    name: 'Desafio de Digitação',
    description: 'Teste sua velocidade e precisão digitando palavras em inglês. Mede WPM e acurácia.',
    icon: Gauge,
    rewards: '15 XP por palavra correta',
    difficulty: 'Iniciante'
  },
  {
    id: 'logic',
    name: 'Quiz de Lógica',
    description: 'Responda perguntas sobre JavaScript, conceitos de programação e lógica. Aprenda enquanto joga!',
    icon: Brain,
    rewards: '10 XP por resposta correta',
    difficulty: 'Intermediário'
  },
  {
    id: 'memory',
    name: 'Jogo da Memória',
    description: 'Encontre os pares correspondentes! Melhora sua concentração e velocidade.',
    icon: Award,
    rewards: '5 XP + Bônus de eficiência',
    difficulty: 'Iniciante'
  },
  {
    id: 'reflex',
    name: 'Teste de Reflexo',
    description: 'Clique o mais rápido possível quando as cores mudam. Teste seus reflexos!',
    icon: Zap,
    rewards: '20 XP se em TOP 10',
    difficulty: 'Avançado'
  }
];

export default function Games() {
  const MotionDiv = motion.div;
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePlayGame = (gameId) => {
    setSelectedGame(gameId);
  };

  const handleBackToMenu = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    return (
      <div className="games-player">
        <button className="back-button" onClick={handleBackToMenu}>
          ← Voltar ao Menu
        </button>
        
        {selectedGame === 'typing' && <TypingChallenge onComplete={handleBackToMenu} />}
        {selectedGame === 'logic' && <LogicQuiz />}
        {selectedGame === 'memory' && <MemoryGame />}
        {selectedGame === 'reflex' && <ReflexGame />}
      </div>
    );
  }

  return (
    <MotionDiv
      className="games-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="games-header">
        <h1>🎮 Mini-Jogos</h1>
        <p>Pratique programação enquanto se diverte! Ganhe XP e desbloqueie conquistas.</p>
      </div>

      <div className="games-grid">
        {games.map((game, index) => {
          const IconComponent = game.icon;
          return (
            <MotionDiv
              key={game.id}
              className="game-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="game-icon">
                <IconComponent size={40} />
              </div>
              <h3>{game.name}</h3>
              <p className="description">{game.description}</p>
              
              <div className="game-info">
                <div className="info-item">
                  <span className="label">Dificuldade:</span>
                  <span className="value difficulty">{game.difficulty}</span>
                </div>
                <div className="info-item">
                  <span className="label">Recompensas:</span>
                  <span className="value rewards">{game.rewards}</span>
                </div>
              </div>

              <button
                className="play-button"
                onClick={() => handlePlayGame(game.id)}
              >
                Jogar Agora
              </button>
            </MotionDiv>
          );
        })}
      </div>

      <MotionDiv
        className="games-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>💡 Como Funciona o Sistema de Recompensas</h2>
        <div className="info-cards">
          <div className="info-card">
            <h4>Ganhe XP</h4>
            <p>Cada jogo completo gera XP que contribui para seu nível geral.</p>
          </div>
          <div className="info-card">
            <h4>Desbloqueie Badges</h4>
            <p>Conquistas especiais são desbloqueadas ao atingir milestones.</p>
          </div>
          <div className="info-card">
            <h4>Suba de Nível</h4>
            <p>A cada 100 XP você sobe um nível e ganha novos prêmios.</p>
          </div>
          <div className="info-card">
            <h4>Compete no Ranking</h4>
            <p>Seu desempenho nos jogos afeta sua posição no ranking global.</p>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
