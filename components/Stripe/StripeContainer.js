import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from './CheckoutForm'

const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY

const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY)

const Stripe = ({ chekoutData, newsLetterConsent, setPaymentSuccessful }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm
        chekoutData={chekoutData}
        newsLetterConsent={newsLetterConsent}
        setPaymentSuccessful={setPaymentSuccessful}
      />
    </Elements>
  )
}

export default Stripe
