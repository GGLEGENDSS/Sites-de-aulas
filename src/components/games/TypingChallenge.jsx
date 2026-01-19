import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TypingChallenge.css';

const TypingChallenge = ({ onComplete }) => {
  const MotionDiv = motion.div;
  const words = [
    'javascript', 'variável', 'função', 'constante', 'array', 'objeto', 'método',
    'condicional', 'loop', 'string', 'número', 'booleano', 'return', 'console',
    'document', 'element', 'innerHTML', 'addEventListener', 'callback', 'async'
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState(60);
  const [gameActive, setGameActive] = useState(true);
  const [wordsCompleted, setWordsCompleted] = useState(0);

  useEffect(() => {
    if (!gameActive || time === 0) return;
    
    const timer = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          setGameActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, time]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Detectar quando a palavra está correta
    if (value === currentWord) {
      setScore(score + currentWord.length);
      setWordsCompleted(wordsCompleted + 1);
      setInput('');
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }

    // Detectar erros
    if (!currentWord.startsWith(value) && value.length > 0) {
      setMistakes(mistakes + 1);
    }
  };

  const wpm = Math.round((wordsCompleted / 5) * (60 / (60 - time)) || 0);
  const accuracy = wordsCompleted === 0 ? 100 : Math.round(((wordsCompleted - mistakes) / wordsCompleted) * 100);

  if (!gameActive && time === 0) {
    return (
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="typing-game-result"
      >
        <h2>Resultado Final 🎉</h2>
        <div className="result-stats">
          <div className="stat">
            <span className="label">Palavras</span>
            <span className="value">{wordsCompleted}</span>
          </div>
          <div className="stat">
            <span className="label">WPM</span>
            <span className="value">{wpm}</span>
          </div>
          <div className="stat">
            <span className="label">Acertos</span>
            <span className="value">{accuracy}%</span>
          </div>
          <div className="stat">
            <span className="label">Erros</span>
            <span className="value">{mistakes}</span>
          </div>
        </div>
        <button onClick={() => onComplete({ score, wpm, accuracy, mistakes, wordsCompleted })}>
          Voltar
        </button>
      </MotionDiv>
    );
  }

  return (
    <div className="typing-challenge">
      <div className="typing-header">
        <div className="timer">⏱️ {time}s</div>
        <div className="stats-row">
          <span>📝 Palavras: {wordsCompleted}</span>
          <span>⌨️ WPM: {wpm}</span>
          <span>✅ Acertos: {accuracy}%</span>
        </div>
      </div>

      <div className="typing-content">
        <MotionDiv
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="current-word"
        >
          {currentWord}
        </MotionDiv>

        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Digite aqui..."
          className={`typing-input ${input === currentWord ? 'correct' : ''}`}
          disabled={!gameActive}
          autoFocus
        />

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(time / 60) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
