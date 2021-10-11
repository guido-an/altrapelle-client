import { useEffect, useState, useContext} from 'react';
import { CartContext } from '../contexts/CartContext'
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import StripeContainer from '../components/Stripe/StripeContainer'
import ContainerApp from '../components/atoms/ContainerApp';
import IntroPage from '../components/molecules/IntroPage';
import OrderRecap from '../components/molecules/OrderRecap';
import OrderCompleted from '../components/Payment/OrderCompleted';

const Payment = () => {
     const [chekoutData, setCheckouData] = useState({})
     const [newsLetterConsent, setNewsletterConsent] = useState(false)
     const [paymentSuccessful, setPaymentSuccessful] = useState(false)
     const { productsInCart, totalPrice, calculateTotalPrice } = useContext(CartContext)
     
     useEffect(() => {
        setCheckouData(JSON.parse(localStorage.getItem('checkoutData')) )
        setNewsletterConsent(localStorage.getItem('newsLetterConsent'))
        calculateTotalPrice()
     }, [productsInCart])


     if(productsInCart.length === 0 && !paymentSuccessful){
        return   <NoProductsInCart />
    }

    if(paymentSuccessful){
        return <OrderCompleted/>
    }

    return(  
        <ContainerApp>
             <IntroPage bgColor="blue">Pagamento</IntroPage>             
                <>  
                  <StripeContainer 
                     chekoutData={chekoutData} 
                     newsLetterConsent={newsLetterConsent}
                     setPaymentSuccessful={setPaymentSuccessful} /> 
                  <OrderRecap 
                      products={productsInCart} 
                      totalPrice={totalPrice} 
                      calculateTotalPrice={calculateTotalPrice} />
                </>
        </ContainerApp>
    )
}

export default Payment 