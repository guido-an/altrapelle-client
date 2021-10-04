import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Ingredients({ ingredients }) {
    return (
        <>
           <Title>Ingredienti</Title>
           <P>{ingredients}</P>
        </>
    )
}

const Title = styled.h3 `
     margin-top: 40px;
     color: ${({ theme }) => theme.colors.blue}
`
const P = styled.p `
     color: ${({ theme }) => theme.colors.blue};
     line-height: 25px;
     font-size: 0.9rem;
     position: relative;
     bottom: 10px;
`

const { string } = PropTypes
Ingredients.propTypes = {
    ingredients: string.isRequired
  }
