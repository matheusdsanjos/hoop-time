import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  isWhiteOutline?: boolean;
  as?: React.ElementType;
  to?: string;
}

const ButtonStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  
  /* Tamanhos */
  ${({ size, theme }) => 
    size === 'small' && css`
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: 0.875rem;
    `}
  
  ${({ size, theme }) => 
    size === 'medium' && css`
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      font-size: 1rem;
    `}
  
  ${({ size, theme }) => 
    size === 'large' && css`
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: 1.125rem;
    `}
  
  /* Variantes */
  ${({ variant, theme }) => 
    variant === 'primary' && css`
      background-color: ${theme.colors.primary};
      color: white;
      
      &:hover {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
      
      &:disabled {
        background-color: ${theme.colors.border};
        cursor: not-allowed;
        transform: none;
      }
    `}
  
  ${({ variant, theme }) => 
    variant === 'secondary' && css`
      background-color: white;
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
      
      &:disabled {
        border-color: ${theme.colors.border};
        color: ${theme.colors.lightText};
        cursor: not-allowed;
        transform: none;
      }
    `}
  
  ${({ variant, theme, isWhiteOutline }) => 
    variant === 'outline' && css`
      background-color: transparent;
      color: ${isWhiteOutline ? 'white' : theme.colors.primary};
      border: 1px solid ${isWhiteOutline ? 'white' : theme.colors.primary};
      
      &:hover {
        background-color: ${isWhiteOutline ? 'white' : theme.colors.secondary};
        color: ${theme.colors.primary};
      }
      
      &:disabled {
        border-color: ${theme.colors.border};
        color: ${theme.colors.lightText};
        cursor: not-allowed;
      }
    `}
  
  ${({ variant, theme }) => 
    variant === 'text' && css`
      background-color: transparent;
      color: ${theme.colors.primary};
      padding-left: ${theme.spacing.sm};
      padding-right: ${theme.spacing.sm};
      
      &:hover {
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.primary};
        border-radius: ${theme.borderRadius.small};
      }
      
      &:disabled {
        color: ${theme.colors.lightText};
        cursor: not-allowed;
      }
    `}
  
  /* Largura total */
  ${({ fullWidth }) => 
    fullWidth && css`
      width: 100%;
    `}
    
  /* Loading state */
  ${({ isLoading }) => 
    isLoading && css`
      position: relative;
      color: transparent !important;
      
      &::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-right-color: transparent;
        animation: spin 0.8s linear infinite;
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyles}
`;

const StyledLink = styled(RouterLink)<ButtonProps>`
  ${ButtonStyles}
  text-decoration: none;
`;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  isLoading = false,
  isWhiteOutline = false,
  as,
  to,
  ...props 
}) => {
  if (as === RouterLink || to) {
    return (
      <StyledLink
        to={to || ''}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        isWhiteOutline={isWhiteOutline}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      isWhiteOutline={isWhiteOutline}
      as={as}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 