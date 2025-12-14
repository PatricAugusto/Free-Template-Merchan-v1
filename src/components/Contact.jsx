import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const ContactSection = styled.section`
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContactCard = styled.div`
  ${glassTheme.glass}
  width: 100%;
  max-width: 600px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 300;
  opacity: 0.8;
  margin-left: 5px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  color: white;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: white;
  color: #764ba2; 
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <ContactSection id="contato">
      <Title>Vamos criar algo <strong>memorável?</strong></Title>
      <ContactCard>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome</Label>
            <Input type="text" placeholder="Seu nome completo" required />
          </FormGroup>

          <FormGroup>
            <Label>E-mail</Label>
            <Input type="email" placeholder="seu@email.com" required />
          </FormGroup>

          <FormGroup>
            <Label>Mensagem</Label>
            <TextArea placeholder="Conte-nos sobre o seu projeto..." required />
          </FormGroup>

          <SubmitButton type="submit">Enviar Proposta</SubmitButton>
        </Form>
      </ContactCard>
    </ContactSection>
  );
};

export default Contact;