import { useContext, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import StripeContainer from '../components/Stripe/StripeContainer'

const Payment = () => {
    //const { } = useContext(CartContext)

    return(
        <div>
             <h1>Payment</h1>
             <StripeContainer/>
        </div>
    )
}

export default Payment 