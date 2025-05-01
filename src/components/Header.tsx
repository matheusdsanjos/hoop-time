import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SportsBasketball } from '@mui/icons-material';

// Estilos
const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 1.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.md};
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: all 0.3s ease-in-out;
    z-index: 10;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NavItem = styled.div<{ active: boolean }>`
  a {
    color: ${({ theme, active }) => active ? theme.colors.secondary : 'rgba(255, 255, 255, 0.85)'};
    font-weight: ${({ active }) => active ? '600' : '400'};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

const ActionButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary} !important;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: ${({ theme }) => theme.colors.primaryDark} !important;
    transform: translateY(-2px);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">
          <SportsBasketball />
          <span>Hoop Time</span>
        </Logo>

        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>

        <NavLinks isOpen={isMenuOpen}>
          <NavItem active={isActive('/')}>
            <Link to="/">Início</Link>
          </NavItem>
          <NavItem active={isActive('/quadras')}>
            <Link to="/quadras">Quadras</Link>
          </NavItem>
          <NavItem active={isActive('/mapa')}>
            <Link to="/mapa">Mapa</Link>
          </NavItem>
          <NavItem active={isActive('/login')}>
            <ActionButton to="/login">Entrar</ActionButton>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 