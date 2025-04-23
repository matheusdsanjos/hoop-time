# Hoop Time - Plataforma de Quadras de Basquete em Campinas

![Hoop Time](https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80)

Hoop Time é uma plataforma web desenvolvida com React e TypeScript que permite aos usuários encontrar, avaliar e agendar quadras de basquete em Campinas, SP.

## Características

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

## Rodando o Projeto

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (incluído com o Node.js)

### Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/hoop-time.git
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

## Paleta de Cores

- **Primária**: `#FF8C00` (Laranja)
- **Secundária**: `#FFFFFF` (Branco)
- **Texto**: `#333333` (Cinza Escuro)
- **Fundo Alternativo**: `#F8F8F8` (Cinza Muito Claro)
- **Sucesso**: `#43A047` (Verde)

## Design System

O projeto utiliza um Design System próprio com os seguintes componentes:

- **Button**: Botões em várias variações (primário, secundário, outline)
- **QuadraCard**: Cards para exibição de quadras na listagem
- **Header/Footer**: Componentes de navegação e rodapé
- **Elementos de Formulário**: Inputs, selects, etc.

## Fluxo do Usuário

1. Usuário acessa a página inicial
2. Pode pesquisar quadras por localização/tipo
3. Visualiza a lista de quadras ou mapa
4. Acessa detalhes da quadra
5. Para quadras privadas, pode iniciar processo de agendamento

## Desenvolvido Por

Este projeto foi desenvolvido como parte do curso/desafio de desenvolvimento web. 