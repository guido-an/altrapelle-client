import React, { useTheme } from 'styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import OverTitleSection from '../atoms/OverTitleSection';
import TitleSection from '../atoms/TitleSection';

export default function Problem() {
  const theme = useTheme();
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/home/iperpigmentazione.jpg"
          alt="faccia di donna con lente per osservare iperpigmentazione"
          width="700"
          height="530"
        />
      </ImageContainer>
      <TextContainer>
        <OverTitleSection align="left">COME SCEGLIERE IL PRODOTTO PIÙ ADATTO</OverTitleSection>
        <TitleSection align="left">I nostri valori</TitleSection>
        <p>
          <strong>SICUREZZA ED EFFICACIA</strong>
        </p>
        <p>
          Ricerca e sviluppo formulativo senza compromessi. Utilizziamo i migliori ingredienti e
          materiali per ottimizzare sempre l’efficacia dei nostri prodotti.
        </p>
        <p>
          <strong>QUALITÀ</strong>
        </p>
        <p>
          I nostri prodotti vengono sottoposti a numerosi test per garantire la massima efficacia e
          tollerabilità dei prodotti Altrapelle.
        </p>
        <p>
          <strong>SOLUZIONI PER ESIGENZE QUOTIDIANE E SPECIFICHE</strong>
        </p>
        <p>
          Amiamo i nostri prodotti e prenderci cura delle tue esigenze ed è per questo che
          sviluppiamo le nostre formule sempre mirate a risolvere specifiche problematiche della
          pelle.
        </p>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 120px 0 0;
  padding: 40px ${({ theme }) => theme.mobileContainer} 60px;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (min-width: 768px) {
    display: flex;
    padding: 60px ${({ theme }) => theme.desktopContainer} 80px;
  }
`;
const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 60%;
    position: relative;
    top: 45px;
  }
`;
const TextContainer = styled.div`
  margin: 0 ${({ theme }) => theme.mobileContainer};
  @media (min-width: 768px) {
    position: relative;
    left: 80px;
    width: 50%;
    bottom: 40px;
  }
`;
const P = styled.p`
  text-align: left;
  position: relative;
  bottom: 20px;
`;
