export const lessons = [
  {
    id: 'js-1',
    title: 'O Poder das Variáveis',
    track: 'javascript',
    explanation: `
      ## Por que usamos variáveis?
      Imagine que você está criando um jogo e precisa guardar a pontuação do jogador. Sem variáveis, o computador "esquece" o valor assim que ele muda.
      
      Uma variável é como uma **gaveta etiquetada**. Você dá um nome (etiqueta) e guarda um valor lá dentro.
      
      ## Quando usar 'let'?
      Usamos \`let\` quando o valor pode mudar durante o programa (como a vida de um personagem).
      
      **Tente criar seu primeiro pote de memória:**
      \`let vida = 100;\`
    `,
    instructions: 'Declare uma variável chamada `vida` com o valor 100.',
    challenge: (input) => input.includes('let vida = 100'),
    hint: 'Lembre-se: `let` [nome] = [valor];'
  },
  {
    id: 'lua-roblox-1',
    title: 'Dominando o Workspace',
    track: 'lua',
    explanation: `
      ## Como o Roblox enxerga o mundo?
      No Roblox, tudo o que você vê (partes, luzes, sons) está dentro do **Workspace**. 
      
      Para mudar algo no jogo, precisamos "navegar" até o objeto. É como dar o endereço de uma casa:
      \`game.Workspace.Part.Transparency = 0.5\`
      
      ## Por que isso é importante?
      Sem saber referenciar objetos, seu código não consegue interagir com o mundo físico do jogo.
      
      **Vamos mudar a transparência de uma peça imaginária:**
      \`let peca = "transparente";\` (Usando JS no terminal por enquanto)
    `,
    instructions: 'Simule a mudança de estado criando uma variável `peca` com o texto "invisivel".',
    challenge: (input) => input.includes('let peca = "invisivel"'),
    hint: 'Use aspas para textos!'
  },
  {
    id: 'lua-roblox-2',
    title: 'Eventos: O "Quando" do Código',
    track: 'lua',
    explanation: `
      ## Quando o código deve rodar?
      Nem todo código roda o tempo todo. Às vezes, queremos que algo aconteça **apenas quando** um jogador encosta em um bloco.
      
      Isso no Roblox se chama **Evento**. O mais comum é o \`.Touched\`.
      
      ## O Conceito de Callbacks
      Uma função de "callback" é o que diz ao Roblox o que fazer quando o evento acontece. É como deixar um bilhete: "Se alguém tocar aqui, faça isso".
    `,
    instructions: 'Crie uma variável `evento` com o valor "tocado" para simular o disparo de um evento.',
    challenge: (input) => input.includes('let evento = "tocado"'),
    hint: 'Simule o estado do evento no terminal.'
  },
  {
    id: 'java-1',
    title: 'A Segurança dos Tipos',
    track: 'java',
    explanation: `
      ## Por que Java é "Rigido"?
      Em Java, cada variável deve ter um tipo definido desde o início. Diferente do JS, você não pode mudar o tipo de uma variável depois que ela foi criada.
      
      Isso evita bugs onde você tenta somar um número com um texto, por exemplo.
      
      **Tente declarar um número inteiro (int):**
      \`int score = 500;\` (Simule no terminal com let score = 500)
    `,
    instructions: 'Declare uma variável simulando Java: `let score = 500;`',
    challenge: (input) => input.includes('let score = 500'),
    hint: 'Use um número inteiro!'
  },
  {
    id: 'python-1',
    title: 'A Elegância do Python',
    track: 'python',
    explanation: `
      ## Código que parece Inglês
      Python é famoso por sua legibilidade. A ideia é que qualquer pessoa consiga ler o código e entender o que ele faz.
      
      **Tente criar um texto em Python:**
      \`print("Olá Mundo")\` (No terminal: let msg = "Olá Mundo")
    `,
    instructions: 'Simule um print criando uma variável `msg` com o texto "Olá Mundo".',
    challenge: (input) => input.includes('let msg = "Olá Mundo"'),
    hint: 'Use aspas duplas.'
  },
  // --- MASSIVE CURRICULUM SCALING (100 PER TRACK) ---

  // JavaScript Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `js-${i + 1}`,
    title: i < 1 ? 'O Poder das Variáveis' : 
           i < 50 ? `JavaScript Fundamentos ${i + 1}` :
           i < 100 ? `JavaScript Intermediário ${i + 1}` :
           i < 150 ? `JavaScript Avançado ${i + 1}` :
           `JavaScript Expert - Projeto ${i - 149}`,
    track: 'javascript',
    explanation: `
      ## Módulo ${i + 1}: ${
        i < 50 ? 'Fundamentos' : 
        i < 100 ? 'Lógica e DOM' : 
        i < 150 ? 'Async & APIs' : 
        'Projetos Reais'
      }
      ${i >= 150 ? `
      ### Projeto Prático
      Neste módulo você vai construir um projeto real do zero!
      ${i === 150 ? '- **Calculadora Interativa**' : ''}
      ${i === 151 ? '- **To-Do List com LocalStorage**' : ''}
      ${i === 152 ? '- **Weather App com API**' : ''}
      ` : `Aprofunde-se no passo ${i + 1} da sua jornada JavaScript.`}
    `,
    instructions: i >= 150 ? 
      `Projeto: Crie uma função que ${['calcula', 'salva', 'busca'][i % 3]} dados` :
      `Execute o comando: \`let xp_${i} = ${i * 10};\``,
    challenge: (input) => i >= 150 ? 
      input.includes('function') || input.includes('=>') :
      input.includes(`let xp_${i} = ${i * 10}`),
    hint: i >= 150 ? 'Crie uma função usando function ou arrow function' : `Use let xp_${i} = ${i * 10};`
  })),

  // Python Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `python-${i + 1}`,
    title: i < 50 ? `Python Básico ${i + 1}` :
           i < 100 ? `Python Intermediário ${i + 1}` :
           i < 150 ? `Python Avançado ${i + 1}` :
           `Python Expert - Projeto ${i - 149}`,
    track: 'python',
    explanation: `
      ## Python Módulo ${i + 1}
      ${i >= 150 ? `### Projeto: ${['Automação de Tarefas', 'Web Scraper', 'Data Analysis'][i % 3]}` : 'Dominando Python passo a passo.'}
    `,
    instructions: i >= 150 ?
      `Crie uma função Python que processa dados` :
      `Crie a variável: \`let py_data_${i} = true;\``,
    challenge: (input) => i >= 150 ?
      input.includes('def ') || input.includes('function') :
      input.includes(`let py_data_${i} = true`),
    hint: i >= 150 ? 'Use def nome_funcao():' : 'Siga a instrução.'
  })),

  // Java Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `java-${i + 1}`,
    title: i < 50 ? `Java Fundamentos ${i + 1}` :
           i < 100 ? `Java OOP ${i + 1}` :
           i < 150 ? `Java Enterprise ${i + 1}` :
           `Java Expert - Projeto ${i - 149}`,
    track: 'java',
    explanation: `
      ## Java Nível ${i + 1}
      ${i >= 150 ? `### Projeto Enterprise: ${['Sistema de Login', 'API REST', 'Microservice'][i % 3]}` : 'Tipagem forte e padrões de projeto.'}
    `,
    instructions: i >= 150 ?
      `Crie uma classe Java com métodos` :
      `Defina o estado: \`let java_core_${i} = "active";\``,
    challenge: (input) => i >= 150 ?
      input.includes('class ') || input.includes('public') :
      input.includes(`let java_core_${i} = "active"`),
    hint: i >= 150 ? 'Use public class NomeDaClasse' : 'Use aspas para strings.'
  })),

  // Roblox/Lua Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `lua-roblox-${i + 1}`,
    title: i < 50 ? `Roblox Básico ${i + 1}` :
           i < 100 ? `Roblox Game Dev ${i + 1}` :
           i < 150 ? `Roblox Avançado ${i + 1}` :
           `Roblox Expert - Projeto ${i - 149}`,
    track: 'lua',
    explanation: `
      ## Roblox/Lua ${i + 1}
      ${i >= 150 ? `### Projeto de Jogo: ${['Obby Completo', 'Sistema de Inventário', 'Boss Fight'][i % 3]}` : 'Criando mecânicas de jogo incríveis.'}
    `,
    instructions: i >= 150 ?
      `Crie um script de jogo completo` :
      `Simule o objeto: \`let part_${i} = "brick";\``,
    challenge: (input) => i >= 150 ?
      input.includes('script') || input.includes('function') :
      input.includes(`let part_${i} = "brick"`),
    hint: i >= 150 ? 'Crie uma função de gameplay' : 'Dê um nome a sua peça.'
  })),

  // C++ Masterclass Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: `cpp-${i + 1}`,
    title: i < 50 ? `C++ Básico ${i + 1}` :
           i < 100 ? `C++ Intermediário ${i + 1}` :
           i < 150 ? `C++ Avançado ${i + 1}` :
           `C++ Expert - Projeto ${i - 149}`,
    track: 'cpp',
    explanation: `
      ## C++ Módulo ${i + 1}
      ${i >= 150 ? `### Projeto de Performance: ${['Game Engine', 'Compilador', 'Sistema Operacional'][i % 3]}` : 'Alta performance e gerenciamento de memória.'}
    `,
    instructions: i >= 150 ?
      `Implemente um sistema em C++` :
      `Declare o ponteiro: \`let ptr_${i} = 0x${(i + 100).toString(16)};\``,
    challenge: (input) => i >= 150 ?
      input.includes('class') || input.includes('struct') :
      input.includes(`let ptr_${i} = 0x`),
    hint: i >= 150 ? 'Use class ou struct' : 'Simule um endereço de memória hexadecimal.'
  })),

  // Database Curriculum (100 Lessons - EXPANDED)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `db-${i + 1}`,
    title: i < 30 ? `SQL Básico ${i + 1}` :
           i < 60 ? `SQL Avançado ${i + 1}` :
           `Database Expert - Projeto ${i - 59}`,
    track: 'database',
    explanation: `
      ## Banco de Dados Módulo ${i + 1}
      ${i >= 60 ? `### Projeto: ${['E-commerce Database', 'Social Network Schema', 'Analytics System'][i % 3]}` : 'SQL e modelagem de dados profissional.'}
    `,
    instructions: i >= 60 ?
      `Crie um schema completo de banco de dados` :
      `Execute o SELECT: \`SELECT * FROM usuarios WHERE id = ${i + 1};\``,
    challenge: (input) => i >= 60 ?
      input.toLowerCase().includes('create table') || input.toLowerCase().includes('database') :
      input.toLowerCase().includes('select') && input.includes(`id = ${i + 1}`),
    hint: i >= 60 ? 'Use CREATE TABLE nome_tabela' : `Use SELECT * FROM usuarios WHERE id = ${i + 1};`
  }))
];
