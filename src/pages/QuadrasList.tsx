import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuadraCard from '../components/QuadraCard';
import BuscaBairro from '../components/BuscaBairro';
import QuadrasLoading from '../components/QuadrasLoading';
import Button from '../components/Button';
import { buscarQuadras, BuscaQuadrasParams } from '../api/quadrasApi';

interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
}

const PageContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
`;

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FiltersContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FiltersTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  font-size: 0.9rem;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.9rem;
  background-color: white;
  outline: none;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ResultsCount = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SortLabel = styled.span`
  font-size: 0.9rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.1rem;
`;

const QuadrasList: React.FC = () => {
  const [quadras, setQuadras] = useState<Quadra[]>([]);
  const [bairro, setBairro] = useState('');
  const [tipo, setTipo] = useState<string>('');
  const [avaliacao, setAvaliacao] = useState('');
  const [ordenacao, setOrdenacao] = useState<'relevancia' | 'avaliacao' | 'nome-asc' | 'nome-desc'>('relevancia');
  const [isLoading, setIsLoading] = useState(false);
  const [isBuscaRealizada, setIsBuscaRealizada] = useState(false);

  // Função para buscar quadras
  const fetchQuadras = async () => {
    setIsLoading(true);
    setIsBuscaRealizada(true);
    
    try {
      const params: BuscaQuadrasParams = {
        bairro,
        tipo,
        avaliacaoMinima: avaliacao ? parseFloat(avaliacao) : undefined,
        ordenacao
      };
      
      const result = await buscarQuadras(params);
      setQuadras(result);
    } catch (error) {
      console.error('Erro ao buscar quadras:', error);
      setQuadras([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuscar = () => {
    fetchQuadras();
  };

  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Quadras de Basquete</Title>
          <Subtitle>
            Encontre e compare quadras em Campinas
          </Subtitle>
        </Container>
      </PageHeader>
      
      <Container>
        <FiltersContainer>
          <FiltersTitle>Filtros</FiltersTitle>
          <FiltersGrid>
            <FilterGroup>
              <FilterLabel htmlFor="bairro">Bairro</FilterLabel>
              <BuscaBairro 
                value={bairro}
                onChange={setBairro}
                placeholder="Digite o nome do bairro"
              />
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel htmlFor="tipo">Tipo de Quadra</FilterLabel>
              <FilterSelect 
                id="tipo" 
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Todos os Tipos</option>
                <option value="publica">Pública</option>
                <option value="privada">Privada</option>
              </FilterSelect>
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel htmlFor="avaliacao">Avaliação Mínima</FilterLabel>
              <FilterSelect 
                id="avaliacao" 
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
              >
                <option value="">Qualquer Avaliação</option>
                <option value="3">3+ estrelas</option>
                <option value="4">4+ estrelas</option>
                <option value="4.5">4.5+ estrelas</option>
              </FilterSelect>
            </FilterGroup>
          </FiltersGrid>
          
          <SearchButtonContainer>
            <Button 
              onClick={handleBuscar}
              size="medium"
              variant="primary"
            >
              Buscar Quadras
            </Button>
          </SearchButtonContainer>
        </FiltersContainer>
        
        {isLoading ? (
          <QuadrasLoading count={6} />
        ) : (
          <>
            {isBuscaRealizada && (
              <ResultsHeader>
                <ResultsCount>{quadras.length} quadras encontradas</ResultsCount>
                <SortContainer>
                  <SortLabel>Ordenar por:</SortLabel>
                  <FilterSelect 
                    value={ordenacao}
                    onChange={(e) => {
                      setOrdenacao(e.target.value as 'relevancia' | 'avaliacao' | 'nome-asc' | 'nome-desc');
                      if (isBuscaRealizada) {
                        // Reordenar resultados ao trocar ordenação
                        setTimeout(() => fetchQuadras(), 0);
                      }
                    }}
                    style={{ width: 'auto' }}
                  >
                    <option value="relevancia">Relevância</option>
                    <option value="avaliacao">Melhor Avaliação</option>
                    <option value="nome-asc">Nome (A-Z)</option>
                    <option value="nome-desc">Nome (Z-A)</option>
                  </FilterSelect>
                </SortContainer>
              </ResultsHeader>
            )}
            
            {isBuscaRealizada && quadras.length === 0 ? (
              <NoResults>
                Nenhuma quadra encontrada com os filtros selecionados.
                <br />
                Tente ajustar seus critérios de busca.
              </NoResults>
            ) : (
              <CardGrid>
                {quadras.map((quadra) => (
                  <QuadraCard
                    key={quadra.id}
                    id={quadra.id}
                    nome={quadra.nome}
                    bairro={quadra.bairro}
                    tipo={quadra.tipo}
                    avaliacao={quadra.avaliacao}
                    imagem={quadra.imagem}
                  />
                ))}
              </CardGrid>
            )}
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default QuadrasList; 