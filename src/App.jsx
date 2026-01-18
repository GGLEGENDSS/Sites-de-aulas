import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { ProgressProvider } from './data/ProgressContext';
import { ThemeProvider } from './data/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import './components/ThemeStyles.css';

import LessonPage from './pages/LessonPage';
import CodeBlitz from './components/CodeBlitz';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Ranking from './pages/Ranking';
import Lessons from './pages/Lessons';
import Database from './pages/Database';
import APIHub from './pages/APIHub';
import Roadmaps from './pages/Roadmaps';
import Glossary from './pages/Glossary';
import Login from './pages/Login';
import Games from './pages/Games';


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ProgressProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blitz" element={<CodeBlitz />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lesson/:id" element={<LessonPage />} />
                <Route path="/library" element={<Library />} />
                <Route path="/database" element={<Database />} />
                <Route path="/api-hub" element={<APIHub />} />
                <Route path="/roadmaps" element={<Roadmaps />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/games" element={<Games />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </ProgressProvider>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
