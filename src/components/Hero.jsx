import styled, { keyframes } from 'styled-components';
import { glassTheme } from '../styles/theme';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden; 
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 200;
  line-height: 1.1;
  margin-bottom: 20px;
  z-index: 2;

  strong {
    font-weight: 800;
    display: block;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 600px;
  margin-bottom: 40px;
  z-index: 2;
`;

const CTAButton = styled.button`
  ${glassTheme.glass}
  padding: 15px 40px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
`;

const GlassSphere = styled.div`
  ${glassTheme.glass}
  position: absolute;
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const Hero = () => {
  return (
    <HeroSection>
      <GlassSphere size="300px" top="-50px" left="10%" delay="0s" />
      <GlassSphere size="150px" top="60%" left="80%" delay="2s" />
      
      <Title>
        Transformando Visões em <strong>Experiências Reais</strong>
      </Title>
      <Subtitle>
        Estratégias de merchandising de alto impacto que conectam marcas a pessoas através do design minimalista.
      </Subtitle>
      <CTAButton>Explorar Projetos</CTAButton>
    </HeroSection>
  );
};

export default Hero;