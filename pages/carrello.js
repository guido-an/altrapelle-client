import React from 'react'
import styled from 'styled-components'
import { useContext, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import CartTable from '../components/Cart/CartTable';
import IntroPage from '../components/molecules/IntroPage';
import ContainerApp from '../components/atoms/ContainerApp';
import Button from '../components/atoms/Button';

const Cart = () => {
    const {
        productsInCart, 
        totalPrice, 
        calculateTotalPrice, 
    } = useContext(CartContext)

    useEffect(() => {
        calculateTotalPrice()
    }, [productsInCart])

    return(
        <ContainerApp>
           <IntroPage bgColor="blue">Carrello</IntroPage>
             {productsInCart.length === 0 ? 
                <NoProductsInCart/> :
                 <>
                   <CartTable productsInCart={productsInCart}/>
                   <TotalPrice>Totale: {totalPrice}€</TotalPrice>
                   <ButtonContainer>
                      <Button margin="0 auto" width="100%" href="/checkout">Procedi con l'ordine</Button>
                   </ButtonContainer>
                </>
             }
        </ContainerApp>
    )
}

const TotalPrice = styled.h2 `
    text-align: center;
    margin-top: 60px;
    color: ${({ theme }) => theme.colors.blue}
`
const ButtonContainer = styled.div `
    width: 400px;
    margin: 0 auto 80px;
`

export default Cart 