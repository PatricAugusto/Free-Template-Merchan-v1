import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './AnimatedSection';
import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const ServicesSection = styled.section`
  padding: 100px 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
`;

const ServiceCard = styled.div`
  ${glassTheme.glass}
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
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