import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  min-height: 50vh;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Página não encontrada</ErrorTitle>
      <ErrorMessage>
        Desculpe, a página que você está procurando não existe ou foi removida.
      </ErrorMessage>
      <ButtonContainer>
        <Button as={Link} to="/" variant="primary">
          Voltar ao Início
        </Button>
        <Button as={Link} to="/quadras" variant="outline">
          Explorar Quadras
        </Button>
      </ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFound; 