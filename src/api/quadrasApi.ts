// API simulada para dados de quadras de basquete em Campinas
import quadraTaquaral from '../assets/images/quadra-parque-taquaral.png';
import quadraFlamboyant from '../assets/images/quadra-flamboyant.png';
import quadraParqueEcologico from '../assets/images/quadra-parque-ecologico.png';
import quadraVilaIapi from '../assets/images/quadra-vila-iapi.png';
import quadraPontePreta from '../assets/images/quadra-ponte-preta.png';


interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
  endereco?: string;
  disponivel?: boolean;
}

// Banco de dados simulado com mais quadras
const quadrasDatabase: Quadra[] = [
  {
    id: 1,
    nome: "Quadra do Parque Portugal",
    bairro: "Taquaral",
    tipo: "publica",
    avaliacao: 4.5,
    endereco: "Av. Heitor Penteado, 1146 - Parque Taquaral",
    imagem: quadraTaquaral,
  },
  {
    id: 2,
    nome: "Quadra da Praça Omar Cardoso",
    bairro: "Jardim Flamboyant",
    tipo: "publica",
    avaliacao: 4.8,
    endereco: "Rua Salesópolis, 756 - Jardim Flamboyant",
    imagem: quadraFlamboyant,
  },
  {
    id: 3,
    nome: "Quadra do Parque Ecológico de Campinas",
    bairro: "Barão Geraldo",
    tipo: "publica",
    avaliacao: 3.7,
    endereco: "Avenida Heitor Penteado, km 3 - Vila Brandina",
    imagem: quadraParqueEcologico,
  },
  {
    id: 4,
    nome: "Quadra da Praça Carlos Zara",
    bairro: "Ponte Preta",
    tipo: "publica",
    avaliacao: 4.2,
    endereco: "Avenida da Saudade, 247 - Ponte Preta",
    imagem: quadraPontePreta,
  },
  {
    id: 5,
    nome: "Quadra da Sociedade Beneficiente dos Amigos da Vila Iapi",
    bairro: "Vila Iapi",
    tipo: "publica",
    avaliacao: 3.5,
    endereco: "Rua Almir Carneiro Silva, 220 - Vila Iapi",
    imagem: quadraVilaIapi,
  },
  {
    id: 6,
    nome: "Quadra no Guarani Futebol Clube",
    bairro: "Cambuí",
    tipo: "privada",
    avaliacao: 4.9,
    endereco: "R. Maria Monteiro, 1650 - Cambuí",
    imagem: "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 7,
    nome: "Praça de Esportes",
    bairro: "Jardim Chapadão",
    tipo: "publica",
    avaliacao: 3.8,
    endereco: "R. Itatiba, 380 - Jardim Chapadão",
    imagem: "https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 8,
    nome: "Sport Center",
    bairro: "Jardim das Paineiras",
    tipo: "privada",
    avaliacao: 4.6,
    endereco: "Av. José de Souza Campos, 1750 - Jardim das Paineiras",
    imagem: "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    nome: "Quadra Comunitária",
    bairro: "Taquaral",
    tipo: "publica",
    avaliacao: 3.2,
    endereco: "R. Paula Bueno, 1000 - Taquaral",
    imagem: "https://images.unsplash.com/photo-1551285635-bef669e035b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 10,
    nome: "Recreativo Campinas",
    bairro: "Jardim Proença",
    tipo: "privada",
    avaliacao: 4.3,
    endereco: "R. Santos Dumont, 870 - Jardim Proença",
    imagem: "https://images.unsplash.com/photo-1517747614396-d21the5e5f9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 11,
    nome: "Quadra do Parque Linear",
    bairro: "Barão Geraldo",
    tipo: "publica",
    avaliacao: 4.0,
    endereco: "Av. Albino José Barbosa de Oliveira, 1000 - Barão Geraldo",
    imagem: "https://images.unsplash.com/photo-1617914309185-9e63b3badfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 12,
    nome: "Ginásio Poliesportivo",
    bairro: "Centro",
    tipo: "publica",
    avaliacao: 3.9,
    endereco: "Av. Campos Sales, 650 - Centro",
    imagem: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  }
];

// Lista de bairros de Campinas para autocompletar
export const bairrosCampinas = [
  "Taquaral",
  "Cambuí",
  "Barão Geraldo",
  "Vila Iapi",
  "Jardim Flamboyant",
  "Centro",
  "São Bernardo",
  "Jardim Chapadão",
  "Jardim das Paineiras",
  "Jardim Proença",
  "Bosque",
  "Botafogo",
  "Castelo",
  "Nova Campinas",
  "Ponte Preta",
  "Vila Industrial",
  "Guanabara",
  "São Quirino"
];

// Simula um atraso de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Interface para os parâmetros de busca
export interface BuscaQuadrasParams {
  bairro?: string;
  tipo?: 'publica' | 'privada' | string;
  avaliacaoMinima?: number;
  ordenacao?: 'relevancia' | 'avaliacao' | 'nome-asc' | 'nome-desc';
}

// Função para buscar quadras com filtros
export const buscarQuadras = async (params: BuscaQuadrasParams): Promise<Quadra[]> => {
  // Simula delay de rede
  await delay(800);
  
  let resultado = [...quadrasDatabase];
  
  // Filtra por bairro (se especificado)
  if (params.bairro && params.bairro.trim() !== '') {
    resultado = resultado.filter(quadra => 
      quadra.bairro.toLowerCase().includes(params.bairro!.toLowerCase())
    );
  }
  
  // Filtra por tipo (se especificado)
  if (params.tipo && params.tipo.length > 0) {
    resultado = resultado.filter(quadra => quadra.tipo === params.tipo);
  }
  
  // Filtra por avaliação mínima (se especificado)
  if (params.avaliacaoMinima && params.avaliacaoMinima > 0) {
    resultado = resultado.filter(quadra => quadra.avaliacao >= params.avaliacaoMinima!);
  }
  
  // Ordenação
  if (params.ordenacao) {
    switch(params.ordenacao) {
      case 'avaliacao':
        resultado.sort((a, b) => b.avaliacao - a.avaliacao);
        break;
      case 'nome-asc':
        resultado.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'nome-desc':
        resultado.sort((a, b) => b.nome.localeCompare(a.nome));
        break;
      // Relevância é a ordenação padrão (não faz nada)
      default:
        break;
    }
  }
  
  return resultado;
};

// Função para buscar uma quadra específica
export const buscarQuadraPorId = async (id: number): Promise<Quadra | null> => {
  await delay(500);
  
  const quadra = quadrasDatabase.find(q => q.id === id);
  return quadra || null;
};

const quadrasApi = {
  buscarQuadras,
  buscarQuadraPorId,
  bairrosCampinas
};

export default quadrasApi; 