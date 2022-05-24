import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../../contexts/CartContext';
import Image from 'next/image';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import orderService from '../../services/orderService';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export const CheckoutForm = ({ chekoutData, newsLetterConsent, setPaymentSuccessful }) => {
  const { productsInCart, setProductsInCart, totalPrice, setTotalPrice } = useContext(CartContext);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountCodeWasApplied, setDiscountCodeWasApplied] = useState(false);
  const [discountCodeMessage, setDiscountCodeMessage] = useState('');

  const { email } = chekoutData;

  const stripe = useStripe();
  const elements = useElements();

  const service = new orderService();

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // console.log('Stripe 23 | token generated!', paymentMethod)
      try {
        // test
        setProcessing(true);
        const { id } = paymentMethod;
        const response = await axios.post(`${process.env.API_URL}/stripe/charge`, {
          // amount: 999, calculate amount in the server
          id: id,
          productsInCart,
          email,
          totalPrice,
        });
        if (response.data.paymentStatus === 'success') {
          handlePaymentSuccess();
        } else if (response.data.paymentStatus == 'action_required') {
          const { paymentIntent, error } = await stripe.confirmCardPayment(
            response.data?.data?.clientSecret
          );
          if (error) return alert('Error in payment, please try again later');
          if (paymentIntent.status === 'succeeded') {
            handlePaymentSuccess();
          }
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error);
      }
    } else {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handlePaymentSuccess = async () => {
    const response = await service.createOrder(
      chekoutData,
      productsInCart,
      newsLetterConsent,
      totalPrice,
      discountCodeWasApplied,
      discountCode.toUpperCase()
    );
    // console.log(response, 'response from checkout')

    let googleAnalyticsPayload = {
      transaction_id: response?.data?.transaction_id || Date.now(),
      affiliation: 'Altrapelle',
      value: totalPrice,
      currency: 'EUR',
      tax: 0,
      shipping: 0,
      items: productsInCart,
    };

    if (discountCode) {
      // adding discount coupon in google analytics
      const discountAmount = ((totalPrice * 15) / 100).toFixed(2);
      const actualPrice = Math.round(Number(totalPrice) + Number(discountAmount)).toFixed(2);

      googleAnalyticsPayload = {
        ...googleAnalyticsPayload,
        coupon: discountCode.toUpperCase(),
        actualPrice,
        discountAmount,
        value: totalPrice,
      };
    }
    // transaction tracking
    window.gtag('event', 'purchase', googleAnalyticsPayload);
    localStorage.clear();
    setPaymentSuccessful(true);
    setProductsInCart([]);
    // test
    setProcessing(false);
  };

  const handleDiscountCodeChange = e => {
    const codes = [
      'SILVIA15',
      'ARIANNA15',
      'BEAUTIFUL15',
      'CIAPINA15',
      'SONIA15',
      'MARA15',
      'MARIALUISA15',
      'FRANCY15',
      'CHIARA15',
      'LAURA15',
      'SERENA15',
      'ANGELA15',
      'ARIANNAV15',
      'ALBERTA15',
      'ROSSELLA15',
      'SABINA15',
      'BARBARA15',
      'ILARIA15',
      'MATTEO15',
      'FEDERICA15',
      'ALESSANDRA15',
      'ROBERTA15',
    ];
    setDiscountCode(e.target.value);
    if (codes.includes(e.target.value.toUpperCase()) && !discountCodeWasApplied) {
      const priceToRemove = ((totalPrice * 15) / 100).toFixed(2);
      setTotalPrice(totalPrice - priceToRemove);
      setDiscountCodeMessage('Codice valido e applicato correttamente!');
      setDiscountCodeWasApplied(true);
    }
    if (codes.includes(e.target.value.toUpperCase()) && discountCodeWasApplied) {
      setDiscountCodeMessage('Lo sconto è già stato applicato');
    }
    if (!codes.includes(e.target.value.toUpperCase())) {
      setDiscountCodeMessage('Codice non valido');
    }
    if (e.target.value === '') {
      setDiscountCodeMessage('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <ImageContainer>
          <Image
            src="/icons/credit-cards-logo.png"
            alt="metodi di pagamento"
            width="213px"
            height="32px"
          />
        </ImageContainer>
        {/* <p>Inserisci i dati della carta:</p> */}
        <CardElement />
        <div style={{ marginTop: '30px' }}>
          {/* <p style={{ fontSize: '14px'}}>Hai un codice sconto?</p> */}
          <Input
            type="text"
            value={discountCode}
            placeholder="Hai un codice sconto?"
            handleChange={handleDiscountCodeChange}
          />
          <p style={{ fontSize: '13px', position: 'relative', bottom: '10px', minHeight: '20px' }}>
            {discountCodeMessage}
          </p>
        </div>
        {error && !processing && <Error>{error}</Error>}
        <ButtonContainer>
          <Button
            bgColor={!processing ? undefined : '#ebebed'}
            color={!processing ? undefined : '#153d6d'}
            width="100%"
            margin="0 auto"
          >
            {!processing ? " Completa l'ordine" : 'Processando il pagamento....'}
          </Button>
        </ButtonContainer>
      </form>
      <TotalPrice>
        {discountCodeWasApplied ? `Totale scontato: ${totalPrice}€` : `Totale: ${totalPrice}€`}
      </TotalPrice>
    </Container>
  );
};

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
`;
const ImageContainer = styled.div`
  margin: 0 auto 40px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  margin: 0 auto 40px;
`;
const TotalPrice = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
`;
const Error = styled.p`
  position: relative;
  top: 0px;
  color: red;
  font-size: 14px;
  text-align: center;
`;

const { object, bool, func } = PropTypes;

CheckoutForm.propTypes = {
  chekoutData: object.isRequired,
  newsLetterConsent: bool.isRequired,
  setPaymentSuccessful: func.isRequired,
};
