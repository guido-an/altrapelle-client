import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = process.env.PUBLIC_KEY; 

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({ chekoutData, newsLetterConsent }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm chekoutData={chekoutData} newsLetterConsent={newsLetterConsent}/>
    </Elements>
  );
};

export default Stripe;