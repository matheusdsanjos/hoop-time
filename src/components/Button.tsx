import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// Constantes para valores reutilizáveis
const BORDER_WIDTH = '2px';
const TRANSITION_DURATION = '0.3s';
const HOVER_TRANSFORM = 'translateY(-2px)';
const ACTIVE_TRANSFORM = 'translateY(0)';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  isWhiteOutline?: boolean;
  as?: React.ElementType;
  to?: string;
}

// Estilos base compartilhados
const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${TRANSITION_DURATION} ease;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  text-decoration: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 31, 84, 0.3);
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    opacity: 0.7;
  }
`;

// Estilos de tamanho
const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: 0.875rem;
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: 1rem;
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: 1.125rem;
  `
};

const ButtonStyles = css<ButtonProps>`
  ${baseButtonStyles}

  /* Tamanhos */
  ${({ size = 'medium' }) => sizeStyles[size]}

  /* Variantes */
  ${({ variant, theme, isWhiteOutline }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.primary};
            border: ${BORDER_WIDTH} solid ${theme.colors.primary};
            transform: ${HOVER_TRANSFORM};
          }
          
          &:active:not(:disabled) {
            transform: ${ACTIVE_TRANSFORM};
          }
          
          &:disabled {
            background-color: ${theme.colors.border};
          }
        `;

      case 'secondary':
        return css`
          background-color: white;
          color: ${theme.colors.primary};
          border: ${BORDER_WIDTH} solid ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            border: ${BORDER_WIDTH} solid ${theme.colors.secondary};
            transform: ${HOVER_TRANSFORM};
          }
          
          &:active:not(:disabled) {
            transform: ${ACTIVE_TRANSFORM};
          }
          
          &:disabled {
            border-color: ${theme.colors.border};
            color: ${theme.colors.lightText};
          }
        `;

      case 'outline':
        return css`
          background-color: transparent;
          color: ${isWhiteOutline ? 'white' : theme.colors.primary};
          border: ${BORDER_WIDTH} solid ${isWhiteOutline ? 'white' : theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${isWhiteOutline ? 'white' : theme.colors.secondary};
            color: ${theme.colors.primary};
            transform: ${HOVER_TRANSFORM};
          }
          
          &:active:not(:disabled) {
            transform: ${ACTIVE_TRANSFORM};
          }
          
          &:disabled {
            border-color: ${theme.colors.border};
            color: ${theme.colors.lightText};
          }
        `;

      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
          
          &:hover:not(:disabled) {
            color: ${theme.colors.secondary};
            background-color: ${theme.colors.primary};
            border-radius: ${theme.borderRadius.small};
            transform: ${HOVER_TRANSFORM};
          }
          
          &:active:not(:disabled) {
            transform: ${ACTIVE_TRANSFORM};
          }
          
          &:disabled {
            color: ${theme.colors.lightText};
          }
        `;

      default:
        return '';
    }
  }}

  /* Largura total */
  ${({ fullWidth }) => 
    fullWidth && css`
      width: 100%;
    `}
    
  /* Loading state */
  ${({ isLoading }) => 
    isLoading && css`
      color: transparent !important;
      pointer-events: none;
      
      &::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        top: 50%;
        left: 50%;
        margin: -0.5rem 0 0 -0.5rem;
        border-radius: 50%;
        border: ${BORDER_WIDTH} solid currentColor;
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
  const commonProps = {
    variant,
    size,
    fullWidth,
    isLoading,
    isWhiteOutline,
    'aria-busy': isLoading,
    disabled: props.disabled || isLoading,
    ...props
  };

  if (as === RouterLink || to) {
    return (
      <StyledLink
        to={to || ''}
        {...commonProps}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      as={as}
      {...commonProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 