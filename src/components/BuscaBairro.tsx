import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { bairrosCampinas } from '../api/quadrasApi';

interface BuscaBairroProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
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

const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.small} ${({ theme }) => theme.borderRadius.small};
  z-index: 10;
  padding: 0;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const SuggestionItem = styled.li<{ isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  list-style: none;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.backgroundAlt : 'white'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const NoResults = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`;

const BuscaBairro: React.FC<BuscaBairroProps> = ({ 
  value, 
  onChange, 
  placeholder = "Digite o nome do bairro" 
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Atualiza as sugestões quando o valor do input muda
  useEffect(() => {
    if (inputValue.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = bairrosCampinas.filter(bairro => 
      bairro.toLowerCase().includes(inputValue.toLowerCase())
    );
    
    setSuggestions(filtered);
  }, [inputValue]);

  // Detecta clique fora do componente para fechar sugestões
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setShowSuggestions(true);
    setActiveIndex(-1);
  };

  const handleInputBlur = () => {
    // Pequeno atraso para permitir que o clique na sugestão seja processado
    setTimeout(() => {
      onChange(inputValue);
    }, 200);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    onChange(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Navegação com teclado
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => prev > 0 ? prev - 1 : 0);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const clearInput = () => {
    setInputValue('');
    onChange('');
    setShowSuggestions(false);
  };

  return (
    <Container ref={containerRef}>
      <InputWrapper>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        {inputValue && (
          <ClearButton onClick={clearInput} type="button">
            ✕
          </ClearButton>
        )}
      </InputWrapper>
      
      {showSuggestions && suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={suggestion}
              isActive={index === activeIndex}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
      
      {showSuggestions && inputValue && suggestions.length === 0 && (
        <SuggestionsList>
          <NoResults>Nenhum bairro encontrado</NoResults>
        </SuggestionsList>
      )}
    </Container>
  );
};

export default BuscaBairro; 