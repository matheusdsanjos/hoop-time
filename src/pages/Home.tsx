import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuadraCard from '../components/QuadraCard';
import Button from '../components/Button';
import { buscarQuadras } from '../api/quadrasApi';

interface Quadra {
  id: number;
  nome: string;
  bairro: string;
  tipo: 'publica' | 'privada';
  avaliacao: number;
  imagem: string;
}

// Estilos
const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.pexels.com/photos/18460191/pexels-photo-18460191/free-photo-of-basketball-field-during-sunset.jpeg');
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
  line-height: 1.5;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    margin-top: ${({ theme }) => theme.spacing.xl};
    order: 2;
  }
`;

const AboutContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const AboutList = styled.ul`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  list-style: none;
  padding: 0;
`;

const AboutListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  
  &::before {
    content: "•";
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    top: -0.2em;
  }
`;

const Home: React.FC = () => {
  const [quadrasDestaque, setQuadrasDestaque] = useState<Quadra[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuadrasDestaque = async () => {
      setIsLoading(true);
      try {
        const quadras = await buscarQuadras({
          avaliacaoMinima: 4.0,
          ordenacao: 'avaliacao'
        });
        setQuadrasDestaque(quadras.slice(0, 3));
      } catch (error) {
        console.error('Erro ao buscar quadras em destaque:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuadrasDestaque();
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Bem-vindo ao Hoop Time</HeroTitle>
          <HeroSubtitle>
            A plataforma completa para buscar informações sobre quadras de basquete em sua região.
            Conecte-se com a comunidade e encontre os melhores locais para jogar.
          </HeroSubtitle>
          <HeroButtons>
            <Button as={Link} to="/quadras" size="large">
              Explorar Quadras
            </Button>
            <Button as={Link} to="/mapa" variant="outline" size="large" isWhiteOutline>
              Ver no Mapa
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <Container>
          <AboutContainer>
            <AboutContent>
              <AboutTitle>Sobre o Hoop Time</AboutTitle>
              <AboutText>
                O Hoop Time nasceu da paixão pelo basquete e da necessidade de facilitar o acesso ao basquete. 
                Nossa plataforma foi criada para conectar jogadores a espaços de qualidade, 
                sejam eles públicos ou privados.
              </AboutText>
              <AboutText>
                Nosso objetivo é fomentar a prática esportiva e criar uma comunidade ativa de jogadores de basquete,
                facilitando o acesso à informação sobre locais para jogar e seus recursos.
              </AboutText>
              <AboutList>
                <AboutListItem>Cadastro completo de quadras públicas e privadas em toda a cidade</AboutListItem>
                <AboutListItem>Sistema de avaliação e comentários para melhorar a experiência de todos</AboutListItem>
                <AboutListItem>Agendamento online para quadras privadas com confirmação imediata</AboutListItem>
                <AboutListItem>Informações detalhadas sobre estrutura, horários e preços</AboutListItem>
              </AboutList>
            </AboutContent>
            <AboutImage>
              <img 
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Jogadores de basquete"
              />
            </AboutImage>
          </AboutContainer>
        </Container>
      </AboutSection>

      <Section>
        <Container>
          <SectionTitle>Por que escolher o Hoop Time?</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>Encontre Quadras</FeatureTitle>
              <FeatureDescription>
                Localize as melhores quadras próximas a você com nosso sistema
                de busca inteligente. Filtre por bairro, tipo e avaliação.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📅</FeatureIcon>
              <FeatureTitle>Agende Online</FeatureTitle>
              <FeatureDescription>
                Reserve seu horário em quadras privadas com apenas alguns
                cliques, sem complicações. Receba confirmação imediata.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>⭐</FeatureIcon>
              <FeatureTitle>Avalie e Compartilhe</FeatureTitle>
              <FeatureDescription>
                Contribua com a comunidade compartilhando suas experiências e
                avaliações. Ajude outros jogadores a encontrar os melhores locais.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Quadras em Destaque</SectionTitle>
          <CardGrid>
            {isLoading ? (
              <p>Carregando quadras em destaque...</p>
            ) : (
              quadrasDestaque.map((quadra) => (
                <QuadraCard
                  key={quadra.id}
                  quadra={quadra}
                />
              ))
            )}
          </CardGrid>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button as={Link} to="/quadras" variant="secondary">
              Ver Todas as Quadras
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>Pronto para encontrar sua quadra?</CTATitle>
          <CTADescription>
            Junte-se à comunidade de basquete de Campinas e descubra as melhores
            quadras para jogar na cidade.
          </CTADescription>
          <ActionButtonsContainer>
            <Button
              as={Link}
              to="/quadras"
              variant="secondary"
              size="large"
            >
              Buscar Quadras
            </Button>
            <Button
              as={Link}
              to="/mapa"
              variant="outline"
              size="large"
              isWhiteOutline
            >
              Abrir Mapa
            </Button>
          </ActionButtonsContainer>
        </Container>
      </CTASection>
    </>
  );
};

export default Home; 