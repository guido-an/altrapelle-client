import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CartContext } from '../../contexts/CartContext'
import HandleProductQuantity from '../molecules/HandleProductQuantity'
import Image from 'next/image'

export default function CartTable () {
  const { productsInCart, removeFromCart, handleQuantityInCart } = useContext(CartContext)

  function TableHead () {
    return <thead>
      <Tr>
        <Th>Prodotto</Th>
        <Th>Prezzo</Th>
        <Th>Quantità</Th>
        <Th>Subtotale</Th>
      </Tr>
    </thead>
  }

  function TableBody () {
    return (
      <tbody>
        {productsInCart.map((product, i) => {
          const { name, price, discountedPrice, quantity } = product
          {/* const subtotalPrice = discountedPrice || price * quantity */}
          const subtotalPrice = discountedPrice ? discountedPrice * quantity : price * quantity
          return (
            <Tr key={i}>
              <Td>
                <DeleteIcon onClick={() => removeFromCart(product.id)}>x</DeleteIcon>
                <ProductName>{name}</ProductName>
              </Td>
              <Td>{discountedPrice?.toFixed(2) || price.toFixed(2)}€</Td>
              <Td>
                <HandleProductQuantity
                  quantityInCart={quantity}
                  increaseQuantity={() => handleQuantityInCart(product, 'increase')}
                  decreaseQuantity={() => handleQuantityInCart(product, 'decrease')}
                />
              </Td>
              <Td>{subtotalPrice.toFixed(2)}€</Td>
            </Tr>
          )
        })}
      </tbody>
    )
  }

  return (
    <Container>
      <Table>
        {TableHead()}
        {TableBody()}
      </Table>
    </Container>
  )
}

const Container = styled.div`
      overflow-x: auto;     
      margin-top: 20px; 
`
const Table = styled.table`
      border-collapse: collapse;
      width: 100%;
`
const Tr = styled.tr`
     :nth-child(even){
         background-color: #fafafa;
     }
`
const Th = styled.th`
      border: 1px solid #ddd;
      padding: 10px;
      color: ${({ theme }) => theme.colors.blue};
        @media(min-width: 768px){
            padding:15px;
           }
`
const Td = styled.td`
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
      width: 25%;
      :nth-child(1){
          width: 30%;
      }
      @media(min-width: 768px){
        padding: 15px 10px;
      }
`
const ProductName = styled.span`
      font-weight: 500;
      color: ${({ theme }) => theme.colors.lightBlue};
`
const DeleteIcon = styled.span`
      color: red;
      padding-right: 20px;
      font-weight: 500;
      cursor: pointer;
`
