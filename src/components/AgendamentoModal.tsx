import React, { useState } from 'react';
import styled from 'styled-components';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  quadraId: number;
  quadraNome: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #e6f4ea;
  color: #1e4620;
  border-radius: 4px;
  margin-top: 1rem;
`;

const AgendamentoModal: React.FC<AgendamentoModalProps> = ({
  isOpen,
  onClose,
  quadraId,
  quadraNome,
}) => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [success, setSuccess] = useState(false);

  const horarios = [
    '08:00', '09:00', '10:00', '11:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de agendamento
    console.log('Agendamento realizado:', {
      quadraId,
      quadraNome,
      data,
      horario,
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setData('');
      setHorario('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Agendar Horário - {quadraNome}</Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="data">Data</Label>
            <Input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="horario">Horário</Label>
            <Select
              id="horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
            >
              <option value="">Selecione um horário</option>
              {horarios.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </Select>
          </FormGroup>

          <Button type="submit">Confirmar Agendamento</Button>
        </Form>

        {success && (
          <SuccessMessage>
            Agendamento realizado com sucesso!
          </SuccessMessage>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AgendamentoModal; 