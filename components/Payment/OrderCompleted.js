import Image from 'next/image'
import styled from 'styled-components'

export default function OrderCompleted(){
   
    return(
        <Container>
            <ImageContainer>
                <Image src="/icons/check.png" width="64px" height="64px"/>
            </ImageContainer>
            <Title>Ordine completato!</Title>
            <Text>Riceverai presto un'email di conferma con il riepilogo dell'acquisto.</Text>
            <Text>Grazie per aver scelto Altrapelle!</Text>
        </Container>
    )
}

const Container = styled.div`
    margin: 15vh auto 60vh;
      @media(min-width: 1200px){
         width: 70%;
      }
`
const ImageContainer = styled.div`
    width: 64px;
    margin: 0 auto; 
`
const Title = styled.h2`
      font-weight: 600;
      color: ${({ theme }) => theme.colors.blue};
      text-align: center;
`
const Text = styled.p`
      text-align: center;
`
