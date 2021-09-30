import { useEffect, useState, useContext} from 'react';
import { CartContext } from '../contexts/CartContext'
import styled from 'styled-components'
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import StripeContainer from '../components/Stripe/StripeContainer'
import IntroHeading from '../components/molecules/IntroHeading';

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
        <Container>
             <IntroHeading align="center">Pagamento</IntroHeading>
             {productsInCart.length === 0 && !paymentSuccessful ? 
                <NoProductsInCart /> :
                 <StripeContainer 
                  chekoutData={chekoutData} 
                  newsLetterConsent={newsLetterConsent}
                  setPaymentSuccessful={setPaymentSuccessful}
                 /> 
             }
             {paymentSuccessful && <p>ordine creato</p>}
        </Container>
    )
}

const Container = styled.div`
     margin: 0 ${({ theme }) => theme.mobileContainer};
       @media(min-width: 768px){
           padding: 0 ${({ theme }) => theme.desktopContainer};
         }
`
export default Payment 