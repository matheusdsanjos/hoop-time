// API simulada para dados de quadras de basquete em Campinas
import quadraTaquaral from '../assets/images/quadra-parque-taquaral.png';
import quadraFlamboyant from '../assets/images/quadra-flamboyant.png';
import quadraParqueEcologico from '../assets/images/quadra-parque-ecologico.png';
import quadraVilaIapi from '../assets/images/quadra-vila-iapi.png';
import quadraPontePreta from '../assets/images/quadra-ponte-preta.png';
import quadraGuarani from '../assets/images/quadra-guarani.png';
import quadraAcademiaBodytech from '../assets/images/quadra-bodytech-dom-pedro.png';
import quadraSociedadeHicipica from '../assets/images/quadra-sociedade-hipica.png';
import quadraFaculdadeEducaçãoFisica from '../assets/images/quadra-faculdade-educacao-fisica.png';
import quadraGinasioMultidisciplinar from '../assets/images/quadra-ginasio-multidisciplinar.png';
import quadraTenisClube from '../assets/images/quadra-tenis-clube.png';
import quadraClubeConcordia from '../assets/images/quadra-clube-concordia.png';


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
    bairro: "Vila Brandina",
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
    bairro: "Jardim Guarani",
    tipo: "privada",
    avaliacao: 4.9,
    endereco: "Avenida Imperatriz Dona Tereza Cristina, 11 - Jardim Guarani",
    imagem: quadraGuarani,
  },
  {
    id: 7,
    nome: "Quadra na Academia Bodytech Campinas Dom Pedro",
    bairro: "Jardim Santa Genebra",
    tipo: "privada",
    avaliacao: 3.8,
    endereco: "Avenida Guilherme Campos, 500 - Jardim Santa Genebra",
    imagem: quadraAcademiaBodytech,
  },
  {
    id: 8,
    nome: "Quadra na Sociedade Hípica de Campinas",
    bairro: "Jardim das Palmeiras",
    tipo: "privada",
    avaliacao: 4.6,
    endereco: "Rua Buriti, s/n - Bairro das Palmeiras",
    imagem: quadraSociedadeHicipica,
  },
  {
    id: 9,
    nome: "Quadra na Faculdade de Educação Física da Unicamp",
    bairro: "Cidade Universitária",
    tipo: "publica",
    avaliacao: 2,
    endereco: "Avenida Érico Veríssimo, 701 - Cidade Universitária Zeferino Vaz",
    imagem: quadraFaculdadeEducaçãoFisica,
  },
  {
    id: 10,
    nome: "Quadra do Ginásio Multidisciplinar da Unicamp",
    bairro: "Cidade Universitária",
    tipo: "publica",
    avaliacao: 4.3,
    endereco: " Rua Elis Regina, 101 - Cidade Universitária",
    imagem: quadraGinasioMultidisciplinar,
  },
  {
    id: 11,
    nome: "Quadra do Tênis Clube de Campinas",
    bairro: "Cambuí",
    tipo: "privada",
    avaliacao: 4.0,
    endereco: "Rua Coronel Quirino, 1346 - Cambuí",
    imagem: quadraTenisClube,
  },
  {
    id: 12,
    nome: "Quadra do Clube Concórdia",
    bairro: "Vila Brandina",
    tipo: "privada",
    avaliacao: 3.9,
    endereco: "Rodovia Heitor Penteado, s/n - Vila Brandina",
    imagem: quadraClubeConcordia,
  }
];

// Lista de bairros de Campinas para autocompletar
export const bairrosCampinas = [
  "Taquaral",
  "Cambuí",
  "Cidade Universitária",
  "Vila Brandina",
  "Jardim Guarani",
  "Jardim Santa Genebra",
  "Jardim das Palmeiras",
  "Jardim Proença",
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