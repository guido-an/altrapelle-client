import styled from 'styled-components'
import Image from 'next/image'
import Button from '../atoms/Button'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'

export default function BeforeAndAfter (){
    return(
        <Container>
           <TextContainer>
               <OverTitleSection align="left">
                  LOREM IPSUM DOLORET SIN AMET
              </OverTitleSection>
              <TitleSection align="left">
                  Prima e dopo
              </TitleSection>
              <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</P>
           </TextContainer>
           <ImagesContainer>
              <ImageContainer>
                  <Image src="/home/prima-e-dopo-clinica.png" width="1000" height="440"/>
              </ImageContainer>
              <ImageContainer>
                  <Image src="/home/prima-e-dopo-siero.png" width="1000" height="440"/>
              </ImageContainer>
           </ImagesContainer>
        </Container>

    )
}

const Container = styled.div `
    padding: 0 ${({ theme }) => theme.mobileContainer} 40px;
    margin-top: 80px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    @media(min-width: 968px){
        margin: 0 ${({ theme }) => theme.desktopContainer};
    }
`

const TextContainer = styled.div `
    position: relative;
    left: 40px;
`
const P = styled.p `
    position: relative;
    bottom: 20px;
   
`
const ImageContainer = styled.div `
    width: 100%
`
const ImagesContainer = styled.div `
    @media(min-width: 968px){
        display: flex;
    }
`
