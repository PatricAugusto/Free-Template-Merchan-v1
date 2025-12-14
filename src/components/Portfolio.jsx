import { useRef } from 'react';
import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const Section = styled.section`
  padding: 80px 0; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 40px;
  letter-spacing: 1px;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  overflow-x: auto;
  padding: 20px 10%; 
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory; 

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const NavButton = styled.button`
  ${glassTheme.glass}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.direction === 'left' ? 'left: 5%;' : 'right: 5%;'}

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Card = styled.div`
  ${glassTheme.glass}
  min-width: 350px; 
  padding: 25px;
  transition: transform 0.4s ease;
  cursor: pointer;
  scroll-snap-align: center; 
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    transform: scale(1.02);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 480px) {
    min-width: 280px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  border: 1px dashed rgba(255, 255, 255, 0.1);
`;

const ProjectInfo = styled.div`
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ProjectCategory = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #a0aec0;
`;

const projects = [
  { id: 1, title: "Campanha de Verão", category: "Varejo" },
  { id: 2, title: "Lançamento Tech", category: "Eventos" },
  { id: 3, title: "Visual Merchandising", category: "Moda" },
  { id: 4, title: "Branding Ativacional", category: "Corporativo" },
  { id: 5, title: "Exposição Galeria", category: "Arte" },
];

const Portfolio = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    const scrollAmount = 380; 

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Section>
      <SectionTitle>Projetos em Destaque</SectionTitle>
      
      <CarouselWrapper>
        <NavButton direction="left" onClick={() => scroll('left')}>‹</NavButton>
        
        <CarouselContainer ref={carouselRef}>
          {projects.map((project) => (
            <Card key={project.id}>
              <div style={{
                height: '250px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px dashed rgba(255,255,255,0.1)'
              }}>
                <span style={{opacity: 0.3}}>Preview {project.id}</span>
              </div>
              <h3 style={{fontWeight: '500', marginTop: '10px'}}>{project.title}</h3>
              <p style={{opacity: 0.6, fontSize: '0.8rem', letterSpacing: '1px'}}>{project.category}</p>
            </Card>
          ))}
        </CarouselContainer>

        <NavButton direction="right" onClick={() => scroll('right')}>›</NavButton>
      </CarouselWrapper>
    </Section>
  );
};

export default Portfolio;