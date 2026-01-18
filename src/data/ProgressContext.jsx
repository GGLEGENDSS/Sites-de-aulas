import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('userStats');
    return saved ? JSON.parse(saved) : { xp: 0, streak: 3, level: 1 };
  });

  const [visualState, setVisualState] = useState({});

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('userStats', JSON.stringify(stats));
  }, [stats]);

  const completeLesson = (lessonId, xpReward = 10) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      setStats(prev => ({ ...prev, xp: prev.xp + xpReward }));
    }
  };

  const updateVisualState = (newState) => {
    setVisualState(newState);
  };

  return (
    <ProgressContext.Provider value={{ 
      completedLessons, 
      stats, 
      completeLesson, 
      visualState, 
      updateVisualState 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
