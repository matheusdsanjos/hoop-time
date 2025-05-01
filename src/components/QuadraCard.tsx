import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
  disponivel?: boolean;
  horarioFuncionamento?: string;
  endereco?: string;
}

interface QuadraCardProps {
  quadra: Quadra;
}

const CardContainer = styled(Link)`
  display: block;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CardImage = styled.div<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const CardBadge = styled.span<{ tipo: 'publica' | 'privada' }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  background-color: ${({ tipo }) => 
    tipo === 'publica' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(46, 173, 87, 0.95)'};
  color: ${({ tipo }) => 
    tipo === 'publica' ? '#333' : 'white'};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(4px);
  box-shadow: ${({ tipo }) => 
    tipo === 'publica' 
      ? '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
      : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ tipo }) => 
      tipo === 'publica'
        ? '0 4px 6px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
        : '0 4px 6px rgba(0, 0, 0, 0.15)'};
  }

  span {
    font-size: 1rem;
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const CardLocation = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
`;

const RatingValue = styled.span`
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-weight: 600;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const QuadraCard: React.FC<QuadraCardProps> = ({ quadra }) => {
  // Função para renderizar estrelas
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }

    if (hasHalfStar) {
      stars.push('☆');
    }

    while (stars.length < 5) {
      stars.push('☆');
    }

    return stars.join('');
  };

  return (
    <CardContainer to={`/quadras/${quadra.id}`}>
      <CardImage 
        imageUrl={quadra.imagem}
        role="img"
        aria-label={`Foto da quadra ${quadra.nome}`}
      >
        <CardBadge tipo={quadra.tipo}>
          {quadra.tipo === 'publica' ? (
            <>
              <span>❤️</span>
              Pública
            </>
          ) : (
            <>
              <span>💰</span>
              Privada
            </>
          )}
        </CardBadge>
      </CardImage>
      <CardContent>
        <CardTitle>{quadra.nome}</CardTitle>
        <CardLocation>{quadra.bairro}</CardLocation>
        
        <CardInfo>
          {quadra.horarioFuncionamento && (
            <span>Horário: {quadra.horarioFuncionamento}</span>
          )}
          {quadra.endereco && (
            <span>Endereço: {quadra.endereco}</span>
          )}
        </CardInfo>
        
        <CardFooter>
          <Rating>
            <Stars aria-label={`Avaliação: ${quadra.avaliacao} estrelas`}>
              {renderStars(quadra.avaliacao)}
            </Stars>
            <RatingValue>{quadra.avaliacao.toFixed(1)}</RatingValue>
          </Rating>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default QuadraCard; 