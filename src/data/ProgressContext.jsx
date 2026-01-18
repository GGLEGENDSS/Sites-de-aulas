import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load initial state only after user is determined
  const [completedLessons, setCompletedLessons] = useState([]);
  const [stats, setStats] = useState({ xp: 0, streak: 3, level: 1 });
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
        
        setCompletedLessons(savedLessons ? JSON.parse(savedLessons) : []);
        setStats(savedStats ? JSON.parse(savedStats) : { xp: 0, streak: 0, level: 1 });
      } else {
        // No user? Reset or keep default (could also be empty)
        setCompletedLessons([]);
        setStats({ xp: 0, streak: 0, level: 1 });
      }
    }
  }, [user, loading]);

  // Save User Data whenever it changes (only if logged in)
  useEffect(() => {
    if (user) {
      localStorage.setItem(`completedLessons_${user.uid}`, JSON.stringify(completedLessons));
    }
  }, [completedLessons, user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`userStats_${user.uid}`, JSON.stringify(stats));
    }
  }, [stats, user]);

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
      user,
      loading,
      loginWithGoogle,
      logout,
      completedLessons, 
      stats, 
      completeLesson, 
      visualState, 
      updateVisualState 
    }}>
      {!loading && children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
