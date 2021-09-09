import { useContext, useEffect, useState} from 'react';
import { CartContext } from "../contexts/CartContext"
import StripeContainer from '../components/Stripe/StripeContainer'

const Payment = () => {
     const [chekoutData, setCheckouData] = useState({})
    //const { } = useContext(CartContext)



     useEffect(() => {
        setCheckouData(JSON.parse(localStorage.getItem('checkoutData')) )
     }, [])

  
   console.log(chekoutData, 'chekoutData')
   

    return(
       
        <div>
             <h1>Payment</h1>
             <StripeContainer chekoutData={chekoutData}/>
        </div>
    )
}

export default Payment 