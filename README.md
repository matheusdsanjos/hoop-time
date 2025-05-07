# Hoop Time: Desenvolvimento de um front-end web para busca de quadras de basquete

Trabalho de Conclusão de Curso (TCC)  
**Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas**  
**Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) - Campus Campinas**

## 🔍 Resumo

**Hoop Time** é um projeto de front-end web desenvolvido com React e TypeScript, que tem como objetivo principal facilitar a busca, avaliação e simulação de agendamentos de quadras de basquete. A proposta surgiu da dificuldade enfrentada por praticantes ao tentar encontrar espaços adequados para a prática esportiva, especialmente em regiões onde o futebol é historicamente priorizado. A aplicação promove a integração entre atletas e administradores de quadras, fomentando a prática esportiva e o uso consciente dos espaços disponíveis.

## 📄 Documentação do TCC

O trabalho completo com fundamentação teórica, objetivos, metodologia e demais seções do TCC pode ser acessado no link abaixo:
[Link para o documento do TCC]

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
src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── styles/           # Temas e estilos globais
├── assets/           # Imagens e arquivos estáticos
├── App.tsx           # Componente principal
└── index.tsx         # Ponto de entrada da aplicação
```

## 👥 Autores

* **Matheus dos Anjos de Oliveira** – Aluno
* **Prof. Ms. Emilio Carlos Rodrigues** – Professor Orientador
