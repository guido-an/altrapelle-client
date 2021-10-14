import React, { useContext, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CartContext } from '../../contexts/CartContext'
import Image from 'next/image'
import axios from 'axios'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import orderService from '../../services/orderService'
import Button from '../atoms/Button'

export const CheckoutForm = ({ chekoutData, newsLetterConsent, setPaymentSuccessful }) => {
  const { productsInCart, setProductsInCart, totalPrice } = useContext(CartContext)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const service = new orderService()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod)
      try {
        // test
        setProcessing(true)
        const { id } = paymentMethod
        const response = await axios.post(
         `${process.env.API_URL}/stripe/charge`,
         {
           // amount: 999, calculate amount in the server
           id: id,
           productsInCart
         }
        )
        // console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log('CheckoutForm.js 25 | payment successful!')
          const response = await service.createOrder(chekoutData, productsInCart, newsLetterConsent)
          // console.log(response, 'response from checkout')

          localStorage.clear()
          setPaymentSuccessful(true)
          setProductsInCart([])
          // test
          setProcessing(false)
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error)
      }
    } else {
      console.log(error.message)
      setError(error.message)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <ImageContainer>
          <Image src='/icons/credit-cards-logo.png' width='213px' height='32px' />
        </ImageContainer>
        <CardElement />
        {error && <Error>{error}</Error>}
        <ButtonContainer>
          <Button
            bgColor={!processing ? undefined : '#ebebed'}
            color={!processing ? undefined : '#153d6d'}
            width='100%'
            margin='60px 0 auto'
          >
            {!processing ? " Completa l'ordine" : 'Processando il pagamento....'}
          </Button>
        </ButtonContainer>
      </form>
      <TotalPrice>Totale: {totalPrice}€</TotalPrice>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 40px 0 20px;
    box-sizing: border-box;
    margin: 20px 0 40px;
      form {
        width: 80%;
        margin: 0 auto;
        padding-top: 60px;
      }

`
const ImageContainer = styled.div`
    margin: 0 auto 40px;
    text-align: center;
`
const ButtonContainer = styled.div`
    margin: 0 auto 60px;
`
const TotalPrice = styled.h3`
    text-align: center;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
`
const Error = styled.p`
   position: relative;
   top: 40px;
   text-align: center;
`

const { object, bool, func } = PropTypes

CheckoutForm.propTypes = {
  chekoutData: object.isRequired,
  newsLetterConsent: bool.isRequired,
  setPaymentSuccessful: func.isRequired
}
