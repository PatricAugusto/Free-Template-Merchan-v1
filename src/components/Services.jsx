import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './AnimatedSection';
import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const ServicesSection = styled.section`
  width: 100%;
  padding: 60px 5%;
  overflow: hidden; 
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 200;
  strong { font-weight: 700; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  ${glassTheme.glass}
  padding: 30px 20px; 
  min-height: 250px;   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.7;
`;

const servicesData = [
  {
    id: 1,
    icon: "🎨",
    title: "Visual Merchandising",
    desc: "Criação de ambientes que contam a história da sua marca e otimizam a jornada de compra."
  },
  {
    id: 2,
    icon: "🚀",
    title: "Branding Ativacional",
    desc: "Transformamos a identidade visual em experiências tangíveis e memoráveis para o consumidor."
  },
  {
    id: 3,
    icon: "🏢",
    title: "Design de PDV",
    desc: "Projetos inovadores para pontos de venda que maximizam a visibilidade e o engajamento."
  },
  {
    id: 4,
    icon: "📱",
    title: "Estratégia Digital",
    desc: "Integração do físico com o digital para uma presença de marca onipresente e coerente."
  }
];

const Services = () => {
  return (
    <ServicesSection id="servicos">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        variants={staggerContainer}
        style={{ width: '100%' }}
      >
        <HeaderContainer as={motion.div} variants={fadeInUp}>
          <Title>Nossas <strong>Soluções</strong></Title>
        </HeaderContainer>

        <Grid>
          {servicesData.map(service => (
            <ServiceCard 
              key={service.id}
              as={motion.div} 
              variants={fadeInUp}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.desc}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
      </motion.div>
    </ServicesSection>
  );
};

export default Services;