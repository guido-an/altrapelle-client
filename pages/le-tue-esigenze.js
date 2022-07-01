import styled from 'styled-components';
import Image from 'next/image';
import ContainerApp from '../components/atoms/ContainerApp';
import IntroPage from '../components/molecules/IntroPage';
import OverFooter from '../components/molecules/OverFooter';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';
import { NextSeo } from 'next-seo';
import DisplayProducts from '../components/molecules/DisplayProducts';
import productService from '../services/productService';

const service = new productService();

export const getStaticProps = async () => {
  return {
    props: { products: await service.getAllProducts() },
  };
};

export default function LeTueEsigenze({ products }) {
  return (
    <AnimatedWrapper>
      <NextSeo
        title="Macchie Scure sulla Pelle: cause e come eliminarle | Altrapelle"
        description="Scatenate da vari fattori, le macchie scure sulla pelle rappresentano un'inestetismo che colpisce principalmente il viso, il seno, il decolleté e il dorso delle mani."
      />
      <ContainerApp>
        <IntroPage>Macchie scure sulla pelle</IntroPage>
        <SecondContainer>
          <FirstSectionContainer>
            <Title>
              FATTORI SCATENANTI <SpanTitle>dell'iperpigmentazione cutanea</SpanTitle>
            </Title>
            <IconsContainer>
              <IconContainer>
                <Image
                  src="/icons/macchie-della-pelle/cambiamenti-ormonali.png"
                  alt="icona cambiamenti ormonali"
                  width="180"
                  height="180"
                />
                <TitleIcon>CAMBIAMENTI</TitleIcon>
                <TitleIcon>ORMONALI</TitleIcon>
              </IconContainer>
              <IconContainer>
                <Image
                  src="/icons/macchie-della-pelle/esposizione-solare.png"
                  alt="icona esposizione solare"
                  width="180"
                  height="180"
                />
                <TitleIcon>ESPOSIZIONE</TitleIcon>
                <TitleIcon>SOLARE</TitleIcon>
              </IconContainer>
              <IconContainer>
                <Image
                  src="/icons/macchie-della-pelle/invecchiamento-cutaneo.png"
                  alt="icona invecchiamento cutaneo"
                  width="180"
                  height="180"
                />
                <TitleIcon>INVECCHIAMENTO</TitleIcon>
                <TitleIcon>CUTANEO</TitleIcon>
              </IconContainer>
              <IconContainer>
                <Image
                  src="/icons/macchie-della-pelle/patologie-metaboliche.png"
                  alt="icona patologie metaboliche"
                  width="180"
                  height="180"
                />
                <TitleIcon>PATOLOGIE</TitleIcon>
                <TitleIcon>METABOLICHE</TitleIcon>
              </IconContainer>
            </IconsContainer>
          </FirstSectionContainer>
          <Title>
            CAUSE <SpanTitle>della formazione delle macchie scure</SpanTitle>
          </Title>
          <ImageCausesContainer>
            <Image
              src="/macchie-della-pelle/cause-formazione-macchie-scure.png"
              alt="infografica su cause della formazione delle macchie scure sulla pelle"
              width="1234"
              height="667"
            />
          </ImageCausesContainer>
          <CausesTextContainer>
            <CausesText>
              La melanina è prodotta dai melanociti nello strato basale dell’epidermide. I fattori
              scatenanti, tra cui i raggi UV, innescano la formazione di{' '}
              <strong>radicali liberi</strong>.
            </CausesText>
            <CausesText>
              I raggi UV, unitamente ai radicali liberi, innescano l’azione agenti biologici che
              agiscono sulle cellule
              <strong> produttrici di pigmenti</strong>, chiamate melanociti, stimolando la
              produzione dell’<strong> enzima Tirosinasi</strong>.
            </CausesText>
            <CausesText>
              La Tirosinasi induce la produzione di
              <strong> Melanina</strong>, a partire dal precursone Tirosina, che viene trasferita
              dai melanociti ai cheratinociti sulla superfi cie cutanea conferendo{' '}
              <strong>colore scuro</strong> ad alcune zone cutanee.
            </CausesText>
          </CausesTextContainer>
        </SecondContainer>
        <Image
          src="/products/trattamento-in-combinata/screen-trattamento-in-combinata.png"
          alt="infografica trattamento in combinata"
          width="1820"
          height="800"
        ></Image>
        <Title>L'esperto consiglia il trattamento </Title>
        <DisplayProducts products={products} chooseProducts={true} ids={['1', '2', '3', '4']} />
        <div style={{ marginBottom: '60px' }} />
        <IntroPage>Impurità</IntroPage>
        <p style={{ marginBottom: '40px' }}>
          Non c’è BEAUTY ROUTINE che si rispetti senza detersione ed esfoliazione. Sono i primi e
          fondamentali step di ogni ROUTINE, senza i quali non si può procedere con gli amatissimi
          PRODOTTI DI SKINCARE. Pongono le basi per il corretto utilizzo e ASSORBIMENTO di ogni
          prodotto utilizzato negli step successivi.{' '}
        </p>
        <Image
          src="/le-tue-esigenze/detergente-routine-anti-impurità.png"
          alt="infografica trattamento in combinata"
          width="1820"
          height="880"
        ></Image>
        <Title>L'esperto consiglia il trattamento </Title>
        <DisplayProducts products={products} chooseProducts={true} ids={['6', '7']} />
        <div style={{ marginBottom: '60px' }} />
        <IntroPage>Luminosità</IntroPage>
        <p style={{ marginBottom: '40px' }}>
          La sinergia tra un detergente dedicato ed un peeling illuminante, consente di rinnovare la
          pelle CONTRASTANDO COLORITO SPENTO E L’OPACITÀ. Aggiungi il corretto concentrato di attivi
          in forma di siero, per RISVEGLIARE la pelle e renderla subito PIÙ RADIOSA, DONANDO UN
          BOOST DI LUMINOSITÀ QUOTIDIANO.
        </p>
        <Image
          src="/le-tue-esigenze/peeling-routine-luminosità.png"
          alt="peeling routine luminosità"
          width="1820"
          height="880"
        ></Image>
        <Title>L'esperto consiglia il trattamento </Title>
        <DisplayProducts products={products} chooseProducts={true} ids={['6', '7']} />
        <div style={{ marginBottom: '60px' }} />
        <IntroPage>Idratante anti-età</IntroPage>
        <p style={{ marginBottom: '40px' }}>
          La crema viso crea un film idrolipidico con una FUNZIONE BARRIERA che protegge la pelle e
          PREVIENE LA PERDITA DI ACQUA che causerebbe secchezza, desquamazione e rughe più evidenti.
          L’arricchimento con acido ialuronico contribuisce ad un EFFETTO IDRATANTE MULTILIVELLO a
          lungo termine.
        </p>
        <Image
          src="/le-tue-esigenze/routine-anti-age.png"
          alt="peeling routine luminosità"
          width="1820"
          height="880"
        ></Image>
        <Title>L'esperto consiglia il trattamento </Title>
        <DisplayProducts products={products} chooseProducts={true} ids={['6', '8', '9']} />
        <div style={{ marginBottom: '60px' }} />
      </ContainerApp>
      <OverFooter />
    </AnimatedWrapper>
  );
}

