import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function IntroHeading ({ children, align }){
    return (
        <Container>
           <Title align={align}>{children}</Title>
        </Container>
    )
}

const Container = styled.div `
   background-color: ${({ theme }) => theme.colors.backgroundGrey};
   border-radius: 4px;
   padding: 20px;
   margin-top: 10px;
`

const Title = styled.h2 `
    color: ${({ theme}) =>theme.colors.blue };
    text-align: ${({ align }) => align};
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 100%;
`

  const { string } = PropTypes

  IntroHeading.propTypes = {
     children: string.isRequired,
     align: string
  }



