import { useState } from 'react';
import { Database as DbIcon, Terminal as TermIcon, Play, RefreshCcw } from 'lucide-react';
import './Database.css';

const INITIAL_DATA = [
  { id: 1, nome: 'Gabriel', xp: 1200, nivel: 5 },
  { id: 2, nome: 'Ana', xp: 850, nivel: 3 },
  { id: 3, nome: 'Lucas', xp: 2100, nivel: 8 },
];

const Database = () => {
  const [query, setQuery] = useState('SELECT * FROM usuarios;');
  const [data, setData] = useState(INITIAL_DATA);
  const [error, setError] = useState(null);

  const executeSQL = () => {
    setError(null);
    const q = query.toLowerCase().trim();

    if (q === 'select * from usuarios;') {
      setData(INITIAL_DATA);
    } else if (q.includes('where nivel > 5')) {
      setData(INITIAL_DATA.filter(u => u.nivel > 5));
    } else if (q.includes('order by xp desc')) {
      setData([...INITIAL_DATA].sort((a, b) => b.xp - a.xp));
    } else if (q.includes('insert into')) {
       // Mock insert
       setData([...INITIAL_DATA, { id: 4, nome: 'Novo Dev', xp: 0, nivel: 1 }]);
    } else {
      setError('Erro de Sintaxe: Comando não reconhecido neste laboratório.');
    }
  };

  const reset = () => {
    setData(INITIAL_DATA);
    setQuery('SELECT * FROM usuarios;');
    setError(null);
  };

  return (
    <div className="database-page fadeIn">
      <header className="db-header">
        <h1>Laboratório SQL</h1>
        <p>Pratique manipulação de dados em tempo real. O banco de dados é o coração de todo sistema.</p>
      </header>

      <div className="db-container">
        <div className="sql-editor glass">
          <div className="editor-header">
            <TermIcon size={18} />
            <span>SQL Terminal</span>
          </div>
          <textarea 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite seu SQL aqui..."
          />
          <div className="editor-actions">
            <button className="reset-btn" onClick={reset}>
               <RefreshCcw size={16} /> Reiniciar
            </button>
            <button className="run-btn" onClick={executeSQL}>
               <Play size={16} /> Executar SQL
            </button>
          </div>
        </div>

        <div className="db-preview glass">
          <div className="preview-header">
            <DbIcon size={18} />
            <span>Tabela: usuarios</span>
          </div>
          {error ? (
            <div className="db-error">{error}</div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>XP</th>
                    <th>NIVEL</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(row => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td className="highlight">{row.nome}</td>
                      <td>{row.xp}</td>
                      <td>{row.nivel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <section className="db-tutorials">
        <h2>Dicas de Prática</h2>
        <div className="tips-grid">
          <div className="tip-card glass" onClick={() => setQuery('SELECT * FROM usuarios WHERE nivel > 5;')}>
            <h4>Filtragem</h4>
            <p>Selecione usuários experientes: <code>WHERE nivel &gt; 5</code></p>
          </div>
          <div className="tip-card glass" onClick={() => setQuery('SELECT * FROM usuarios ORDER BY xp DESC;')}>
            <h4>Ordenação</h4>
            <p>Veja quem tem mais XP: <code>ORDER BY xp DESC</code></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Database;
