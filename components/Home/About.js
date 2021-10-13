import styled from 'styled-components'
import Button from '../atoms/Button'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'

export default function About () {
  return (
    <Container>
      <OverTitleSection align='center'>
          IL NOSTRO MODI DI PRENDERCI CURA DI TE
      </OverTitleSection>
      <TitleSection align='center'>
              Dermatecnologie
      </TitleSection>
      <P>I prodotti Altrapelle uniscono soluzioni dermatologicamente innovative e scientificamente testate per risultati davvero efficaci.
      </P>
      <Button margin='40px auto 0' href='/macchie-della-pelle'>
              Scopri di più
      </Button>
    </Container>

  )
}

const Container = styled.div`
    padding: 0 ${({ theme }) => theme.mobileContainer};
`

const P = styled.p`
    text-align: center;
    position: relative;
    bottom: 20px;
    @media(min-width: 768px){
        max-width: 50%;
        margin: 0 auto;
    }
`
