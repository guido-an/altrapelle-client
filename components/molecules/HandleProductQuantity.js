import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'

export default function HandleProductQuantity ({ quantityInCart, increaseQuantity, decreaseQuantity }){
    return(
        <Container>
           <QuantityInCart>{quantityInCart}</QuantityInCart>
           <Icon onClick={increaseQuantity}>+</Icon>
           <Icon onClick={decreaseQuantity}>-</Icon>
        </Container>
    )
}

const Container = styled.div ` 
  display: flex;
  width: 200px;
`
const QuantityInCart = styled.span ` 
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
    &:hover {
        cursor: pointer;
    }
`

const { func, number } = PropTypes

HandleProductQuantity.propTypes = {
    quantityInCart: number.isRequired,
    increaseQuantity: func.isRequired,
    decreaseQuantity: func.isRequired
  }




