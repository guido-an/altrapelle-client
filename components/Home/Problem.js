import React, { useTheme } from 'styled-components'
import styled from 'styled-components'
import Link from 'next/link'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'
import Image from 'next/image'

export default function Problem (){
    const theme = useTheme()
    return(
        <Container>
           <ImageContainer>
               <Image src="/home/iperpigmentazione.jpg" width="700" height="530"></Image>
           </ImageContainer>
            <TextContainer>
               <OverTitleSection align="left">
                   LOREM IPSUM DOLORET SIN AMET
               </OverTitleSection>
               <TitleSection align="left">
                   Macchie sulla pelle
               </TitleSection>
               <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora perspiciatis, accusantium delectus sequi cumque nisi beatae commodi cum hic, atque eligendi. Vel alias dolorum hic, nesciunt ratione impedit amet porro ab cupiditate officiis nulla repudiandae quae sit totam deserunt, suscipit magni distinctio doloremque! Optio quis atque aliquid! Nihil adipisci quasi eius ratione. Vero, ducimus alias totam dicta aperiam tempore exercitationem.</P>
                <Link href="/macchie-della-pelle">
                    <a style={{ color: theme.colors.blue }}>> Scopri di più</a>
                </Link>
             </TextContainer>
        </Container>

    )
}

const Container = styled.div `
       margin: 120px 0 0;
       padding: 40px ${({ theme }) => theme.mobileContainer} 60px;
       background-color: ${({ theme }) => theme.colors.backgroundGrey};
       box-shadow: ${({ theme }) => theme.boxShadow};
     @media(min-width: 768px){
        display: flex;
        padding: 60px ${({ theme }) => theme.desktopContainer} 80px;
    }
    
`
const ImageContainer = styled.div `
     
       @media(min-width: 768px){
           width: 60%;
        }
`
const TextContainer = styled.div `
     margin: 0 ${({ theme }) => theme.mobileContainer};
       @media(min-width: 768px){
            position: relative;
            left: 80px;
            width: 50%;
        }
`
const P = styled.p `
    text-align: left;
    position: relative;
    bottom: 20px;
`
