import styled from 'styled-components'

export default function SubHero () {
  return (
    <Container>
      <Title>Trattamento dermatologico formulato con complessi depigmentanti che riducono
             significativamente la visibilità delle macchie scure già dopo le prime settimane di
             applicazione
      </Title>
    </Container>

  )
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    position: relative;
    bottom: 20px;
    padding: 20px ${({ theme }) => theme.mobileContainer} 30px;
    
`
const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-weight: 400;
    padding: ${({ theme }) => theme.mobileContainer};
    font-size: 1.125rem;
    @media(min-width: 968px){
        width: 60%;
        margin: 0 auto;
    }
`
