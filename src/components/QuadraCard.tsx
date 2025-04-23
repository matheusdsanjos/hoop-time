import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

interface QuadraCardProps {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
  disponivel?: boolean;
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
`;

const CardBadge = styled.span<{ tipo: 'publica' | 'privada' }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  background-color: ${({ tipo, theme }) => 
    tipo === 'publica' ? theme.colors.success : theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
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
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
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

const QuadraCard: React.FC<QuadraCardProps> = ({
  id,
  nome,
  bairro,
  tipo,
  avaliacao,
  imagem,
  disponivel = true
}) => {
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
    <CardContainer to={`/quadras/${id}`}>
      <CardImage imageUrl={imagem}>
        <CardBadge tipo={tipo}>
          {tipo === 'publica' ? 'Pública' : 'Privada'}
        </CardBadge>
      </CardImage>
      <CardContent>
        <CardTitle>{nome}</CardTitle>
        <CardLocation>{bairro}</CardLocation>
        
        <CardFooter>
          <Rating>
            <Stars>{renderStars(avaliacao)}</Stars>
            <RatingValue>{avaliacao.toFixed(1)}</RatingValue>
          </Rating>
          
          {tipo === 'privada' && (
            <Button 
              variant="outline" 
              size="small" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Lógica para agendar
              }}
            >
              {disponivel ? 'Agendar' : 'Indisponível'}
            </Button>
          )}
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default QuadraCard; 