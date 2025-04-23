import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1.1rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterLogo = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => `${theme.spacing.xl} auto 0`};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => `${theme.spacing.md}`};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.lightText};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Hoop Time</FooterLogo>
          <FooterText>
            Sua plataforma para encontrar, agendar e jogar basquete em Campinas.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Links Rápidos</FooterHeading>
          <FooterLink to="/">Início</FooterLink>
          <FooterLink to="/quadras">Quadras</FooterLink>
          <FooterLink to="/mapa">Mapa</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Recursos</FooterHeading>
          <FooterLink to="/sobre">Sobre Nós</FooterLink>
          <FooterLink to="/ajuda">Ajuda</FooterLink>
          <FooterLink to="/termos">Termos de Uso</FooterLink>
          <FooterLink to="/privacidade">Privacidade</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contato</FooterHeading>
          <FooterText>contato@hooptime.com.br</FooterText>
          <FooterText>Campinas, SP</FooterText>
          <FooterText>(19) 99999-9999</FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} Hoop Time. Todos os direitos reservados.</Copyright>
        <SocialLinks>
          <SocialLink href="#" aria-label="Facebook">Facebook</SocialLink>
          <SocialLink href="#" aria-label="Instagram">Instagram</SocialLink>
          <SocialLink href="#" aria-label="Twitter">Twitter</SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 