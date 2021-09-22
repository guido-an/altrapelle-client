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
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias ullam nihil? Dolor excepturi esse quo deserunt quod! Omnis, fugit.</P>
            <Button margin="40px auto 0">
                ALTRA PELLE
             </Button>
        </Container>

    )
}

const Container = styled.div `
    background-color: #fff;
    
`
const P = styled.p `
    text-align: center;
    padding: 0 ${({ theme }) => theme.mobileContainer};
    position: relative;
    bottom: 20px;
    @media(min-width: 768px){
        max-width: 60%;
        margin: 0 auto;
    }
`
