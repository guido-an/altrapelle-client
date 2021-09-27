import styled from 'styled-components'
import Image from 'next/image'
import Button from '../atoms/Button'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;


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
           <ScreenContainer>
              <Image src="/home/results.png" width="533" height="218"/>
           </ScreenContainer>
        </Container>

    )
}

const Container = styled.div `
    padding: 0 ${({ theme }) => theme.mobileContainer} 40px;
    margin-top: 80px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color:  ${({ theme }) => theme.colors.backgroundGrey};
    @media(min-width: 968px){
        padding: 0 ${({ theme }) => theme.desktopContainer} 60px;
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
const ScreenContainer = styled.div `
    width: 100%;
    margin: 0 auto;
    @media(min-width: 968px){
        width: 50%
    }
`
