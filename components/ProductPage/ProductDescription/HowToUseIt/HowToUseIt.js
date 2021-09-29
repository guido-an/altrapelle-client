import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function HowToUseIt({ howToUseIt, marginTop }) {
    return (
        <>
           <Title marginTop={marginTop}>Indicazioni per l'uso</Title>
           <P>{howToUseIt}</P>
        </>
    )
}

const Title = styled.h3 `
      margin-top: ${({ marginTop }) => marginTop};
      color: ${({ theme }) => theme.colors.blue}
`
const P = styled.p `
     color: ${({ theme }) => theme.colors.blue};
     line-height: 25px;
     position: relative;
     bottom: 10px;
`

const { string } = PropTypes

HowToUseIt.propTypes = {
    howToUseIt: string.isRequired,
    marginTop: string
  }

