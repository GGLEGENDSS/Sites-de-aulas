const TechIcon = ({ type, size = 32 }) => {
  const icons = {
    javascript: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#f7df1e" rx="4"/>
        <path d="M27 75V40h14v29.3c0 8.1 4 11.7 10.4 11.7 3.8 0 6.8-1.1 8.2-2.7V40h14v35c0 12.5-7.4 18.3-19 18.3-6 0-10.2-1.9-13.6-5.8l-14-10.5z" fill="#333" />
        <path d="M101.1 58.8c-.7-4.2-3.6-7.5-11.4-7.5-4.4 0-8.1 1.6-9.9 4l10.5 6.4c.8-1.2 1.7-2 3.5-2 1.8 0 2.8.9 2.8 2.2 0 1.5-1 2.1-2.7 3l-3.7 2.5c-3.6 2.5-6 4.5-6 9.8 0 4.9 3.1 7.6 7.6 7.6 3 0 5.2-.9 6.8-2.8l-4.7-3c-.8 1.2-1.6 1.9-3.1 1.9-1.3 0-2.1-.6-2.1-1.9 0-1.3.8-2 2.7-3.1l3.7-2.5c3.6-2.5 6-4.5 6-9.8z" fill="#333" />
      </svg>
    ),
    python: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3776ab', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#ffd43b', stopOpacity: 1}} />
        </linearGradient>
        <rect width="128" height="128" fill="url(#pythonGrad)" rx="4"/>
        <circle cx="45" cy="45" r="18" fill="#3776ab"/>
        <circle cx="83" cy="83" r="18" fill="#ffd43b"/>
        <path d="M64 32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 58c-14.3 0-26-11.7-26-26s11.7-26 26-26 26 11.7 26 26-11.7 26-26 26z" fill="#fff" opacity="0.3"/>
      </svg>
    ),
    java: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#ed1d25" rx="4"/>
        <path d="M48 87c1.6 2.2 4.8 4.3 8.8 4.3 2.4 0 4.8-.8 4.8-3 0-2.1-1.9-3-5.2-4.3L54 83c-5.1-2.1-8.5-5.3-8.5-11.5 0-7.2 5.5-12.7 14.4-12.7 6.2 0 10.6 2.1 13.5 6.5l-7.4 4.7c-1.2-1.9-4-4-6.1-4-2.7 0-4.8 1.6-4.8 4 0 2.7 2.2 3.8 5.8 5.2l3.4 1.4c8.1 3.3 11.5 8 11.5 15 0 8.5-6.7 13.5-15.7 13.5-8.8 0-14.1-4.2-16.3-9l7.8-4.5z" fill="#fff"/>
        <path d="M86 87c1.6 2.2 4.8 4.3 8.8 4.3 2.4 0 4.8-.8 4.8-3 0-2.1-1.9-3-5.2-4.3l-3.2-1.3c-5.1-2.1-8.5-5.3-8.5-11.5 0-7.2 5.5-12.7 14.4-12.7 6.2 0 10.6 2.1 13.5 6.5l-7.4 4.7c-1.2-1.9-4-4-6.1-4-2.7 0-4.8 1.6-4.8 4 0 2.7 2.2 3.8 5.8 5.2l3.4 1.4c8.1 3.3 11.5 8 11.5 15 0 8.5-6.7 13.5-15.7 13.5-8.8 0-14.1-4.2-16.3-9l7.8-4.5z" fill="#fff"/>
      </svg>
    ),
    lua: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#000080" rx="4"/>
        <circle cx="64" cy="64" r="35" fill="#fff"/>
        <circle cx="64" cy="64" r="30" fill="none" stroke="#000080" strokeWidth="3"/>
        <circle cx="85" cy="48" r="8" fill="#000080"/>
        <circle cx="43" cy="48" r="8" fill="#000080"/>
        <path d="M50 85c8 5 14 5 28 0" fill="none" stroke="#000080" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    roblox: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#fff" rx="4"/>
        <rect x="28" y="28" width="72" height="72" fill="#ff0000" rx="4"/>
        <rect x="35" y="35" width="58" height="58" fill="#ff0000" rx="3"/>
        <circle cx="65" cy="65" r="20" fill="#fff"/>
      </svg>
    ),
    cpp: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#00599C" rx="4"/>
        <path d="M64 25c21.5 0 39 17.5 39 39s-17.5 39-39 39-39-17.5-39-39 17.5-39 39-39zm0 6c-18.2 0-33 14.8-33 33s14.8 33 33 33 33-14.8 33-33-14.8-33-33-33z" fill="#fff"/>
        <path d="M48 60h32v8H48zm0 18h32v8H48z" fill="#fff"/>
        <path d="M70 50v28h8V50zm-10 0v28h8V50z" fill="#fff"/>
      </svg>
    ),
    database: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#4db33d" rx="4"/>
        <ellipse cx="64" cy="40" rx="28" ry="14" fill="none" stroke="#fff" strokeWidth="2"/>
        <path d="M36 40v40c0 7.7 12.5 14 28 14s28-6.3 28-14V40" fill="none" stroke="#fff" strokeWidth="2"/>
        <ellipse cx="64" cy="80" rx="28" ry="14" fill="none" stroke="#fff" strokeWidth="2"/>
        <line x1="36" y1="50" x2="92" y2="50" stroke="#fff" strokeWidth="2"/>
        <line x1="36" y1="60" x2="92" y2="60" stroke="#fff" strokeWidth="2"/>
        <line x1="36" y1="70" x2="92" y2="70" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    architecture: (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="48" height="32" rx="4" ry="4" />
        <rect x="64" y="16" width="48" height="32" rx="4" ry="4" />
        <rect x="16" y="64" width="48" height="32" rx="4" ry="4" />
        <rect x="64" y="64" width="48" height="32" rx="4" ry="4" />
        <line x1="40" y1="48" x2="40" y2="64" />
        <line x1="88" y1="48" x2="88" y2="64" />
        <line x1="40" y1="96" x2="88" y2="96" />
      </svg>
    )
  };

  return icons[type] || null;
};

export default TechIcon;
