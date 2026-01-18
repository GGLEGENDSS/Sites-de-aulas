import { useState } from 'react';
import { Globe, Zap, Play, Copy, Check } from 'lucide-react';
import './APIHub.css';

const freeAPIs = [
  {
    id: 'pokeapi',
    name: 'PokéAPI',
    description: 'Dados completos de todos os Pokémon, habilidades e itens.',
    category: 'Games',
    endpoint: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    auth: 'Nenhuma',
    color: '#ffcb05'
  },
  {
    id: 'nasa',
    name: 'NASA APOD',
    description: 'Foto Astronômica do Dia da NASA.',
    category: 'Ciência',
    endpoint: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    auth: 'API Key (DEMO disponível)',
    color: '#0b3d91'
  },
  {
    id: 'weather',
    name: 'Open-Meteo',
    description: 'Previsão do tempo global sem necessidade de chave.',
    category: 'Clima',
    endpoint: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
    auth: 'Nenhuma',
    color: '#00d4ff'
  },
  {
    id: 'quotes',
    name: 'Quotable',
    description: 'Citações inspiradoras aleatórias.',
    category: 'Conteúdo',
    endpoint: 'https://api.quotable.io/random',
    auth: 'Nenhuma',
    color: '#6c63ff'
  },
  {
    id: 'dog',
    name: 'Dog API',
    description: 'Imagens aleatórias de cachorros.',
    category: 'Animais',
    endpoint: 'https://dog.ceo/api/breeds/image/random',
    auth: 'Nenhuma',
    color: '#ff6b6b'
  }
];

const APIHub = () => {
  const [selectedAPI, setSelectedAPI] = useState(null);
  const [customURL, setCustomURL] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const testAPI = async (url) => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse({ success: true, data, status: res.status });
    } catch (error) {
      setResponse({ success: false, error: error.message });
    }
    setLoading(false);
  };

  const copyEndpoint = (endpoint) => {
    navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="api-hub-page fadeIn">
      <header className="api-header">
        <h1>Hub de APIs Grátis</h1>
        <p>Conecte seus projetos ao mundo real com APIs públicas e gratuitas.</p>
      </header>

      <div className="api-grid">
        {freeAPIs.map(api => (
          <div 
            key={api.id} 
            className="api-card glass"
            onClick={() => {
              setSelectedAPI(api);
              setCustomURL(api.endpoint);
            }}
          >
            <div className="api-icon" style={{ background: api.color }}>
              <Globe size={24} />
            </div>
            <h3>{api.name}</h3>
            <p>{api.description}</p>
            <div className="api-meta">
              <span className="category-tag">{api.category}</span>
              <span className="auth-tag">{api.auth}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedAPI && (
        <section className="api-tester glass">
          <div className="tester-header">
            <Zap size={20} />
            <h2>Testador de API</h2>
          </div>
          
          <div className="url-input-group">
            <input 
              type="text"
              value={customURL}
              onChange={(e) => setCustomURL(e.target.value)}
              placeholder="Cole a URL da API aqui..."
            />
            <button onClick={() => copyEndpoint(customURL)} className="copy-btn">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <button onClick={() => testAPI(customURL)} className="test-btn" disabled={loading}>
              <Play size={16} />
              {loading ? 'Carregando...' : 'Testar'}
            </button>
          </div>

          {response && (
            <div className={`response-box ${response.success ? 'success' : 'error'}`}>
              <div className="response-header">
                <span>Resposta {response.status ? `(${response.status})` : ''}</span>
              </div>
              <pre>{JSON.stringify(response.data || response.error, null, 2)}</pre>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default APIHub;
