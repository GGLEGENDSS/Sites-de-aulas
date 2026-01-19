/* eslint-disable react-hooks/set-state-in-effect, react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load initial state only after user is determined
  const [completedLessons, setCompletedLessons] = useState([]);
  const [stats, setStats] = useState({ 
    xp: 0, 
    streak: 0, 
    level: 1,
    lastLoginDate: null
  });
  const [languageLevels, setLanguageLevels] = useState({
    javascript: 0,
    python: 0,
    cpp: 0,
    lua: 0,
    database: 0
  });
  const [completedMissions, setCompletedMissions] = useState([]);
  const [visualState, setVisualState] = useState({});

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Load User Data when User changes
  useEffect(() => {
    if (!loading) {
      if (user) {
        // Load for specific user
        const savedLessons = localStorage.getItem(`completedLessons_${user.uid}`);
        const savedStats = localStorage.getItem(`userStats_${user.uid}`);
        const savedLanguageLevels = localStorage.getItem(`languageLevels_${user.uid}`);
        const savedMissions = localStorage.getItem(`completedMissions_${user.uid}`);
        
        setCompletedLessons(savedLessons ? JSON.parse(savedLessons) : []);
        setStats(savedStats ? JSON.parse(savedStats) : { xp: 0, streak: 0, level: 1, lastLoginDate: null });
        setLanguageLevels(savedLanguageLevels ? JSON.parse(savedLanguageLevels) : {
          javascript: 0,
          python: 0,
          cpp: 0,
          lua: 0,
          database: 0
        });
        setCompletedMissions(savedMissions ? JSON.parse(savedMissions) : []);
        
        // Atualizar streak baseado na data do último login
        const today = new Date().toDateString();
        const savedStats2 = savedStats ? JSON.parse(savedStats) : { lastLoginDate: null };
        const lastLogin = savedStats2.lastLoginDate;
        
        if (lastLogin !== today) {
          const yesterday = new Date(Date.now() - 86400000).toDateString();
          let newStreak = (lastLogin === yesterday) ? (savedStats2.streak || 0) + 1 : 1;
          setStats(prev => ({ ...prev, lastLoginDate: today, streak: newStreak }));
        }
        
        // Salvar nome do usuário para o ranking
        if (user.displayName) {
          localStorage.setItem(`userName_${user.uid}`, user.displayName);
        }
      } else {
        // No user? Reset or keep default (could also be empty)
        setCompletedLessons([]);
        setStats({ xp: 0, streak: 0, level: 1, lastLoginDate: null });
        setLanguageLevels({
          javascript: 0,
          python: 0,
          cpp: 0,
          lua: 0,
          database: 0
        });
        setCompletedMissions([]);
      }
    }
  }, [user, loading]);

  // Save User Data whenever it changes (only if logged in)
  useEffect(() => {
    if (user) {
      localStorage.setItem(`completedLessons_${user.uid}`, JSON.stringify(completedLessons));
      localStorage.setItem(`userStats_${user.uid}`, JSON.stringify(stats));
      localStorage.setItem(`languageLevels_${user.uid}`, JSON.stringify(languageLevels));
      localStorage.setItem(`completedMissions_${user.uid}`, JSON.stringify(completedMissions));
    }
  }, [completedLessons, stats, languageLevels, completedMissions, user]);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erro ao logar com Google", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCompletedLessons([]);
      setStats({ xp: 0, streak: 0, level: 1 });
    } catch (error) {
      console.error("Erro ao sair", error);
    }
  };

  const completeLesson = (lessonId, xpReward = 10, language = null) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      setStats(prev => ({ ...prev, xp: prev.xp + xpReward }));
      
      // Aumentar nível da linguagem se especificado
      if (language && Object.prototype.hasOwnProperty.call(languageLevels, language)) {
        setLanguageLevels(prev => ({
          ...prev,
          [language]: prev[language] + 1
        }));
      }
    }
  };

  const completeMission = (missionId) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions([...completedMissions, missionId]);
      setStats(prev => ({ ...prev, xp: prev.xp + 50 })); // Bônus XP por missão
    }
  };

  const updateVisualState = (newState) => {
    setVisualState(newState);
  };

  return (
    <ProgressContext.Provider value={{ 
      user,
      loading,
      loginWithGoogle,
      logout,
      completedLessons, 
      stats, 
      completeLesson,
      languageLevels,
      setLanguageLevels,
      completedMissions,
      completeMission,
      visualState, 
      updateVisualState 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
};
