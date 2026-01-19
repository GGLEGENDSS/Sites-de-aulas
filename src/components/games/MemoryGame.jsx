/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './MemoryGame.css';

const CARDS = [
  '🎯', '🚀', '💻', '⚡', '🎨', '🔥',
  '🎯', '🚀', '💻', '⚡', '🎨', '🔥'
];

export function MemoryGame() {
  const MotionDiv = motion.div;
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const initializeGame = useCallback(() => {
    const shuffled = [...CARDS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameOver(false);
    setStartTime(Date.now());
    setElapsedTime(0);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (!startTime || gameOver) return;

    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 100);

    return () => clearInterval(timer);
  }, [startTime, gameOver]);

  useEffect(() => {
    if (matched.length === CARDS.length && matched.length > 0) {
      setGameOver(true);
    }
  }, [matched]);

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);

      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, newFlipped[0], newFlipped[1]]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameOver) {
    const pairs = CARDS.length / 2;
    const efficiency = Math.round((pairs / moves) * 100);

    return (
      <MotionDiv
        className="memory-game-result"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Parabéns! 🎉</h2>
        <div className="result-stats">
          <div className="stat">
            <span className="label">Movimentos</span>
            <span className="value">{moves}</span>
          </div>
          <div className="stat">
            <span className="label">Tempo</span>
            <span className="value">{formatTime(elapsedTime)}</span>
          </div>
          <div className="stat">
            <span className="label">Eficiência</span>
            <span className="value">{efficiency}%</span>
          </div>
        </div>
        <p className="feedback">
          {efficiency >= 80 && 'Jogador perfeito! 🏆'}
          {efficiency >= 60 && efficiency < 80 && 'Muito bom! 🌟'}
          {efficiency >= 40 && efficiency < 60 && 'Bom desempenho! 💪'}
          {efficiency < 40 && 'Continue praticando! 📚'}
        </p>
        <button onClick={initializeGame}>Jogar Novamente</button>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      className="memory-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="game-header">
        <div className="game-stat">
          <span className="label">Movimentos</span>
          <span className="value">{moves}</span>
        </div>
        <div className="game-stat">
          <span className="label">Tempo</span>
          <span className="value">{formatTime(elapsedTime)}</span>
        </div>
        <div className="game-stat">
          <span className="label">Encontrados</span>
          <span className="value">{matched.length / 2}/{CARDS.length / 2}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(matched.length / CARDS.length) * 100}%` }}
        />
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <MotionDiv
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card}</div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
