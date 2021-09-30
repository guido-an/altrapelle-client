import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function OrderRecap(){
    const { productsInCart, totalPrice, calculateTotalPrice } = useContext(CartContext)

    useEffect(() => {
        calculateTotalPrice()
    }, [productsInCart])

    function TableHead(){
        return <thead>
                 <Tr>
                   <Th>Prodotto</Th>
                   <Th>Subtotale</Th>
                 </Tr>
               </thead>
     }

     function TableBody(){
        return (
          <tbody>
            {productsInCart.map((product, i) => {
              const { name, price, quantity} = product
                let subtotalPrice = price * quantity
                 return (
                  <Tr key={i}>
                       <Td border="none">
                         <ProductName>{name} x {quantity}</ProductName>
                        </Td>
                       <Td border="none">{subtotalPrice.toFixed(2)}€</Td>
                     </Tr>
                   )
             })}
             <Tr>
                <Td><Strong>Subtotale</Strong></Td>
                <Td>{totalPrice}€</Td>
             </Tr>
             <Tr>
                <Td><Strong>Spedizione</Strong></Td>
                <Td>Gratuita</Td>
             </Tr>
             <Tr>
                <Td><Strong>Totale</Strong></Td>
                <Td>{totalPrice}€</Td>
             </Tr>
         </tbody>
        )
    }

    return(
        <Container>
            <Title>Il tuo ordine</Title>
            {TableHead()}
            {TableBody()}
        </Container>
    )
}

const Container = styled.div`
     margin-bottom: 120px;
     @media(min-width: 1200px){
        width: 70%;
        margin: 0 auto;
     }
`

const Title = styled.h2`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue}
`
const Strong = styled.strong`
      font-weight: 500;
      color: ${({ theme }) => theme.colors.blue};
`
const Table = styled.table`
      border-collapse: collapse;
      width: 100%;
`
const Tr = styled.tr`
     
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
      color: ${({ theme }) => theme.colors.greyText};
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