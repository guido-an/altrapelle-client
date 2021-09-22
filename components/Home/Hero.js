import Image from 'next/image'
import styled from 'styled-components'
 
export default function Hero(){
    return(
        <HeroContainer>
           <ImageContainer>
               <Image src="/home/altrapelle-hero-2.jpg" width="1500" height="1595"></Image>
           </ImageContainer>
           <TextContainer>
              <Title weight="600" size="3.5" paddingTop="20px">ADDIO</Title>
              <Title weight="400" size="3.5">MACCHIE</Title>
              <Title weight="400" size="3.5" paddingTop="0px">sulla pelle</Title>
              <IconsContainer>
                  <Image src="/icons/clinicamente-testato.png" width="100" height="100"></Image>
                  <Image src="/icons/dermatologicamente-testato.png" width="100" height="100"></Image>
                  <Image src="/icons/metal-tested.png" width="100" height="100"></Image>
              </IconsContainer>
           </TextContainer>
        </HeroContainer>
    )
}

const HeroContainer = styled.div `
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    @media(min-width: 968px){
       display: flex;
    }
`
const ImageContainer = styled.div `
    @media(min-width: 968px){
       width: 50%;
    }
`
const TextContainer = styled.div `
   @media(min-width: 968px){
       position: relative;
       left: 10%;
       padding-top: 80px;
    }
`
const Title = styled.h1 `
   color: ${({ theme }) => theme.colors.blue};
   line-height: 40%;
   text-align: center;
   font-weight: ${({ weight }) => weight};
   padding-top: ${({ paddingTop }) => paddingTop};
   font-size: ${({ size}) => size}rem;
   @media(min-width: 968px){
      font-size: ${({ size}) => size * 1.4}rem;
      text-align: left;
    }
`

const IconsContainer = styled.div `
    margin: 0 auto;
    padding: 20px 0 60px;
    width: 300px;
   @media(min-width: 768px){
        margin: 0
    }
    
`