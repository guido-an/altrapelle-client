import styled from 'styled-components'

export default function SubHero (){
    return(
        <Container>
            <Title>L'INNOVATIVO TIYF COMPLEX, RIDUCE L'AREA SCURA TOTALE DELLE MACCHIE GIA' DOPO 2 SETTIMANE</Title>
        </Container>

    )
}

const Container = styled.div `
    background-color: ${({ theme }) => theme.colors.lightBlue};
    
`
const Title = styled.h2 `
    color: #fff;
    text-align: center;
`