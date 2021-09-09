import { useContext, useState, useEffect} from 'react';
import Link from 'next/link'
import { CartContext } from "../contexts/CartContext"
import Form from '../components/Checkout/Form';
import StripeContainer from '../components/Stripe/StripeContainer'

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

   useEffect(() => {
    setCheckoutFromStorage()  
   }, [])

   const setCheckoutFromStorage = () => {
    const checkoutData = JSON.parse(localStorage.getItem('checkoutData'))
          checkoutData && setForm(checkoutData)
  }

  const setCheckoutDataInStorage = () => {
    localStorage.setItem('checkoutData', JSON.stringify(form));
  }

  const handleChange = e => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  }

    return(
        <div>
             <h1>Checkout</h1>
               <Form handleChange={handleChange}/>
              <strong>Total: {totalPrice}€</strong>
               <div onClick={setCheckoutDataInStorage}>
                  <Link href="/pagamento">Go to payment</Link>
               </div>
        </div>
    )
}

export default Checkout 