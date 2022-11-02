import styled from 'styled-components';
import Button from '../atoms/Button';
import OverTitleSection from '../atoms/OverTitleSection';
import TitleSection from '../atoms/TitleSection';

export default function About() {
  return (
    <Container>
      <OverTitleSection align="center">IL NOSTRO MODO DI PRENDERCI CURA DI TE</OverTitleSection>
      <TitleSection align="center">Dermatecnologie</TitleSection>
      <P>
        Altrapelle è sinonimo di formulazioni dermatologicamente innovative e testate al fine di
        garantire efficacia e risultati davvero sorprendenti. Soluzioni efficaci adatte alle
        esigenze quotidiane e specifiche di ogni tipo di pelle e non solo.
      </P>
      <Button margin="40px auto 0" href="/le-tue-esigenze">
        Scopri le nostre linee
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.mobileContainer};
`;

const P = styled.p`
  text-align: center;
  position: relative;
  bottom: 20px;
  @media (min-width: 768px) {
    max-width: 50%;
    margin: 0 auto;
  }
`;
