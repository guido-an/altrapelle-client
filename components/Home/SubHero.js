import styled from 'styled-components'

export default function SubHero (){
    return(
        <Container>
            <Title>L'INNOVATIVO TIYF COMPLEX, RIDUCE L'AREA SCURA TOTALE DELLE MACCHIE 
                 <Span> GIA' DOPO 2 SETTIMANE</Span>
            </Title>
        </Container>

    )
}

const Container = styled.div `
    background-color: ${({ theme }) => theme.colors.lightBlue};
    position: relative;
    bottom: 20px;
    padding: 0 ${({ theme }) => theme.mobileContainer} 10px;
    
`
const Title = styled.h2 `
    color: #fff;
    text-align: center;
    font-weight: 400;
    padding: ${({ theme }) => theme.mobileContainer};
    font-size: 1.5rem;
    @media(min-width: 968px){
        width: 60%;
        margin: 0 auto;
    }
`
const Span = styled.span `
   font-weight: 600;
`