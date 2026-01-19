import { useState, useEffect, useRef } from 'react';
import { Zap, Timer, Target, RotateCcw } from 'lucide-react';
import './CodeBlitz.css';

const snippets = [
  "let total = 0;",
  "function hello() { return 'world'; }",
  "const items = [1, 2, 3];",
  "if (valor > 10) { console.log('Ok'); }",
  "items.map(i => i * 2);",
  "for (let i = 0; i < 5; i++) { }",
  "async function load() { await fetch(); }"
];

const calculateAccuracy = (input, target) => {
  if (input.length === 0) return 100;
  let errors = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== target[i]) errors++;
  }
  return Math.max(0, Math.floor(((input.length - errors) / input.length) * 100));
};

const CodeBlitz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);

  const targetSnippet = snippets[currentIndex];
  const accuracy = calculateAccuracy(userInput, targetSnippet);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (value === targetSnippet) {
      if (currentIndex < snippets.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setUserInput('');
        return;
      }
      setIsFinished(true);
    }

    setUserInput(value);
  };

  useEffect(() => {
    if (startTime && !isFinished) {
      const interval = setInterval(() => {
        const seconds = (Date.now() - startTime) / 1000;
        const chars = userInput.length + (currentIndex * 20); // rough estimate
        setWpm(Math.floor((chars / 5) / (seconds / 60)));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [startTime, isFinished, currentIndex, userInput]);

  const resetGame = () => {
    setCurrentIndex(0);
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setIsFinished(false);
  };

  return (
    <div className="codeblitz-container glass">
      <div className="game-header">
        <div className="stat">
          <Zap size={20} color="var(--primary)" />
          <span>{wpm} WPM</span>
        </div>
        <div className="stat">
          <Target size={20} color="#ff4b4b" />
          <span>{accuracy}% Precision</span>
        </div>
        <div className="stat">
          <Timer size={20} color="#ff9600" />
          <span>{currentIndex + 1}/{snippets.length}</span>
        </div>
      </div>

      {!isFinished ? (
        <div className="challenge-area">
          <div className="snippet-display">
            {targetSnippet.split('').map((char, i) => {
              let className = '';
              if (i < userInput.length) {
                className = userInput[i] === char ? 'correct' : 'incorrect';
              } else if (i === userInput.length) {
                className = 'current';
              }
              return <span key={i} className={className}>{char}</span>;
            })}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Comece a digitar..."
            autoFocus
          />
        </div>
      ) : (
        <div className="result-area">
          <h2>Blitz Finalizado! 🚀</h2>
          <div className="final-stats">
            <div className="f-stat">
              <span>Velocidade</span>
              <strong>{wpm} WPM</strong>
            </div>
            <div className="f-stat">
              <span>Precisão</span>
              <strong>{accuracy}%</strong>
            </div>
          </div>
          <button className="reset-btn" onClick={resetGame}>
            <RotateCcw size={20} />
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeBlitz;
