import { useState } from 'react';
import { motion } from 'framer-motion';
import './ReflexGame.css';

export function ReflexGame() {
  const MotionDiv = motion.div;
  const [gameStarted, setGameStarted] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const [reactionTimes, setReactionTimes] = useState([]);
  const [nextColorTime, setNextColorTime] = useState(null);
  const [waitingForColor, setWaitingForColor] = useState(true);
  const [boxColor, setBoxColor] = useState('gray');

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setRoundCount(0);
    setReactionTimes([]);
    setWaitingForColor(true);
    scheduleNextColor();
  };

  const scheduleNextColor = () => {
    const delay = Math.random() * 3000 + 1000; // 1-4 segundos
    setWaitingForColor(true);
    setBoxColor('gray');

    const timeoutId = setTimeout(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBoxColor(randomColor);
      setWaitingForColor(false);
      setNextColorTime(Date.now());
    }, delay);

    return timeoutId;
  };

  const handleBoxClick = () => {
    if (!gameActive) return;

    if (waitingForColor) {
      // Clicou antes de aparecer a cor
      setGameActive(false);
      return;
    }

    const reactionTime = Date.now() - nextColorTime;
    const newTimes = [...reactionTimes, reactionTime];
    setReactionTimes(newTimes);
    setRoundCount(roundCount + 1);

    if (roundCount < 9) {
      // Próxima rodada
      setTimeout(() => {
        scheduleNextColor();
      }, 500);
    } else {
      // Jogo terminado
      setGameActive(false);
    }
  };

  const getAverageReactionTime = () => {
    if (reactionTimes.length === 0) return 0;
    const sum = reactionTimes.reduce((a, b) => a + b, 0);
    return Math.round(sum / reactionTimes.length);
  };

  const getBestReactionTime = () => {
    if (reactionTimes.length === 0) return 0;
    return Math.min(...reactionTimes);
  };

  const getWorstReactionTime = () => {
    if (reactionTimes.length === 0) return 0;
    return Math.max(...reactionTimes);
  };

  if (!gameStarted) {
    return (
      <MotionDiv
        className="reflex-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>⚡ Teste de Reflexo</h2>
        <p>Clique no quadrado assim que mudar de cor!</p>
        <div className="instructions">
          <h3>Como jogar:</h3>
          <ol>
            <li>Clique no botão "Começar"</li>
            <li>Aguarde o quadrado cinza mudar de cor</li>
            <li>Clique o mais rápido possível quando a cor aparecer</li>
            <li>Completo 10 rodadas para finalizar</li>
          </ol>
        </div>
        <button className="start-button" onClick={startGame}>
          Começar Jogo
        </button>
      </MotionDiv>
    );
  }

  if (!gameActive) {
    const average = getAverageReactionTime();
    const best = getBestReactionTime();
    const worst = getWorstReactionTime();

    return (
      <MotionDiv
        className="reflex-result"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2>Resultados 🎯</h2>
        
        {roundCount < 10 ? (
          <p className="warning">⚠️ Você clicou cedo demais! Tente novamente.</p>
        ) : (
          <>
            <div className="result-stats">
              <div className="stat">
                <span className="label">Tempo Médio</span>
                <span className="value">{average}ms</span>
              </div>
              <div className="stat">
                <span className="label">Melhor Tempo</span>
                <span className="value">{best}ms</span>
              </div>
              <div className="stat">
                <span className="label">Pior Tempo</span>
                <span className="value">{worst}ms</span>
              </div>
            </div>

            <p className="feedback">
              {average < 200 && '🏆 Tempo INCRÍVELMENTE rápido!'}
              {average >= 200 && average < 250 && '🥇 Tempo excelente!'}
              {average >= 250 && average < 300 && '🥈 Tempo muito bom!'}
              {average >= 300 && average < 400 && '🥉 Tempo bom!'}
              {average >= 400 && 'Continue praticando! ⚡'}
            </p>
          </>
        )}

        <button className="play-again-button" onClick={() => setGameStarted(false)}>
          {roundCount < 10 ? 'Tentar Novamente' : 'Jogar Novamente'}
        </button>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      className="reflex-game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="reflex-header">
        <div className="round-counter">
          <span className="label">Rodada</span>
          <span className="value">{roundCount + 1}/10</span>
        </div>
        <div className="status">
          {waitingForColor ? (
            <span className="waiting">Aguarde...</span>
          ) : (
            <span className="ready">CLIQUE!</span>
          )}
        </div>
      </div>

      <MotionDiv
        className={`reflex-box color-${boxColor}`}
        onClick={handleBoxClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            boxColor === 'gray' ? '#999999' :
            boxColor === 'red' ? '#ef4444' :
            boxColor === 'blue' ? '#3b82f6' :
            boxColor === 'green' ? '#10b981' :
            boxColor === 'yellow' ? '#fbbf24' :
            boxColor === 'purple' ? '#a855f7' :
            '#f97316'
        }}
      >
        {waitingForColor ? '⏳' : '✓'}
      </MotionDiv>

      <p className="instruction">
        {waitingForColor ? 'Aguarde a cor mudar...' : 'Clique agora!'}
      </p>
    </MotionDiv>
  );
}
