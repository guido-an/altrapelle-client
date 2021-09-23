import styled from 'styled-components'
import Button from '../atoms/Button'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'

export default function About (){
    return(
        <Container>
          <OverTitleSection align="center">
              LOREM IPSUM DOLORET SIN AMET
          </OverTitleSection>
          <TitleSection align="center">
              Dermatecnologie
          </TitleSection>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae nihil quis qui incidunt atque reprehenderit corrupti. Rem autem odit neque sapiente at, similique tempora libero necessitatibus esse exercitationem architecto.
          </P>
           <Button margin="40px auto 0" href="/altrapelle">
              Il progetto
           </Button>
        </Container>

    )
}

const Container = styled.div `
    padding: 0 ${({ theme }) => theme.mobileContainer};
`

const P = styled.p `
    text-align: center;
    position: relative;
    bottom: 20px;
    @media(min-width: 768px){
        max-width: 50%;
        margin: 0 auto;
    }
`
