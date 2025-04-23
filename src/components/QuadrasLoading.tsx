import React from 'react';
import styled, { keyframes } from 'styled-components';

interface QuadrasLoadingProps {
  count?: number;
}

const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  height: 100%;
`;

const CardImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const TitleLoader = styled.div`
  height: 24px;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

const TextLoader = styled.div`
  height: 16px;
  width: 40%;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

const FooterLoader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const RatingLoader = styled.div`
  height: 16px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

const ButtonLoader = styled.div`
  height: 30px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0) 100%);
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

const LoadingCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const LoadingCard: React.FC = () => {
  return (
    <CardContainer>
      <CardImage />
      <CardContent>
        <TitleLoader />
        <TextLoader />
        
        <FooterLoader>
          <RatingLoader />
          <ButtonLoader />
        </FooterLoader>
      </CardContent>
    </CardContainer>
  );
};

const QuadrasLoading: React.FC<QuadrasLoadingProps> = ({ count = 6 }) => {
  return (
    <LoadingCardGrid>
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </LoadingCardGrid>
  );
};

export default QuadrasLoading; 