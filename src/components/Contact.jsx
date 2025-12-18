import styled from 'styled-components';
import { glassTheme } from '../styles/theme';

const ContactCard = styled.div`
  ${glassTheme.glass}
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 25px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  color: white;
  margin-top: 10px;
  outline: none;
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: none;
`;

const Contact = () => (
  <section id="contato">
    <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Contato</h2>
    <ContactCard>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nome</label>
        <Input type="text" placeholder="Seu nome" />
        <br /><br />
        <label>Mensagem</label>
        <TextArea placeholder="Como podemos ajudar?" />
        <button style={{
          width: '100%', padding: '15px', marginTop: '20px', 
          borderRadius: '10px', border: 'none', cursor: 'pointer',
          fontWeight: 'bold', background: 'white', color: '#764ba2'
        }}>ENVIAR</button>
      </form>
    </ContactCard>
  </section>
);

export default Contact;