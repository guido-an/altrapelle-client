import React from 'react'
import { useContext, useState, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import Form from '../components/Checkout/Form';
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import { useRouter } from 'next/router'

const Checkout = () => {
   const { totalPrice, productsInCart, calculateTotalPrice } = useContext(CartContext)
   const router = useRouter()

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

  const handleSubmit = e => {
      e.preventDefault()
      setCheckoutDataInStorage()
      router.push('/pagamento')
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
                 handleSubmit={handleSubmit}
               />
                <strong>Total: {totalPrice}€</strong>
               </>         
            }
        </>
    )
}

export default Checkout 