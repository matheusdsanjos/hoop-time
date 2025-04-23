import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const MapaContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const FiltersBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: white;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  min-width: 150px;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const MapContainer = styled.div`
  height: 600px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const MapPlaceholder = styled.div`
  text-align: center;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const MapPlaceholderTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.3rem;
`;

const MapPlaceholderText = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const MapIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const Mapa: React.FC = () => {
  return (
    <MapaContainer>
      <PageHeader>
        <Container>
          <Title>Mapa de Quadras</Title>
          <Subtitle>
            Encontre quadras de basquete em Campinas em nosso mapa interativo
          </Subtitle>
        </Container>
      </PageHeader>
      
      <Container>
        <FiltersBar>
          <FilterSelect defaultValue="">
            <option value="">Todos os Bairros</option>
            <option value="taquaral">Taquaral</option>
            <option value="cambui">Cambuí</option>
            <option value="barao-geraldo">Barão Geraldo</option>
            <option value="centro">Centro</option>
          </FilterSelect>
          
          <FilterSelect defaultValue="">
            <option value="">Tipo de Quadra</option>
            <option value="publica">Pública</option>
            <option value="privada">Privada</option>
          </FilterSelect>
          
          <FilterSelect defaultValue="">
            <option value="">Classificação</option>
            <option value="5">5 estrelas</option>
            <option value="4">4+ estrelas</option>
            <option value="3">3+ estrelas</option>
          </FilterSelect>
          
          <FilterSelect defaultValue="">
            <option value="">Disponibilidade</option>
            <option value="hoje">Hoje</option>
            <option value="semana">Esta semana</option>
            <option value="sempre">Sempre aberta</option>
          </FilterSelect>
        </FiltersBar>
        
        <MapContainer>
          <MapPlaceholder>
            <MapIcon>🗺️</MapIcon>
            <MapPlaceholderTitle>
              Mapa de Quadras
            </MapPlaceholderTitle>
            <MapPlaceholderText>
              Aqui seria integrado o Google Maps ou outra API de mapas para mostrar as quadras de basquete em Campinas.
            </MapPlaceholderText>
            <Button>Ativar localização</Button>
          </MapPlaceholder>
        </MapContainer>
        
      </Container>
    </MapaContainer>
  );
};

export default Mapa; 