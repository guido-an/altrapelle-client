import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function IntroHeading ({ children, bgColor }){
    console.log(bgColor, 'bgColor')
    return (
        <Container bgColor={bgColor}>
           <Title bgColor={bgColor}>{children}</Title>
        </Container>
    )
}

const Container = styled.div `
   background-color: ${({ bgColor, theme }) => bgColor === 'blue' ? theme.colors.blue : theme.colors.backgroundGrey};
   border-radius: 4px;
   padding: 20px;
   margin-top: 10px;
`

const Title = styled.h2 `
    color: ${({ bgColor, theme }) => bgColor === 'blue' ? '#fff' : theme.colors.blue};
    text-align: ${({ align }) => align};
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 100%;
    text-align: center;
`

  const { string } = PropTypes

  IntroHeading.propTypes = {
     children: string.isRequired,
     bgColor: string,
  }



