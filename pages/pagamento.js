import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';
import NoProductsInCart from '../components/atoms/NoProuctsInCart';
import StripeContainer from '../components/Stripe/StripeContainer';
import ContainerApp from '../components/atoms/ContainerApp';
import IntroPage from '../components/molecules/IntroPage';
import OrderRecap from '../components/molecules/OrderRecap';
import OrderCompleted from '../components/Payment/OrderCompleted';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';

const Payment = () => {
  const [chekoutData, setCheckouData] = useState({});
  const [newsLetterConsent, setNewsletterConsent] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const { productsInCart, totalPrice, calculateTotalPrice } = useContext(CartContext);

  useEffect(() => {
    setCheckouData(JSON.parse(localStorage.getItem('checkoutData')));
    setNewsletterConsent(localStorage.getItem('newsLetterConsent'));
    calculateTotalPrice();
  }, [productsInCart]);

  if (productsInCart.length === 0 && !paymentSuccessful) {
    return <NoProductsInCart />;
  }

  if (paymentSuccessful) {
    return <OrderCompleted />;
  }

  return (
    <AnimatedWrapper>
      <ContainerApp>
        <IntroPage bgColor="blue">Pagamento</IntroPage>
        <>
          <StripeContainer
            chekoutData={chekoutData}
            newsLetterConsent={newsLetterConsent}
            setPaymentSuccessful={setPaymentSuccessful}
          />

          <OrderRecapContainer>
            <OrderRecap
              products={productsInCart}
              totalPrice={totalPrice}
              calculateTotalPrice={calculateTotalPrice}
            />
          </OrderRecapContainer>
        </>
      </ContainerApp>
    </AnimatedWrapper>
  );
};

const OrderRecapContainer = styled.div`
  @media (min-width: 968px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export default Payment;
