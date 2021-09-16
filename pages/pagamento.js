import { useEffect, useState, useContext} from 'react';
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import StripeContainer from '../components/Stripe/StripeContainer'
import { CartContext } from '../contexts/CartContext'

const Payment = () => {
     const [chekoutData, setCheckouData] = useState({})
     const [newsLetterConsent, setNewsletterConsent] = useState(false)
     const [paymentSuccessful, setPaymentSuccessful] = useState(false)
     const { productsInCart } = useContext(CartContext)
     
     useEffect(() => {
        setCheckouData(JSON.parse(localStorage.getItem('checkoutData')) )
        setNewsletterConsent(localStorage.getItem('newsLetterConsent'))
     }, [])

    return(  
        <>
             <h1>Payment</h1>
             {productsInCart.length === 0 && !paymentSuccessful ? 
                <NoProductsInCart /> :
                 <StripeContainer 
                  chekoutData={chekoutData} 
                  newsLetterConsent={newsLetterConsent}
                  setPaymentSuccessful={setPaymentSuccessful}
                 /> 
             }
             {paymentSuccessful && <p>ordine creato</p>}
        </>
    )
}

export default Payment 