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

  // JavaScript Curriculum (100 Lessons)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `js-${i + 1}`,
    title: i < 1 ? 'O Poder das Variáveis' : `JavaScript Nível ${i + 1}`,
    track: 'javascript',
    explanation: `
      ## Módulo ${i + 1}: ${i < 25 ? 'Fundamentos' : i < 50 ? 'Lógica Médios' : i < 75 ? 'Domínio da Web' : 'Sênior Architecture'}
      Aprofunde-se no passo ${i + 1} da sua jornada. Aqui você aprende ${i < 50 ? 'como o computador pensa' : 'como sistemas complexos são construídos'}.
    `,
    instructions: `Execute o comando: \`let xp_${i} = ${i * 10};\``,
    challenge: (input) => input.includes(`let xp_${i} = ${i * 10}`),
    hint: `Use let xp_${i} = ${i * 10};`
  })),

  // Python Curriculum (100 Lessons)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `python-${i + 1}`,
    title: `Python Essentials ${i + 1}`,
    track: 'python',
    explanation: `
      ## Python Módulo ${i + 1}
      Dominando a sintaxe limpa e automações poderosas.
    `,
    instructions: `Crie a variável: \`let py_data_${i} = true;\``,
    challenge: (input) => input.includes(`let py_data_${i} = true`),
    hint: 'Siga a instrução.'
  })),

  // Java Curriculum (100 Lessons)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `java-${i + 1}`,
    title: `Java Enterprise ${i + 1}`,
    track: 'java',
    explanation: `
      ## Java Nível ${i + 1}
      Tipagem forte e padrões de projeto para grandes sistemas.
    `,
    instructions: `Defina o estado: \`let java_core_${i} = "active";\``,
    challenge: (input) => input.includes(`let java_core_${i} = "active"`),
    hint: 'Use aspas para strings.'
  })),

  // Roblox/Lua Curriculum (100 Lessons)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `lua-roblox-${i + 1}`,
    title: `Roblox Masterclass ${i + 1}`,
    track: 'lua',
    explanation: `
      ## Roblox/Lua ${i + 1}
      Manipulando o Workspace e criando mecânicas de jogo incríveis.
    `,
    instructions: `Simule o objeto: \`let part_${i} = "brick";\``,
    challenge: (input) => input.includes(`let part_${i} = "brick"`),
    hint: 'Dê um nome a sua peça.'
  })),

  // C++ Masterclass Curriculum (100 Lessons)
  ...Array.from({ length: 100 }).map((_, i) => ({
    id: `cpp-${i + 1}`,
    title: `C++ Masterclass ${i + 1}`,
    track: 'cpp',
    explanation: `
      ## C++ Módulo ${i + 1}
      Alta performance, gerenciamento de memória e o coração dos sistemas modernos.
    `,
    instructions: `Declare o ponteiro: \`let ptr_${i} = 0x${(i + 100).toString(16)};\``,
    challenge: (input) => input.includes(`let ptr_${i} = 0x`),
    hint: 'Simule um endereço de memória hexadecimal.'
  })),

  // Database Curriculum (50 Lessons)
  ...Array.from({ length: 50 }).map((_, i) => ({
    id: `db-${i + 1}`,
    title: `Database Mastery ${i + 1}`,
    track: 'database',
    explanation: `
      ## Banco de Dados Módulo ${i + 1}
      Aprendendo a linguagem SQL e as melhores práticas de modelagem de dados.
    `,
    instructions: `Execute o SELECT: \`SELECT * FROM usuarios WHERE id = ${i + 1};\``,
    challenge: (input) => input.toLowerCase().includes('select') && input.includes(`id = ${i + 1}`),
    hint: `Use SELECT * FROM usuarios WHERE id = ${i + 1};`
  }))
];
