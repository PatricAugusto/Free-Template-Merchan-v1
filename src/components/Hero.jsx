import styled, { keyframes } from 'styled-components';
import { glassTheme } from '../styles/theme';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;   
  position: relative;
  overflow: hidden;    
`;

const Title = styled.h1`
  width: 100%;
  max-width: 900px;
  font-size: clamp(2.2rem, 8vw, 4.5rem);
  font-weight: 200;
  line-height: 1.2;
  z-index: 2;

  strong {
    display: block;
    font-weight: 800;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 20px 0 40px;
  z-index: 2;
`;

const CTAButton = styled.button`
  ${glassTheme.glass}
  padding: 15px 40px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  z-index: 2;
  border-radius: 12px;
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
`;

const Hero = () => (
  <HeroSection id="inicio">
    <GlassSphere size="300px" top="10%" left="-10%" />
    <GlassSphere size="150px" top="60%" left="85%" />
    <Title>Transformando Visões em <strong>Experiências Reais</strong></Title>
    <Subtitle>Estratégias de merchandising de alto impacto que conectam marcas a pessoas.</Subtitle>
    <CTAButton>EXPLORAR PROJETOS</CTAButton>
  </HeroSection>
);

export default Hero;