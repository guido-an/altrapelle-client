import React from 'react'
import { useContext, useState, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Form from '../components/Checkout/Form';
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import Button from '../components/atoms/Button';
import IntroHeading from '../components/molecules/IntroHeading';

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
    additionalNotes: "",
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
        <Container>
          <IntroHeading align="center">Checkout</IntroHeading>
           {productsInCart.length === 0 ? 
             <NoProductsInCart/> :
              <FormContainer>
                <Form 
                 handleChange={handleChange} 
                 newsLetterConsent={newsLetterConsent}
                 setNewsletterConsent={setNewsletterConsent}
                 form={form}
                 handleSubmit={handleSubmit}
               />
              </FormContainer>
            }     
        </Container>
    )
}

const Container = styled.div`
     margin: 0 ${({ theme }) => theme.mobileContainer};
       @media(min-width: 768px){
           padding: 0 ${({ theme }) => theme.desktopContainer};
         }
`
const FormContainer = styled.div`
     margin-top: 20px;
       @media(min-width: 768px){
          
         }
`

export default Checkout 