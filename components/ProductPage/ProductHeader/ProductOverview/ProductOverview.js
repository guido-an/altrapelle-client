import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext, useState } from 'react';
import HandleProductQuantity from '../../../molecules/HandleProductQuantity';
import Button from '../../../atoms/Button';
import Link from 'next/link'
import Image from 'next/image'
export default function ProductOverview({ product }) {
   const { quantityInCart, setQuantityInCart, addToCart } = useContext(CartContext)
   const [displayCartLink, setDisplayCartLink] = useState(false)
    return(
        <Container>
             <Name>{product.name}</Name>
             <Subtitle>{product.subtitle}.</Subtitle>
             <Price>{product.price}€</Price>
             <p>{product.description}.</p>
            <QuantityContainer>
               <p>Quantità:</p>
               <HandleProductQuantity 
                    quantityInCart={quantityInCart}
                    increaseQuantity={()=> setQuantityInCart(quantityInCart + 1)}
                    decreaseQuantity={()=> quantityInCart <= 1 ? setQuantityInCart(1) : setQuantityInCart(quantityInCart - 1)}
               />
            </QuantityContainer>
            <div onClick={() => setDisplayCartLink(true)}>
              <Button 
                handleOnClick={()=> addToCart(product)}
                width="100%"
                margin="80px auto 0"
                >
                 Aggiungi al carrello
              </Button>
            </div>
            <ContainerCartLink>
               {displayCartLink && <Link href="/carrello">> Vai al carrello</Link>}
            </ContainerCartLink>
        </Container>
    )
}

const Container = styled.div`
     margin: 20px ${({ theme }) => theme.mobileContainer} 30px;   
     @media(min-width: 1200px){
         margin-left: 40px;
     } 
` 
const Name = styled.h1`
     color: ${({ theme }) => theme.colors.lightBlue};
     line-height: 120%;
` 
const Subtitle = styled.h2`
     color: ${({ theme }) => theme.colors.blue};
     font-size: 1.2rem;
     position: relative;
     bottom: 10px;
` 
const Price = styled.p`
     font-size: 1.2rem;
     position: relative;
     bottom: 10px;
` 
const QuantityContainer = styled.div`
     position: relative;
     top: 20px;
` 
const ContainerCartLink = styled.div`
     position: relative;
     top: 20px;
     text-align: center;
` 

const { object } = PropTypes

ProductOverview.propTypes = {
     product: object.isRequired
  }


