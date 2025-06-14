# Hoop Time: Desenvolvimento de um front-end web para busca de quadras de basquete

Trabalho de Conclusão de Curso (TCC)  
**Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas**  
**Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) - Campus Campinas**

## 🔍 Resumo

Resumo: O basquete, historicamente relegado a segundo plano em relação ao futebol no Brasil, enfrentou desafios significativos em sua infraestrutura, resultando em escassez de espaços adequados para sua prática. Este trabalho teve como objetivo desenvolver um modelo front-end web para mapeamento e agendamento de quadras de basquete. Foram utilizadas tecnologias modernas, como React e TypeScript, com foco em boas práticas de desenvolvimento web. A metodologia adotada baseou-se na prototipagem de interfaces, visando validar e refinar a proposta visual e funcional da aplicação. A plataforma é voltada especialmente a praticantes amadores e entusiastas do basquete, que buscam facilidade para encontrar e reservar quadras disponíveis em suas regiões. Ela permite localizar quadras próximas, visualizar informações detalhadas, realizar agendamentos e compartilhar avaliações, contribuindo para a democratização do acesso ao esporte. A arquitetura do sistema foi projetada de forma modular e escalável, permitindo futura integração com um back-end para expansão das funcionalidades. A implementação de tecnologias digitais mostrou-se uma ferramenta eficaz para superar as barreiras históricas de infraestrutura do basquete no país, oferecendo uma solução prática e acessível que promove o acesso ao esporte e a inclusão social.

## 🎥 Demonstração

### Versão Desktop
Veja o Hoop Time em ação na versão para computador:

[🖥️ **Assistir Demonstração Desktop no YouTube**](https://youtu.be/c9Xb9F-xo30)

### Versão Mobile (Responsiva)
Confira como a aplicação se adapta perfeitamente ao smartphone:

[📱 **Assistir Demonstração Mobile no YouTube**](https://youtube.com/shorts/uU2PlQoSOyo)

## 📄 Monografia

O trabalho completo com fundamentação teórica, objetivos, metodologia e demais seções do TCC pode ser acessado no link abaixo:

[Clique aqui para acessar a monografia](https://github.com/matheusdsanjos/hoop-time/blob/main/Entrega/TCC.pdf)

## 🚀 Como Rodar o Projeto

### Pré-requisitos

* Node.js (v14.x ou superior)
* npm (instalado com o Node.js)

### Instalação do Node.js e npm

#### Windows
1. Acesse o [site oficial do Node.js](https://nodejs.org/)
2. Baixe a versão LTS (Long Term Support) recomendada
3. Execute o instalador e siga as instruções do assistente de instalação
4. Para verificar a instalação, abra o Prompt de Comando e digite:
   ```
   node --version
   npm --version
   ```

#### macOS
**Opção 1: Instalador**
1. Acesse o [site oficial do Node.js](https://nodejs.org/)
2. Baixe a versão LTS (Long Term Support) para macOS
3. Execute o instalador e siga as instruções

**Opção 2: Homebrew**
1. Instale o Homebrew caso ainda não tenha (execute no Terminal):
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Instale o Node.js:
   ```
   brew install node
   ```
3. Verifique a instalação:
   ```
   node --version
   npm --version
   ```

#### Linux (Ubuntu/Debian)
**Opção 1: Apt**
```
sudo apt update
sudo apt install nodejs npm
```

**Opção 2: NodeSource**
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

**Opção 3: NVM (Node Version Manager)**
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install --lts
```

Verifique a instalação:
```
node --version
npm --version
```

### Instalação do Projeto

1. Clone este repositório:
   ```
   git clone https://github.com/matheusdsanjos/hoop-time.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd hoop-time
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

5. Abra http://localhost:3000 no seu navegador para ver a aplicação.

## 🗂️ Estrutura do Projeto

```
hoop-time/
├── public/                    # Arquivos públicos acessíveis diretamente pelo navegador
├── src/                       # Código fonte da aplicação
│   ├── api/                   # Serviços e funções para comunicação com APIs
│   ├── assets/                # Arquivos estáticos (imagens, fontes, etc.)
│   ├── components/            # Componentes React reutilizáveis
│   ├── pages/                 # Componentes de página/tela completa
│   ├── styles/                # Estilos globais e configurações de tema
│   ├── types/                 # Definições de tipos TypeScript
│   ├── App.tsx                # Componente principal que define rotas
│   ├── index.tsx              # Ponto de entrada da aplicação React
│   └── styled.d.ts            # Definições de tipos para styled-components
├── .gitignore                 # Arquivos ignorados pelo Git
├── package-lock.json          # Versões exatas das dependências (npm)
├── package.json               # Configuração do projeto e dependências
├── README.md                  # Documentação do projeto
└── tsconfig.json              # Configuração do TypeScript
```

## 👥 Autores

* **Matheus dos Anjos de Oliveira** – Aluno
* **Prof. Ms. Emilio Carlos Rodrigues** – Professor Orientador
