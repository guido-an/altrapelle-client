import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'

export default function HandleProductQuantity ({ increaseQuantity, decreaseQuantity, quantityInCart }){
    return(
        <Container>
           <Price>{quantityInCart}</Price>
           <Icon onClick={increaseQuantity}>+</Icon>
           <Icon onClick={decreaseQuantity}>-</Icon>
        </Container>
    )
}

const Container = styled.div ` 
  display: flex;
  width: 200px;
`
const Price = styled.span ` 
  flex-grow: 3;
  text-align: center;
  border-radius: 4px;
  margin-right: 20px;
`
const Icon = styled.span ` 
  flex-grow: 1;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  margin-right: 10px;
`

const { func, number } = PropTypes

HandleProductQuantity.propTypes = {
    increaseQuantity: func.isRequired,
    decreaseQuantity: func.isRequired,
    quantityInCart: number.isRequired
  }




