import styled from 'styled-components';
import ContainerApp from '../components/atoms/ContainerApp';
import IntroPage from '../components/molecules/IntroPage';
import DisplayProducts from '../components/molecules/DisplayProducts';
import productService from '../services/productService';
import OverFooter from '../components/molecules/OverFooter';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';
import { NextSeo } from 'next-seo';

const service = new productService();

export const getStaticProps = async () => {
  return {
    props: { products: await service.getAllProducts() },
  };
};

export default function Tenless({ products }) {
  return (
    <AnimatedWrapper>
      <NextSeo
        title="Iperpigmentazione Cutanea: cos'è e come risolverla | Altrapelle"
        description="L'iperpigmentazione cutanea è una patologia che rende, in alcuni tratti, la pelle più scura. Scopri cosa la determina e come curarla grazie ai nostri prodotti. "
      />
      <ContainerApp>
        <IntroPage>Iperpigmentazione cutanea</IntroPage>
        <Container>
          <Title>Il problema.</Title>
          <SpanTitle>Iperpigmentazione cutanea</SpanTitle>
          <p>
            L'iperpigmentazione si manifesta quando fattori interni o esterni possono causare un
            aumento nella produzione di melanina.
          </p>
          <p>
            Di conseguenza può comparire un'alterazione del colore della pella più frequentemente
            sulle parti esposte al sole.
          </p>
          <p>Ci sono diverse forme di iperpigmentazione come:</p>
          <ul>
            <li>macchie dell'età e lentigini</li>
            <li>il melasma</li>
            <li>l'iperpigmentazione post-infiammatoria (PIPA)</li>
          </ul>
          <ProblemContainer>
            <div>
              <ProblemTitle>MACCHIE DELL'ETÀ</ProblemTitle>
              <ProblemText>
                Piccole zone della cute in cui si manifesta una maggiore pigmentazione, vale a dire
                un'anomala concentrazione di melanociti. La loro misura va dai pochi millimitri a
                macchie circolari di diametro sino a 1 cm. Sono solitamente concentrate nella stessa
                zona della cute, con più frequenza sul dorso delle mani, sul volto, sulle spalle e
                sulle braccia.
              </ProblemText>
            </div>
            <div>
              <ProblemTitle>MELASMA</ProblemTitle>
              <ProblemText>
                Inestetismo cutaneoo che colpisce sopratutto le persone di sesso femminile e in
                minor percenutale gli uomini. Esso si manifesta solitamente nelle zone delle guance,
                della fronte, del labbro superiore e del mento. Può presentarsi come un insieme di
                macchie dal colore marrone chiaro o più scuro oppure come un'area più estesa e dai
                contorni irregolari.{' '}
              </ProblemText>
            </div>
            <div>
              <ProblemTitle>POST-INFIAMMATORIA</ProblemTitle>
              <ProblemText>
                L'iperpigmentazione post-infiammatoria si manifesta spesso dopo l'acne. Quando si
                verifica un'infiammazione della pelle, la melanina viene rilasciata e l'eccesso di
                pigmento provoca l'iperpigmentazione. Sulla pelle rimangono macchie piatte piatte,
                rosa, rosse o marroni. Sebbene la luce solare non provochi l'iperpigmentazione
                post-infiammatoria, può peggiorarne le manifestazioni.
              </ProblemText>
            </div>
          </ProblemContainer>
          <Title>La soluzione.</Title>
          <SpanTitle>Trattamento antimacchie e Booster illuminante.</SpanTitle>
        </Container>
        <DisplayProducts products={products} />
      </ContainerApp>
      <OverFooter />
    </AnimatedWrapper>
  );
}

const Container = styled.div`
  @media (min-width: 968px) {
  }
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
  margin-top: 30px;
  @media (min-width: 968px) {
    margin-top: 40px;
  }
`;
const SpanTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  font-size: 1.3rem;
  position: relative;
  bottom: 20px;
`;

const ProblemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  margin-top: 40px;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  p {
    color: #fff;
  }
  div {
    margin-bottom: 40px;
  }
  @media (min-width: 968px) {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    div {
      margin: 0 20px;
    }
  }
`;
const ProblemTitle = styled.h2`
  font-weight: 500;
  font-size: 1.1rem;
  color: #fff;
`;
const ProblemText = styled.p`
  font-weight: 400;
`;
