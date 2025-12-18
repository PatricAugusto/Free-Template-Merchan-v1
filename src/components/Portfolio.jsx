import styled, { keyframes } from 'styled-components';
import { glassTheme } from '../styles/theme';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-350px * 5 - 30px * 5)); } 
`;

const Section = styled.section`
  padding: 80px 0;
  overflow: hidden; 
  width: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 30px;
  width: max-content; 
  animation: ${scroll} 30s linear infinite; 

  &:hover {
    animation-play-state: paused; 
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: auto;
  padding: 20px 0;
  justify-content: flex-start; 
  
  &::-webkit-scrollbar { display: none; }
`;

const Card = styled.div`
  ${glassTheme.glass}
  min-width: 350px;
  height: 400px;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin-bottom: 15px;
`;

const projects = [
  { id: 1, title: "Marca Gamma", cat: "Branding" },
  { id: 2, title: "Projeto Alfa", cat: "Varejo" },
  { id: 3, title: "Evento Beta", cat: "Eventos" },
  { id: 4, title: "Design High", cat: "Digital" },
  { id: 5, title: "Agência M", cat: "Merchandising" },
];

const Portfolio = () => {
  // Duplicamos a lista para o loop parecer infinito
  const doubledProjects = [...projects, ...projects];

  return (
    <Section id="portfolio">
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Portfólio</h2>
      <CarouselTrack>
        {doubledProjects.map((item, index) => (
          <Card key={index}>
            <ImageBox />
            <h3>{item.title}</h3>
            <p style={{ opacity: 0.6 }}>{item.cat}</p>
          </Card>
        ))}
      </CarouselTrack>
    </Section>
  );
};

export default Portfolio;