import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import { buscarQuadraPorId } from '../api/quadrasApi';

interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
  endereco?: string;
}

interface Comment {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  height: 500px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Badge = styled.div<{ tipo: 'publica' | 'privada' }>`
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

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.1rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const RatingValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

const Description = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Amenities = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AmenityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const SidebarCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: ${({ theme }) => theme.spacing.lg};
  align-self: start;
  position: sticky;
  top: ${({ theme }) => theme.spacing.xl};
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InfoLabel = styled.span`
  font-weight: 600;
  width: 80px;
  flex-shrink: 0;
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.error};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const CommentSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const CommentForm = styled.form`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const RatingInput = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StarButton = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ isActive, theme }) => isActive ? theme.colors.warning : theme.colors.lightText};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: inherit;
  resize: vertical;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CommentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CommentAuthor = styled.div`
  font-weight: 600;
`;

const CommentDate = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
`;

const CommentRating = styled.div`
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CommentText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const QuadraDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quadra, setQuadra] = useState<Quadra | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "João Silva",
      rating: 4,
      text: "Ótima quadra! Sempre bem cuidada e com boa iluminação.",
      date: "2024-03-15"
    },
    {
      id: 2,
      author: "Maria Santos",
      rating: 5,
      text: "Uma das melhores quadras da região. Recomendo!",
      date: "2024-03-14"
    }
  ]);
  
  const abrirNoMapa = () => {
    if (quadra?.endereco) {
      const enderecoFormatado = encodeURIComponent(quadra.endereco);
      window.open(`https://www.google.com/maps/search/?api=1&query=${enderecoFormatado}`, '_blank');
    } else {
      const localizacaoFormatada = encodeURIComponent(`${quadra?.bairro}, Campinas - SP`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${localizacaoFormatada}`, '_blank');
    }
  };
  
  useEffect(() => {
    const fetchQuadra = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const quadraId = parseInt(id, 10);
        const result = await buscarQuadraPorId(quadraId);
        
        if (result) {
          setQuadra(result);
          setError(null);
        } else {
          setError('Quadra não encontrada');
        }
      } catch (err) {
        console.error('Erro ao buscar detalhes da quadra:', err);
        setError('Ocorreu um erro ao carregar os detalhes da quadra');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchQuadra();
  }, [id]);
  
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
  
  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRating === 0) {
      alert('Por favor, selecione uma avaliação antes de enviar seu comentário.');
      return;
    }
    if (!commentText.trim()) {
      alert('Por favor, escreva um comentário antes de enviar.');
      return;
    }

    const newComment: Comment = {
      id: comments.length + 1,
      author: "Usuário Anônimo",
      rating: userRating,
      text: commentText,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([newComment, ...comments]);
    setCommentText('');
    setUserRating(0);
  };
  
  if (isLoading) {
    return (
      <PageContainer>
        <Container>
          <LoadingContainer>
            Carregando detalhes da quadra...
          </LoadingContainer>
        </Container>
      </PageContainer>
    );
  }
  
  if (error || !quadra) {
    return (
      <PageContainer>
        <Container>
          <ErrorContainer>
            <h2>Oops!</h2>
            <p>{error || 'Não foi possível encontrar a quadra solicitada.'}</p>
            <Button as={Link} to="/quadras" variant="primary">
              Voltar para lista de quadras
            </Button>
          </ErrorContainer>
        </Container>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <Container>
        <BackLink to="/quadras">← Voltar para lista de quadras</BackLink>
        
        <ImageContainer>
          <Image src={quadra.imagem} alt={quadra.nome} />
          <Badge tipo={quadra.tipo}>
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
          </Badge>
        </ImageContainer>
        
        <DetailContent>
          <div>
            <Title>{quadra.nome}</Title>
            <Location>{quadra.endereco || `${quadra.bairro}, Campinas - SP`}</Location>
            
            <Rating>
              <RatingValue>{quadra.avaliacao.toFixed(1)}</RatingValue>
              <Stars>{renderStars(quadra.avaliacao)}</Stars>
            </Rating>
            
            <Description>
              <h2>Sobre esta quadra</h2>
              <p>
                {quadra.tipo === 'publica' 
                  ? `${quadra.nome} é uma quadra pública localizada no bairro ${quadra.bairro}. Esta quadra é de livre acesso para a comunidade e é um ótimo lugar para jogos casuais de basquete.`
                  : `${quadra.nome} é uma quadra privada localizada no bairro ${quadra.bairro}. Esta quadra oferece uma estrutura de qualidade para jogos e treinos de basquete, sendo necessário agendamento prévio.`
                }
              </p>
              <p>
                {quadra.tipo === 'publica'
                  ? 'Como é um espaço público, recomenda-se trazer seu próprio equipamento e água. A quadra pode estar ocupada em horários de pico.'
                  : 'Por ser um espaço privado, a quadra oferece manutenção regular e equipamentos em bom estado. Consulte os horários disponíveis e valores para agendamento.'
                }
              </p>
            </Description>
            
            <Amenities>
              <h2>Características</h2>
              <AmenitiesList>
                <AmenityItem>Quadra oficial</AmenityItem>
                <AmenityItem>Tabelas e aros em bom estado</AmenityItem>
                {quadra.tipo === 'publica' ? (
                  <>
                    <AmenityItem>Acesso gratuito</AmenityItem>
                    <AmenityItem>Iluminação básica</AmenityItem>
                  </>
                ) : (
                  <>
                    <AmenityItem>Vestiários</AmenityItem>
                    <AmenityItem>Estacionamento</AmenityItem>
                    <AmenityItem>Água mineral disponível</AmenityItem>
                    <AmenityItem>Iluminação profissional</AmenityItem>
                  </>
                )}
              </AmenitiesList>
            </Amenities>
          </div>
          
          <SidebarCard>
            <CardTitle>Informações de Contato</CardTitle>
            <ContactInfo>
              <InfoRow>
                <InfoLabel>Bairro:</InfoLabel>
                <InfoValue>{quadra.bairro}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Endereço:</InfoLabel>
                <InfoValue>{quadra.endereco || 'Não disponível'}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Telefone:</InfoLabel>
                <InfoValue>{quadra.tipo === 'privada' ? '(19) 3XXX-XXXX' : 'N/A'}</InfoValue>
              </InfoRow>
            </ContactInfo>
            
            <ButtonGroup>
              {quadra.tipo === 'privada' ? (
                <>
                  <Button variant="primary" fullWidth>Agendar Horário</Button>
                  <Button variant="outline" fullWidth>Solicitar Informações</Button>
                </>
              ) : (
                <Button variant="primary" fullWidth onClick={abrirNoMapa}>Ver no Mapa</Button>
              )}
            </ButtonGroup>
          </SidebarCard>
        </DetailContent>
        
        <CommentSection>
          <h2>Avaliações e Comentários</h2>
          
          <CommentForm onSubmit={handleCommentSubmit}>
            <RatingInput>
              <Label>Sua avaliação:</Label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    type="button"
                    isActive={star <= userRating}
                    onClick={() => handleRatingClick(star)}
                  >
                    ★
                  </StarButton>
                ))}
              </div>
            </RatingInput>
            
            <TextArea
              placeholder="Escreva seu comentário aqui..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            
            <Button type="submit" variant="primary">
              Enviar Avaliação
            </Button>
          </CommentForm>
          
          <CommentList>
            {comments.map((comment) => (
              <CommentCard key={comment.id}>
                <CommentHeader>
                  <CommentAuthor>{comment.author}</CommentAuthor>
                  <CommentDate>{comment.date}</CommentDate>
                </CommentHeader>
                <CommentRating>
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < comment.rating ? '★' : '☆'}
                    </span>
                  ))}
                </CommentRating>
                <CommentText>{comment.text}</CommentText>
              </CommentCard>
            ))}
          </CommentList>
        </CommentSection>
      </Container>
    </PageContainer>
  );
};

export default QuadraDetail; 