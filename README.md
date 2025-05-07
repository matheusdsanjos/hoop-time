# Hoop Time - Plataforma de Quadras de Basquete em Campinas

## Trabalho de Conclusão de Curso (TCC)
### Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
### Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) - Campus Campinas

## Resumo

O Hoop Time é modelo front-end web desenvolvido com React e TypeScript que visa facilitar a localização, avaliação e agendamento de quadras de basquete. O projeto busca resolver o problema da dificuldade de encontrar espaços adequados para a prática do basquete, promovendo a integração entre praticantes e proprietários de quadras.

## Objetivos

### Objetivo Geral
Desenvolver uma plataforma web que facilite a localização e agendamento de quadras de basquete, promovendo a prática do esporte e a integração da comunidade.

### Objetivos Específicos
- Implementar um sistema de busca e filtragem de quadras por localização e características
- Desenvolver um sistema de avaliação e comentários para as quadras
- Criar um módulo de agendamento online para quadras privadas
- Implementar um mapa interativo para visualização das quadras
- Desenvolver uma interface responsiva e acessível

## Justificativa

A prática de esportes é fundamental para a saúde e bem-estar da população. No entanto, muitos praticantes de basquete enfrentam dificuldades para encontrar espaços adequados para a prática do esporte. Esta plataforma visa solucionar este problema, promovendo a democratização do acesso às quadras de basquete e fomentando a prática esportiva.

## Características Técnicas

- **Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops
- **Busca de Quadras**: Filtragem por bairro, tipo de quadra e avaliação
- **Mapa Interativo**: Visualização das quadras em um mapa da cidade
- **Perfis de Quadras**: Informações detalhadas, fotos e avaliações
- **Agendamento Online**: Para quadras privadas que oferecem este serviço
- **Interface Moderna**: Design minimalista com paleta de cores em branco e laranja

## Tecnologias Utilizadas

- React 18
- TypeScript
- React Router v6
- Styled Components
- Design System próprio

## Metodologia

O desenvolvimento do projeto seguirá a metodologia ágil Scrum, com sprints de duas semanas e reuniões diárias de acompanhamento. O processo de desenvolvimento incluirá:

1. Análise de requisitos
2. Prototipação
3. Desenvolvimento iterativo
4. Testes de usabilidade
5. Implementação e deploy

## Rodando o Projeto

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (incluído com o Node.js)

### Instalação

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

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── styles/           # Estilos globais e tema
├── assets/           # Imagens e recursos estáticos
├── App.tsx           # Componente principal
└── index.tsx         # Ponto de entrada
```

## Design System

O projeto utiliza um Design System próprio com os seguintes componentes:

- **Button**: Botões em várias variações (primário, secundário, outline)
- **QuadraCard**: Cards para exibição de quadras na listagem
- **Header/Footer**: Componentes de navegação e rodapé
- **Elementos de Formulário**: Inputs, selects, etc.

## Autores

- Matheus dos Anjos de Oliveira - Aluno
- Prof. Ms. Emilio Carlos Rodrigues - Professor Orientador 
