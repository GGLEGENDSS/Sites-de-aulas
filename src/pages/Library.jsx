import { useState } from 'react';
import { Book, Search, ExternalLink, Code, Layers, Server, Zap, Terminal as TermIcon } from 'lucide-react';
import TechIcon from '../components/TechIcon';
import './Library.css';

const libraryContent = [
  {
    id: 'guide-vscode',
    language: 'Tooling',
    title: 'Configurando o VS Code Pro',
    category: 'Ambiente',
    content: `
      ## O Padrão da Indústria
      O VS Code é indispensável para qualquer desenvolvedor moderno.
      
      ## Extensões Essenciais:
      - **Prettier**: Formatação automática.
      - **ESLint**: Captura erros de digitação e lógica.
      - **Live Server**: Visualize suas mudanças HTML em tempo real.
      
      ## Atalhos Mestres:
      \`CTRL + P\`: Abre qualquer arquivo instantaneamente.
      \`CTRL + \` \`: Abre o terminal integrado.
    `,
    icon: <Code size={24} />
  },
  {
    id: 'guide-server',
    language: 'Backend',
    title: 'Criando um Servidor Local',
    category: 'Tooling',
    content: `
      ## Por que rodar localmente?
      Desenvolver no seu PC (localhost) é mais rápido e seguro antes de enviar para a nuvem.
      
      ## Ferramentas Recomendadas:
      - **Node.js**: O motor que permite rodar JS fora do navegador.
      - **WAMP/XAMPP**: Para quem precisa de Banco de Dados SQL rápido.
      
      ## Comandos Iniciais:
      Digite \`npm init -y\` no terminal para criar seu primeiro projeto profissional.
    `,
    icon: <Server size={24} />
  },
  {
    id: 'java-deep',
    language: 'Java',
    title: 'Arquitetura de Sistemas com Java',
    category: 'Backend',
    techType: 'java',
    content: `
      Java é uma linguagem "fortemente tipada" e orientada a objetos. Isso significa que ela é excelente para sistemas que precisam de muita segurança e organização.
      
      ### Por que Java nas empresas?
      Empresas como bancos e grandes e-commerces usam Java porque ele permite criar "contratos" entre partes do código (Interfaces).
    `,
    icon: <Server size={24} />
  },
  {
    id: 'roblox-case',
    language: 'Lua / Roblox',
    title: 'O Motor de Física do Roblox',
    category: 'Game Dev',
    techType: 'roblox',
    content: `
      No Roblox, a física é processada pelo "Physics Engine". Quando dois blocos se tocam, o motor calcula a força do impacto.
      
      ### O Evento Touched
      Muitos esquecem do "Debounce". Sem ele, seu script roda centenas de vezes por segundo no toque.
    `,
    icon: <Zap size={24} />
  },
  {
    id: 'insta-case',
    language: 'Geral',
    title: 'Caso de Estudo: Instagram',
    category: 'Arquitetura',
    content: `
      Como o Instagram lida com bilhões de fotos? Eles usam "Sharding".
      As fotos são distribuídas em milhares de discos diferentes baseadas no ID do usuário.
    `,
    icon: <Layers size={24} />
  },
  {
    id: 'guide-cpp-performance',
    language: 'C++',
    title: 'Performance Extrema com C++',
    category: 'Backend',
    techType: 'cpp',
    content: `
      ## Por que C++?
      C++ dá ao desenvolvedor controle total sobre o hardware. É a escolha para motores de jogos (Unreal Engine) e sistemas críticos.
      
      ## Gerenciamento de Memória:
      - **Stack**: Memória rápida, automática, para variáveis locais.
      - **Heap**: Memória dinâmica, controlada pelo desenvolvedor usando \`new\` e \`delete\`.
      
      ## Dica Master:
      Sempre prefira \`std::vector\` em vez de arrays puros quando precisar de segurança e performance juntas.
    `,
    icon: <Zap size={24} />
  },
  {
    id: 'guide-pointers',
    language: 'C++',
    title: 'Entendendo Ponteiros',
    category: 'Arquitetura',
    techType: 'cpp',
    content: `
      ## O que é um Ponteiro?
      Um ponteiro é uma variável que guarda o **endereço de memória** de outra variável.
      
      ## Exemplo:
      \`int x = 10;\`
      \`int* ptr = &x;\` // ptr guarda o endereço de x
      
      ## Por que usar?
      Ponteiros permitem manipular dados diretamente na memória, evitando cópias desnecessárias e permitindo estruturas de dados complexas como árvores e grafos.
    `,
    icon: <Code size={24} />
  },
  {
    id: 'guide-sql-basics',
    language: 'SQL',
    title: 'Fundamentos de SQL',
    category: 'Backend',
    content: `
      ## O que é SQL?
      SQL (Structured Query Language) é a linguagem padrão para interagir com bancos de dados relacionais.
      
      ## Comandos Principais:
      - **SELECT**: Busca dados.
      - **INSERT**: Adiciona novos registros.
      - **UPDATE**: Modifica registros existentes.
      - **DELETE**: Remove registros.
      
      ## Exemplo:
      \`SELECT nome FROM usuarios WHERE nivel > 5;\`
    `,
    icon: <TermIcon size={24} />
  }
];

const Library = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(libraryContent.map(item => item.category))];

  const filteredContent = libraryContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.language.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="library-container">
      <header className="library-header">
        <h1>Biblioteca do Conhecimento</h1>
        <p>Aprofunde-se no "como" e no "porquê" das grandes tecnologias.</p>
        <div className="search-box glass">
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Pesquisar linguagens, casos ou tecnologias..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="category-filters">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="library-grid">
        <aside className="library-list glass">
          <h3>Tópicos Disponíveis</h3>
          {filteredContent.map(item => (
            <div 
              key={item.id} 
              className={`library-item ${selectedTopic?.id === item.id ? 'active' : ''}`}
              onClick={() => setSelectedTopic(item)}
            >
              {item.techType ? <TechIcon type={item.techType} size={24} /> : item.icon}
              <div className="item-meta">
                <span className="item-lang">{item.language}</span>
                <span className="item-title">{item.title}</span>
              </div>
            </div>
          ))}
        </aside>

        <main className="library-content glass">
          {selectedTopic ? (
            <div className="content-view">
              <span className="category-tag">{selectedTopic.category}</span>
              <h2>{selectedTopic.title}</h2>
              <div className="markdown-content">
                {selectedTopic.content.split('\n').map((line, i) => {
                  if (line.trim().startsWith('##')) return <h3 key={i}>{line.replace('##', '')}</h3>;
                  return <p key={i}>{line}</p>;
                })}
              </div>
              <button className="done-reading-btn">Marcar como Lido</button>
            </div>
          ) : (
            <div className="empty-state">
              <Book size={64} color="var(--border)" />
              <p>Selecione um tópico ao lado para começar a ler.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Library;
