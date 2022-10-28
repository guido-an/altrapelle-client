import styled from 'styled-components';

export default function SubHero() {
  return (
    <Container>
      <Title>
        Siero gel concentrato ad effetto tensore immediato per la correzione visiva delle piccole
        rughe nell’area del contorno occhi e zona T.
      </Title>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  position: relative;
  bottom: 20px;
  padding: 20px ${({ theme }) => theme.mobileContainer} 30px;
`;
const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 400;
  padding: ${({ theme }) => theme.mobileContainer};
  font-size: 1.125rem;
  @media (min-width: 968px) {
    width: 60%;
    margin: 0 auto;
  }
`;
