import { useContext, useEffect, useState} from 'react';
import { CartContext } from "../contexts/CartContext"
import StripeContainer from '../components/Stripe/StripeContainer'

const Payment = () => {
     const [chekoutData, setCheckouData] = useState({})
     const [newsLetterConsent, setNewsletterConsent] = useState(false)
     
    //const { } = useContext(CartContext)

console.log(newsLetterConsent, 'from pagamento')

     useEffect(() => {
        setCheckouData(JSON.parse(localStorage.getItem('checkoutData')) )
        setNewsletterConsent(localStorage.getItem('newsLetterConsent'))
     }, [])

  
   console.log(chekoutData, 'chekoutData')
   

    return(
       
        <div>
             <h1>Payment</h1>
             <StripeContainer chekoutData={chekoutData} newsLetterConsent={newsLetterConsent}/>
        </div>
    )
}

export default Payment 