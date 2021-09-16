import React from 'react'
import { useContext, useState, useEffect} from 'react';
import Link from 'next/link'
import { CartContext } from "../contexts/CartContext"
import Form from '../components/Checkout/Form';
import StripeContainer from '../components/Stripe/StripeContainer'
import NoProductsInCart from '../components/atoms/NoProuctsInCart';

const Checkout = () => {
   const { totalPrice, productsInCart, calculateTotalPrice } = useContext(CartContext)

   const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    vatOrFiscalCode: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    telephone: '',
    email: '',
  })

  const [newsLetterConsent, setNewsletterConsent] = useState(false)

   useEffect(() => {
    setCheckoutFromStorage()  
    calculateTotalPrice()
   }, [productsInCart])

   const setCheckoutFromStorage = () => {
    const checkoutData = JSON.parse(localStorage.getItem('checkoutData'))
          checkoutData && setForm(checkoutData)
          const consent = localStorage.getItem('newsLetterConsent')
          consent === 'true' ? setNewsletterConsent(true) : setNewsletterConsent(false)
  }

  const setCheckoutDataInStorage = () => {
    localStorage.setItem('checkoutData', JSON.stringify(form));
    localStorage.setItem('newsLetterConsent', newsLetterConsent)
  }

  const handleChange = e => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  }

    return(
        <>
          <h1>Checkout</h1>
           {productsInCart.length === 0 ? 
             <NoProductsInCart/> :
              <>
                <Form 
                 handleChange={handleChange} 
                 newsLetterConsent={newsLetterConsent}
                 setNewsletterConsent={setNewsletterConsent}
                 form={form}
               />
               <strong>Total: {totalPrice}€</strong>
                <div onClick={setCheckoutDataInStorage}>
                   <Link href="/pagamento">Go to payment</Link>
                </div> 
               </>         
            }
        </>
    )
}

export default Checkout 