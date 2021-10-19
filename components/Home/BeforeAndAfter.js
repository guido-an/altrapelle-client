import styled from 'styled-components'
import Image from 'next/image'
import Button from '../atoms/Button'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const percentage = 66

export default function BeforeAndAfter () {
  return (
    <Container>
      <TextContainer>
        <OverTitleSection align='left'>
                  CLINICAMENTE TESTATI
        </OverTitleSection>
        <TitleSection align='left'>
                  Efficacia Altrapelle
        </TitleSection>
        <P>I risultati clinici della linea Altrapelle Tenless.</P>
      </TextContainer>
      <ImagesContainer>
        <ImageContainer>
          <Image src='/home/prima-e-dopo-clinica.png' width='1000' height='440' />
          <p>Studio cosmeto-clinico, efficacia depigmentante, % soddisfazione da autovalutazione dell’effetto sulla pelle, 25 volontarie, 30 giorni di trattamento con Altrapelle TENLESS TRATTAMENTO ANTI-MACCHIE, 2 volte al giorno</p>
        </ImageContainer>
        <ImageContainer>
          <Image src='/home/prima-e-dopo-siero.png' width='1000' height='440' />
          <p>Studio cosmeto-clinico, % soddisfazione riduzione visibilità macchie cutanee, 20 volontarie, 60 giorni di trattamento con Altrapelle TENLESS BOOSTER ILLUMINANTE, 2 volte al giorno</p>
        </ImageContainer>
      </ImagesContainer>
    </Container>

  )
}

const Container = styled.div`
    padding: 0 ${({ theme }) => theme.mobileContainer} 40px;
    margin-top: 80px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color:  ${({ theme }) => theme.colors.backgroundGrey};
    @media(min-width: 968px){
        padding: 0 ${({ theme }) => theme.desktopContainer} 60px;
    }
`

const TextContainer = styled.div`
    position: relative;
    left: 40px;
`
const P = styled.p`
    position: relative;
    bottom: 20px;
   
`
const ImageContainer = styled.div`
    width: 100%
`
const ImagesContainer = styled.div`
     p {
       margin-bottom: 40px;
     }
    @media(min-width: 968px){
        display: flex;
        justify-content: space-evenly;
        p {
          margin: 0 20px;
        }
    }
`
