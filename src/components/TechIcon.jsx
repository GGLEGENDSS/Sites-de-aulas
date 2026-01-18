const TechIcon = ({ type, size = 32 }) => {
  const icons = {
    javascript: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#f7df1e" rx="8"/>
        <text x="50" y="75" fontSize="60" fontWeight="bold" textAnchor="middle" fill="#333">JS</text>
      </svg>
    ),
    python: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#3776ab', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#ffd43b', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#pythonGrad)" rx="8"/>
        <circle cx="35" cy="35" r="18" fill="#3776ab" opacity="0.8"/>
        <circle cx="65" cy="65" r="18" fill="#ffd43b" opacity="0.8"/>
        <path d="M50 30C28 30 20 40 20 50C20 60 28 70 50 70C72 70 80 60 80 50C80 40 72 30 50 30Z" fill="none" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    java: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#ed1d25" rx="8"/>
        <path d="M30 50Q30 35 40 35Q50 35 50 45Q50 50 45 55L55 70Q58 75 50 75Q48 75 45 70L35 55Q30 55 30 50Z" fill="#fff"/>
        <path d="M55 50Q55 35 65 35Q75 35 75 45Q75 50 70 55L80 70Q83 75 75 75Q73 75 70 70L60 55Q55 55 55 50Z" fill="#fff"/>
        <circle cx="50" cy="30" r="4" fill="#fff"/>
      </svg>
    ),
    lua: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#000080" rx="8"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#fff" strokeWidth="2"/>
        <circle cx="65" cy="35" r="8" fill="#fff"/>
        <circle cx="35" cy="35" r="8" fill="#fff"/>
        <path d="M40 70C50 80 60 80 70 70" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    roblox: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#fff" rx="8"/>
        <rect x="20" y="20" width="60" height="60" fill="#ff0000" rx="6"/>
        <circle cx="50" cy="50" r="15" fill="#fff"/>
        <circle cx="50" cy="50" r="10" fill="#ff0000" opacity="0.5"/>
      </svg>
    ),
    cpp: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#00599C" rx="8"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#fff" strokeWidth="2"/>
        <path d="M40 40L60 60M60 40L40 60" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <text x="50" y="75" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#fff">C++</text>
      </svg>
    ),
    database: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" fill="#4db33d" rx="8"/>
        <ellipse cx="50" cy="30" rx="20" ry="12" fill="none" stroke="#fff" strokeWidth="2"/>
        <path d="M30 30V60C30 70 40 75 50 75C60 75 70 70 70 60V30" fill="none" stroke="#fff" strokeWidth="2"/>
        <ellipse cx="50" cy="75" rx="20" ry="12" fill="none" stroke="#fff" strokeWidth="2"/>
        <line x1="30" y1="45" x2="70" y2="45" stroke="#fff" strokeWidth="1.5" opacity="0.7"/>
        <line x1="30" y1="60" x2="70" y2="60" stroke="#fff" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    ),
    architecture: (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="15" y="15" width="35" height="25" rx="3" ry="3" />
        <rect x="55" y="15" width="35" height="25" rx="3" ry="3" />
        <rect x="15" y="50" width="35" height="25" rx="3" ry="3" />
        <rect x="55" y="50" width="35" height="25" rx="3" ry="3" />
      </svg>
    )
  };

  return icons[type] || null;
};

export default TechIcon;
