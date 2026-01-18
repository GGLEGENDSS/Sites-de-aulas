export const lessons = [
  {
    id: 'js-1',
    title: 'O Poder das Variáveis',
    track: 'javascript',
    explanation: `
      ## Por que usamos variáveis?
      Imagine que você está criando um jogo e precisa guardar a pontuação do jogador. Sem variáveis, o computador "esquece" o valor assim que ele muda.
      
      Uma variável é como uma **gaveta etiquetada**. Você dá um nome (etiqueta) e guarda um valor lá dentro.
      
      ### Exemplo Real:
      - Variável: Um recipiente para guardar informação
      - Nome da variável: A etiqueta (ex: "pontos")
      - Valor: O que está dentro (ex: 100)

      ## Quando usar 'let'?
      Usamos \`let\` quando o valor pode mudar durante o programa (como a vida de um personagem).
      
      **Diferenças de let, const e var:**
      - \`let\`: Pode mudar, escopo limitado (MELHOR PRÁTICA)
      - \`const\`: Não pode mudar depois de atribuído
      - \`var\`: Antigo, evite usar
      
      **Tente criar seu primeiro pote de memória:**
      \`\`\`javascript
      let vida = 100;
      let nome = "João";
      let pontos = 0;
      \`\`\`
      
      ### Exercício Prático:
      1. Você é um desenvolvedora de jogo
      2. Precisa guardar o nome do jogador em uma variável
      3. Use: \`let nomeDoJogador = "seu_nome";\`
    `,
    instructions: 'Declare uma variável chamada `vida` com o valor 100.',
    challenge: (input) => input.includes('let vida = 100'),
    hint: 'Lembre-se: \`let\` [nome] = [valor];'
  },
  {
    id: 'js-2',
    title: 'Tipos de Dados em JavaScript',
    track: 'javascript',
    explanation: `
      ## Os Tipos Principais
      JavaScript tem vários tipos de dados. Entender isso é crucial:
      
      ### 1. Números (Number)
      \`\`\`javascript
      let idade = 25;
      let altura = 1.75;
      let temperatura = -5;
      \`\`\`
      
      ### 2. Textos (String)
      \`\`\`javascript
      let nome = "Maria";
      let mensagem = 'Olá, mundo!';
      let emoji = "🚀";
      \`\`\`
      
      ### 3. Verdadeiro/Falso (Boolean)
      \`\`\`javascript
      let estaLogado = true;
      let temDinheiro = false;
      \`\`\`
      
      ### 4. Nulo e Indefinido
      \`\`\`javascript
      let valor = null;  // Intencionalmente vazio
      let naoAtribuido;  // undefined por padrão
      \`\`\`
      
      ## Por que Tipos Importam?
      Você não pode somar um número com um texto diretamente:
      - ✅ \`10 + 5 = 15\` (número + número)
      - ✗ \`"10" + 5 = "105"\` (texto + número = concatenação!)
    `,
    instructions: 'Crie variáveis para: idade (25), nome ("seu_nome"), e logado (true).',
    challenge: (input) => input.includes('let idade = 25') && input.includes('let nome') && input.includes('let logado = true'),
    hint: 'Números não têm aspas, textos têm, booleanos são true/false'
  },
  {
    id: 'js-3',
    title: 'Operações Matemáticas',
    track: 'javascript',
    explanation: `
      ## Usando JavaScript como Calculadora
      JavaScript pode fazer contas facilmente!
      
      ### Os 4 Operadores Básicos
      \`\`\`javascript
      let a = 10;
      let b = 3;
      
      console.log(a + b);  // 13 (adição)
      console.log(a - b);  // 7  (subtração)
      console.log(a * b);  // 30 (multiplicação)
      console.log(a / b);  // 3.33... (divisão)
      console.log(a % b);  // 1  (resto)
      \`\`\`
      
      ### Ordem das Operações
      JavaScript respeita a matemática:
      1. Multiplicação e Divisão (esquerda → direita)
      2. Adição e Subtração (esquerda → direita)
      
      \`\`\`javascript
      let resultado = 2 + 3 * 4;  // 14, não 20!
      \`\`\`
      
      ### Atalhos Úteis
      \`\`\`javascript
      let pontos = 10;
      pontos = pontos + 5;  // 15
      pontos += 5;          // Mesmo resultado, escrita mais curta!
      pontos -= 3;          // Subtrai 3
      pontos *= 2;          // Multiplica por 2
      \`\`\`
    `,
    instructions: 'Calcule: 20 + 15 - 3 e guarde em uma variável chamada `resultado`.',
    challenge: (input) => input.includes('let resultado = 20 + 15 - 3') || input.includes('let resultado = 32'),
    hint: 'Use a operação matemática: 20 + 15 - 3 = 32'
  },
  {
    id: 'js-4',
    title: 'Comparações: Verdadeiro ou Falso?',
    track: 'javascript',
    explanation: `
      ## Fazendo Perguntas ao Código
      Programar é fazer perguntas e tomar decisões. As comparações respondem essas perguntas:
      
      ### Os Operadores de Comparação
      \`\`\`javascript
      let idade = 18;
      
      idade == 18      // true (é igual?)
      idade != 20      // true (é diferente?)
      idade > 16       // true (é maior?)
      idade < 21       // true (é menor?)
      idade >= 18      // true (maior ou igual?)
      idade <= 65      // true (menor ou igual?)
      \`\`\`
      
      ### IMPORTANTE: == vs ===
      \`\`\`javascript
      "10" == 10       // true (valor igual, tipo ignorado)
      "10" === 10      // false (tipo diferente!)
      \`\`\`
      **SEMPRE use === em vez de ==!**
      
      ### Combinando Comparações
      \`\`\`javascript
      let idade = 20;
      let temCarteira = true;
      
      (idade >= 18) && temCarteira    // true (E)
      (idade >= 18) || temCarteira    // true (OU)
      !(idade < 18)                   // true (NÃO)
      \`\`\`
    `,
    instructions: 'Crie: \`let teste = 15 > 10;\` e \`let teste2 = "abc" === "abc";\`',
    challenge: (input) => (input.includes('let teste = 15 > 10') || input.includes('let teste = true')) && input.includes('let teste2'),
    hint: 'Use > para comparação e === para igualdade'
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
      
      ### Estrutura Hierárquica
      \`\`\`
      game
      ├── Workspace
      │   ├── Part (cubo)
      │   ├── MeuModelo
      │   │   ├── Cabeça
      │   │   └── Corpo
      └── Players
      \`\`\`
      
      ## Propriedades Comuns
      \`\`\`lua
      Part.Transparency = 0.5   -- Invisibilidade (0 = visível, 1 = invisível)
      Part.Position = Vector3.new(0, 5, 0)  -- Mover para x=0, y=5, z=0
      Part.BrickColor = BrickColor.new("Bright red")  -- Mudar cor
      \`\`\`
      
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
      
      ### Eventos Comuns
      \`\`\`lua
      Part.Touched:Connect(function(other)
          print("Algo tocou em mim!")
      end)
      
      Button.MouseButton1Click:Connect(function()
          print("Botão foi clicado!")
      end)
      
      RunService.Heartbeat:Connect(function()
          print("A cada frame do jogo...")
      end)
      \`\`\`
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
      
      ### Tipos Primitivos Principais
      \`\`\`java
      int idade = 25;              // Números inteiros
      double altura = 1.75;        // Números decimais
      boolean estaVivo = true;     // Verdadeiro ou falso
      char letra = 'A';            // Uma letra
      String nome = "João";        // Texto (não é primitivo)
      \`\`\`
      
      ### Por que é mais seguro?
      \`\`\`java
      // JavaScript permite isso (ruim!)
      let x = "10";
      x = x + 5;  // Resultado: "105" (não 15!)
      
      // Java não permite (bom!)
      int x = 10;
      x = x + 5;  // Resultado: 15 (sempre número)
      \`\`\`
      
      **Tente declarar um número inteiro (int):**
      \`int score = 500;\` (Simule no terminal com let score = 500)
    `,
    instructions: 'Declare uma variável simulando Java: \`let score = 500;\`',
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
      
      ### Sem Tipos Explícitos
      \`\`\`python
      idade = 25           # Python entende que é número
      nome = "Maria"       # Python entende que é texto
      ativo = True         # Python entende que é booleano
      \`\`\`
      
      ### Indentação é Importante!
      Em Python, espaços em branco importam:
      \`\`\`python
      if idade > 18:
          print("Você é maior de idade")  # Indentado com 4 espaços
      
      for i in range(5):
          print(i)                        # Indentado com 4 espaços
      \`\`\`
      
      ### Listas e Dicionários
      \`\`\`python
      frutas = ["maçã", "banana", "uva"]  # Lista
      pessoa = {                           # Dicionário
          "nome": "João",
          "idade": 30
      }
      \`\`\`
      
      **Tente criar um texto em Python:**
      \`print("Olá Mundo")\` (No terminal: let msg = "Olá Mundo")
    `,
    instructions: 'Simule um print criando uma variável \`msg\` com o texto "Olá Mundo".',
    challenge: (input) => input.includes('let msg = "Olá Mundo"'),
    hint: 'Use aspas duplas.'
  },
  // --- MASSIVE CURRICULUM SCALING (100 PER TRACK) ---

  // JavaScript Curriculum (200 Lessons - EXPANDED)
  ...Array.from({ length: 200 }).map((_, i) => ({
    id: \`js-\${i + 1}\`,
    title: i < 1 ? 'O Poder das Variáveis' : 
           i < 50 ? \`JavaScript Fundamentos \${i + 1}\` :
           i < 100 ? \`JavaScript Intermediário \${i + 1}\` :
           i < 150 ? \`JavaScript Avançado \${i + 1}\` :
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
