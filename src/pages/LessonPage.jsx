import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, Info } from 'lucide-react';
import Terminal from '../components/Terminal';
import Visualizer from '../components/Visualizer';
import SuccessEffect from '../components/SuccessEffect';
import { lessons } from '../data/lessons';
import './LessonPage.css';

const LessonPageContent = ({ id }) => {
  const navigate = useNavigate();
  const currentLesson = lessons.find(l => l.id === id);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleCommand = (command) => {
    if (!currentLesson) return;

    const success = currentLesson.challenge(command);
    
    if (success) {
      setFeedback({ type: 'success', message: 'Excelente! Você completou o desafio.' });
      setIsCompleted(true);
    }
  };

  const nextLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === id);
    if (currentIndex < lessons.length - 1) {
      navigate(`/lesson/${lessons[currentIndex + 1].id}`);
    } else {
      navigate('/');
    }
  };

  if (!currentLesson) return <div>Carregando...</div>;

  return (
    <div className="lesson-split-view renovador">
      <SuccessEffect active={isCompleted} />
      <div className="explanation-panel">
        <header className="lesson-header">
          <button onClick={() => navigate('/')} className="back-btn">
            <ChevronLeft size={20} />
            Sair
          </button>
          <h2>{currentLesson.title}</h2>
        </header>

        <div className="explanation-content markdown">
          <div className="content-text">
            {currentLesson.explanation.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          
          <div className="instruction-card">
            <Info size={20} color="var(--primary)" />
            <div className="instruction-text">
              <h4>Objetivo:</h4>
              <p>{currentLesson.instructions}</p>
            </div>
          </div>
        </div>

        <footer className="lesson-footer">
          {isCompleted ? (
            <button className="next-btn" onClick={nextLesson}>
              Próxima Lição
              <ChevronRight size={20} />
            </button>
          ) : (
            <button className="solution-btn">Ver solução</button>
          )}
        </footer>
      </div>

      <div className="terminal-panel">
        <Terminal onCommand={handleCommand} />
        {feedback && (
          <div className={`terminal-feedback ${feedback.type}`}>
            {feedback.type === 'success' && <CheckCircle size={18} />}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>

      <div className="visualizer-panel">
        <Visualizer />
      </div>
    </div>
  );
};

const LessonPage = () => {
  const { id } = useParams();
  return <LessonPageContent key={id} id={id} />;
};

export default LessonPage;
