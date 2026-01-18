import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Home, Compass, BookOpen, Terminal, User, Search, Zap, Book, Trophy } from 'lucide-react';
import { useProgress } from '../data/ProgressContext';
import { lessons } from '../data/lessons';
import Logo from './Logo';
import './Layout.css';
import './Logo.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { stats } = useProgress();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
    
    if (term.length > 2) {
      // Find matching lesson
      const lesson = lessons.find(l => l.title.toLowerCase().includes(term.toLowerCase()));
      if (lesson) {
        // We could show a dropdown, but for now let's jump if they press Enter or similar.
        // Or just navigate on exact/close match for a "magic" feel
      }
    }
  };

  const onSearchKeyPress = (e) => {
    if (e.key === 'Enter' && search.length > 2) {
      const term = search.toLowerCase();
      const lesson = lessons.find(l => l.title.toLowerCase().includes(term) || l.track.toLowerCase().includes(term));
      if (lesson) {
        navigate(`/lesson/${lesson.id}`);
        setSearch('');
      } else {
        navigate('/library'); // Fallback to library search
      }
    }
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="app-container">
      <aside className="sidebar">
        <Logo />
        <nav className="nav-links">
          <Link to="/" className={`nav-item ${isActive('/')}`}>
            <Home size={24} />
            <span>Início</span>
          </Link>
          <Link to="/blitz" className={`nav-item ${isActive('/blitz')}`}>
            <Zap size={24} />
            <span>CodeBlitz</span>
          </Link>
          <Link to="/lessons" className={`nav-item ${isActive('/lessons')}`}>
            <BookOpen size={24} />
            <span>Aulas</span>
          </Link>
          <Link to="/library" className={`nav-item ${isActive('/library')}`}>
            <Book size={24} />
            <span>Biblioteca</span>
          </Link>
          <Link to="/database" className={`nav-item ${isActive('/database')}`}>
            <Database size={24} />
            <span>Banco de Dados</span>
          </Link>
          <Link to="/api-hub" className={`nav-item ${isActive('/api-hub')}`}>
            <Compass size={24} />
            <span>Hub de APIs</span>
          </Link>
          <Link to="/ranking" className={`nav-item ${isActive('/ranking')}`}>
            <Trophy size={24} />
            <span>Ranking</span>
          </Link>
          <Link to="/profile" className={`nav-item ${isActive('/profile')}`}>
            <User size={24} />
            <span>Perfil</span>
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header glass">
          <div className="search-bar">
            <Search size={20} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Buscar lições ou guias..." 
              value={search}
              onChange={handleSearch}
              onKeyDown={onSearchKeyPress}
            />
          </div>
          <div className="user-info">
            <div className="streak">
              🔥 <span>{stats.streak} dias</span>
            </div>
            <div className="xp-badge">
               ⚡ <span>{stats.xp} XP</span>
            </div>
            <Link to="/profile" className="avatar">G</Link>
          </div>
        </header>
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