const SecondContainer = styled.div`
  margin-top: 10px;
  padding: 0 0 80px;
  @media (min-width: 968px) {
    margin: 10px ${({ theme }) => theme.desktopContainer};
    padding: 0;
  }
`;

// Title section
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

  @media (min-width: 768px) {
    bottom: 0;
  }
`;
// Reasons
const FirstSectionContainer = styled.div`
  @media (min-width: 768px) {
    position: relative;
    top: 10px;
  }
`;
const IconsContainer = styled.div`
  margin-top: 20px;
  width: 180px;
  margin: 0 auto;
  @media (min-width: 968px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const IconContainer = styled.div`
  & h3:nth-child(3) {
    position: relative;
    bottom: 50px;
  }
`;
const TitleIcon = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
  position: relative;
  bottom: 30px;
  font-size: 1.1rem;
  text-align: center;
`;
const ImageCausesContainer = styled.div`
  @media (min-width: 968px) {
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    border-radius: 4px;
    padding: 20px;
  }
`;
// Causes
const CausesTextContainer = styled.div`
  @media (min-width: 968px) {
    display: flex;
    justify-content: space-between;
  }
`;
const CausesText = styled.p`
  font-size: 0.8rem;
  line-height: 23px;
  @media (min-width: 968px) {
    max-width: 30%;
  }
`;
