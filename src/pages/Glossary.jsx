import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import './Glossary.css';

const glossaryTerms = [
  { term: 'API', definition: 'Application Programming Interface - Interface que permite comunicação entre diferentes softwares.' },
  { term: 'Backend', definition: 'Parte do sistema que roda no servidor, invisível ao usuário final.' },
  { term: 'CI/CD', definition: 'Continuous Integration/Continuous Deployment - Automação de testes e deploy.' },
  { term: 'Docker', definition: 'Plataforma para criar e executar aplicações em containers isolados.' },
  { term: 'Framework', definition: 'Estrutura de código reutilizável que facilita o desenvolvimento.' },
  { term: 'Git', definition: 'Sistema de controle de versão distribuído para rastrear mudanças no código.' },
  { term: 'HTTP', definition: 'HyperText Transfer Protocol - Protocolo de comunicação da web.' },
  { term: 'IDE', definition: 'Integrated Development Environment - Editor de código com ferramentas integradas.' },
  { term: 'JSON', definition: 'JavaScript Object Notation - Formato leve de troca de dados.' },
  { term: 'Kubernetes', definition: 'Sistema de orquestração de containers para deploy e scaling.' },
  { term: 'Localhost', definition: 'Endereço do servidor local na sua máquina (127.0.0.1).' },
  { term: 'Microservices', definition: 'Arquitetura onde o sistema é dividido em serviços pequenos e independentes.' },
  { term: 'NoSQL', definition: 'Bancos de dados não-relacionais (MongoDB, Redis, etc).' },
  { term: 'ORM', definition: 'Object-Relational Mapping - Traduz objetos de código para tabelas SQL.' },
  { term: 'PWA', definition: 'Progressive Web App - App web que funciona offline e pode ser instalado.' },
  { term: 'REST', definition: 'Representational State Transfer - Padrão de arquitetura para APIs.' },
  { term: 'SaaS', definition: 'Software as a Service - Software entregue pela internet (ex: Gmail).' },
  { term: 'TypeScript', definition: 'Superset do JavaScript com tipagem estática.' },
  { term: 'UI/UX', definition: 'User Interface/User Experience - Design de interface e experiência do usuário.' },
  { term: 'Webhook', definition: 'Callback HTTP que notifica eventos em tempo real.' }
];

const Glossary = () => {
  const [search, setSearch] = useState('');

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(search.toLowerCase()) ||
    item.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="glossary-page fadeIn">
      <header className="glossary-header">
        <h1>Glossário Técnico</h1>
        <p>Dicionário completo de termos de programação de A a Z.</p>
      </header>

      <div className="search-box glass">
        <Search size={20} />
        <input
          type="text"
          placeholder="Buscar termo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="glossary-grid">
        {filteredTerms.map((item, index) => (
          <div key={index} className="glossary-card glass">
            <div className="term-header">
              <BookOpen size={18} color="var(--primary)" />
              <h3>{item.term}</h3>
            </div>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="no-results">
          <p>Nenhum termo encontrado para "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default Glossary;
