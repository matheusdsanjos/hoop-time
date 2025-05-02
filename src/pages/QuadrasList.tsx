import React, { useState } from 'react';
import styled from 'styled-components';
import QuadraCard from '../components/QuadraCard';
import QuadrasLoading from '../components/QuadrasLoading';
import Button from '../components/Button';
import { buscarQuadras, BuscaQuadrasParams, bairrosCampinas } from '../api/quadrasApi';

interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
}

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl} 0;
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
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const FiltersContainer = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  margin: -${({ theme }) => theme.spacing.xl} auto ${({ theme }) => theme.spacing.xl};
`;

const FiltersTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const FilterSelect = styled.select`
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

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  color: ${({ theme }) => theme.colors.lightText};
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
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
            Encontre e compare quadras em sua região
          </Subtitle>
        </Container>
      </PageHeader>
      
      <Container>
        <FiltersContainer>
          <FiltersTitle>Filtros</FiltersTitle>
          <FiltersGrid>
            <FilterGroup>
              <FilterLabel htmlFor="bairro">Bairro</FilterLabel>
              <FilterSelect 
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              >
                <option value="">Todos os Bairros</option>
                {bairrosCampinas.map((bairroOption) => (
                  <option key={bairroOption} value={bairroOption}>
                    {bairroOption}
                  </option>
                ))}
              </FilterSelect>
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

            <FilterGroup>
              <FilterLabel htmlFor="ordenacao">Ordenar por</FilterLabel>
              <FilterSelect
                id="ordenacao"
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value as typeof ordenacao)}
              >
                <option value="relevancia">Relevância</option>
                <option value="avaliacao">Melhor Avaliação</option>
                <option value="nome-asc">Nome (A-Z)</option>
                <option value="nome-desc">Nome (Z-A)</option>
              </FilterSelect>
            </FilterGroup>
          </FiltersGrid>
          
          <ButtonContainer>
            <Button onClick={handleBuscar} variant="primary">
              Buscar Quadras
            </Button>
          </ButtonContainer>
        </FiltersContainer>

        {isLoading ? (
          <QuadrasLoading />
        ) : (
          <>
            {isBuscaRealizada && (
              <ResultsContainer>
                {quadras && quadras.length > 0 ? (
                  quadras.map((quadra) => (
                    quadra && <QuadraCard key={quadra.id} quadra={quadra} />
                  ))
                ) : (
                  <NoResults>
                    <h3>Nenhuma quadra encontrada</h3>
                    <p>Tente ajustar os filtros para encontrar mais resultados</p>
                  </NoResults>
                )}
              </ResultsContainer>
            )}
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default QuadrasList; 