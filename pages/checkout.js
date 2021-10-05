import React from 'react'
import { useContext, useState, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Form from '../components/Checkout/Form';
import ContainerApp from '../components/atoms/ContainerApp';
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import IntroPage from '../components/molecules/IntroPage';

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
        <ContainerApp>
          <IntroPage bgColor="blue">Checkout</IntroPage>
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
        </ContainerApp>
    )
}

const FormContainer = styled.div`
     margin-top: 20px;
`

export default Checkout 