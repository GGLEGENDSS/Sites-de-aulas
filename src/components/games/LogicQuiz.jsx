import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LogicQuiz.css';

const quizzes = [
  {
    id: 1,
    question: 'Qual é a saída deste código? let x = 5; let y = "5"; console.log(x == y);',
    options: ['true', 'false', 'undefined', 'erro'],
    correct: 0,
    explanation: 'O operador == compara valores com coerção de tipo. 5 == "5" é true.'
  },
  {
    id: 2,
    question: 'O que retorna 2 + "2" em JavaScript?',
    options: ['"22"', '4', 'erro', 'undefined'],
    correct: 0,
    explanation: 'String concatenation ocorre quando um operando é string. 2 + "2" = "22"'
  },
  {
    id: 3,
    question: 'Qual função retorna o número maior entre 5 e 10?',
    options: ['Math.max(5, 10)', 'Math.bigger(5, 10)', 'max(5, 10)', 'Number.max(5, 10)'],
    correct: 0,
    explanation: 'Math.max() é a função correta para encontrar o valor máximo.'
  },
  {
    id: 4,
    question: 'Qual é o resultado de [1, 2, 3].map(x => x * 2)?',
    options: ['[2, 4, 6]', '[1, 2, 3]', 'undefined', 'erro'],
    correct: 0,
    explanation: 'O método map() cria um novo array aplicando a função a cada elemento.'
  },
  {
    id: 5,
    question: 'O que console.log(typeof []) retorna?',
    options: ['"object"', '"array"', '"list"', '"undefined"'],
    correct: 0,
    explanation: 'Arrays são objetos em JavaScript. typeof [] retorna "object".'
  },
];

export function LogicQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const quiz = quizzes[currentQuestion];

  const handleAnswer = (index) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);

    if (index === quiz.correct) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quizzes.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setGameOver(false);
  };

  if (gameOver) {
    const percentage = Math.round((score / (quizzes.length * 10)) * 100);
    
    return (
      <motion.div
        className="logic-quiz-result"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Quiz Finalizado! 🎉</h2>
        <div className="result-stats">
          <div className="stat">
            <span className="label">Pontuação</span>
            <span className="value">{score} pts</span>
          </div>
          <div className="stat">
            <span className="label">Acurácia</span>
            <span className="value">{percentage}%</span>
          </div>
          <div className="stat">
            <span className="label">Questões</span>
            <span className="value">{Math.round(score / 10)}/{quizzes.length}</span>
          </div>
        </div>
        <p className="feedback">
          {percentage === 100 && 'Excelente! Você é um mestre! 🏆'}
          {percentage >= 70 && percentage < 100 && 'Muito bom! Você entende bem! 🌟'}
          {percentage >= 50 && percentage < 70 && 'Bom começo! Continue praticando! 💪'}
          {percentage < 50 && 'Não desista! Releia as lições e tente novamente! 📚'}
        </p>
        <button onClick={restartQuiz}>Tenter Novamente</button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="logic-quiz"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quiz-header">
        <div className="progress">
          <div className="progress-text">Questão {currentQuestion + 1}/{quizzes.length}</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / quizzes.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="score">Pontos: {score}</div>
      </div>

      <div className="quiz-content">
        <motion.h2
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="question"
        >
          {quiz.question}
        </motion.h2>

        <div className="options">
          {quiz.options.map((option, index) => (
            <motion.button
              key={index}
              className={`option ${
                selectedAnswer === index
                  ? index === quiz.correct
                    ? 'correct'
                    : 'wrong'
                  : answered && index === quiz.correct
                  ? 'correct'
                  : ''
              }`}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              whileHover={{ scale: answered ? 1 : 1.05 }}
              whileTap={{ scale: answered ? 1 : 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {answered && (
          <motion.div
            className="explanation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="explanation-title">
              {selectedAnswer === quiz.correct ? '✓ Correto!' : '✗ Incorreto!'}
            </p>
            <p className="explanation-text">{quiz.explanation}</p>
            <button onClick={nextQuestion} className="next-btn">
              {currentQuestion + 1 === quizzes.length ? 'Ver Resultado' : 'Próxima'}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
