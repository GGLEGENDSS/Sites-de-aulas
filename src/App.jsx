import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { ProgressProvider } from './data/ProgressContext';
import './index.css';

import LessonPage from './pages/LessonPage';
import CodeBlitz from './components/CodeBlitz';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Ranking from './pages/Ranking';
import Lessons from './pages/Lessons';
import Database from './pages/Database';
import APIHub from './pages/APIHub';


function App() {
  return (
    <ProgressProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blitz" element={<CodeBlitz />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/database" element={<Database />} />
            <Route path="/api-hub" element={<APIHub />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ProgressProvider>
  );
}

export default App;
