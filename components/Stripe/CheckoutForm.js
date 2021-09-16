import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { CartContext } from '../../contexts/CartContext';
import orderService from "../../services/orderService";

export const CheckoutForm = ({ chekoutData, newsLetterConsent, setPaymentSuccessful }) => {
   const { productsInCart, setProductsInCart } = useContext(CartContext)

  const stripe = useStripe();
  const elements = useElements();

  const service = new orderService()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
         `${process.env.API_URL}/stripe/charge`, 
          {
            // amount: 999, calculate amount in the server
            id: id,
            productsInCart,
          }
        );
        //console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
           const test = await service.createOrder(chekoutData, productsInCart, newsLetterConsent)
           console.log("CheckoutForm.js 25 | payment successful!");
           localStorage.clear();
           setPaymentSuccessful(true) 
           setProductsInCart([])
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};