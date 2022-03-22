import styled from 'styled-components';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';
import ContainerApp from '../components/atoms/ContainerApp';
import ContactForm from '../components/Contact/ContactForm';
import IntroPage from '../components/molecules/IntroPage';
import { NextSeo } from 'next-seo';

export default function Contatti() {
  return (
    <AnimatedWrapper>
      <NextSeo
        title="Contattaci per ulteriori informazioni o dubbi | Altrapelle"
        description="Se vuoi avere altre informazioni sui prodotti di Altrapelle puoi chiamare il numero verde 800.913639 o mandare una mail all'indirizzo servizioclienti@difar.it."
      />
      <ContainerApp>
        <IntroPage>Contatti</IntroPage>
        <ContainerPage>
          <p>Altrapelle® è un’esclusiva Difar Distribuzione s.r.l.</p>
          <ContainerSection>
            <p>
              <strong>Sede Operativa</strong>
            </p>
            <p>Via Ciantro 67 c/o Centro Mercantile Sicilia Capannone A8 98057 Milazzo (ME)</p>
            <p>
              Telefono{' '}
              <a href="tel:090.9912376" rel="noopener">
                090.9912376
              </a>
            </p>
            <p>Fax 090.9912753</p>
            <p>P.IVA 03124530837</p>
          </ContainerSection>
          <ContainerSection>
            <p>
              <strong>Servizio Clienti</strong>
            </p>
            <p>
              Per esigenze e richieste relative ai prodotti Altrapelle e-mail:{' '}
              <a href="mailto:servizioclienti@difar.it">servizioclienti@difar.it</a>{' '}
            </p>
            <p>
              Numero Verde{' '}
              <a href="tel:800.913639" rel="noopener">
                800.913639
              </a>
            </p>
          </ContainerSection>
          <ContactForm />
        </ContainerPage>
      </ContainerApp>
    </AnimatedWrapper>
  );
}

const ContainerPage = styled.div`
  margin: 20px 0 80px;
  padding: 10px 20px;
  @media (min-width: 968px) {
    width: 70%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin: 40px auto;
    padding: 40px 80px;
    border-radius: 4px;
  }
`;

const ContainerSection = styled.div`
  margin-top: 30px;
  p {
    line-height: 24px;
  }
`;
