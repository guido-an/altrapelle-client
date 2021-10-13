import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext, useState } from 'react'
import HandleProductQuantity from '../../../molecules/HandleProductQuantity'
import Button from '../../../atoms/Button'
import Link from 'next/link'
import Image from 'next/image'
export default function ProductOverview ({ product }) {
  const { quantityInCart, setQuantityInCart, addToCart } = useContext(CartContext)
  const [displayCartLink, setDisplayCartLink] = useState(false)
  return (
    <Container>
      <Name>{product.name}</Name>
      <Subtitle>{product.subtitle}.</Subtitle>
      <PricesContainer>
        <Price product={product}>{product.price}€</Price>
        {/* Quick fix in production - to be changed  */}
        {product.id === '3' && <DiscountedPrice>{product.discountedPrice}€</DiscountedPrice>}
      </PricesContainer>
      <Description>{product.description}.</Description>
      <QuantityContainer>
        <p>Quantità:</p>
        <HandleProductQuantity
          quantityInCart={quantityInCart}
          increaseQuantity={() => setQuantityInCart(quantityInCart + 1)}
          decreaseQuantity={() => quantityInCart <= 1 ? setQuantityInCart(1) : setQuantityInCart(quantityInCart - 1)}
        />
      </QuantityContainer>
      <ContainerCartLink>
        {displayCartLink && <Link href='/carrello'>> Vai al carrello</Link>}
      </ContainerCartLink>
      <div onClick={() => setDisplayCartLink(true)}>
        <Button
          handleOnClick={() => addToCart(product)}
          width='100%'
          margin='20px auto 0'
        >
                 Aggiungi al carrello
        </Button>
      </div>
      <IconsContainer>
        {product.icons.map((icon, i) => <Image key={i} src={icon} width='84' height='84' />)}
      </IconsContainer>
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
const PricesContainer = styled.div`
     display: flex;
`
const Price = styled.p`
     font-size: 1.2rem;
     position: relative;
     bottom: 30px;
     text-decoration: ${({ product }) => product.discountedPrice ? 'line-through' : null}
`
const DiscountedPrice = styled.span`
     font-size: 1.2rem;
     position: relative;
     left: 10px;
     bottom: 13px;
`
const Description = styled.p`
     position: relative;
     bottom: 40px;
`
const QuantityContainer = styled.div`
     position: relative;
     bottom: 30px;
`
const ContainerCartLink = styled.div`
     position: relative;
     top: 5px;
     text-align: center;
`
const IconsContainer = styled.div`
     position: relative;
     top: 30px;
     display: flex;
     justify-content: space-evenly;
     
`

const { object } = PropTypes

ProductOverview.propTypes = {
  product: object.isRequired
}
