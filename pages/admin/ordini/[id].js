import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import { useRouter } from 'next/router';
import ContainerApp from '../../../components/atoms/ContainerApp';
import OrderRecap from '../../../components/molecules/OrderRecap';
import orderService from '../../../services/orderService';
import authService from '../../../services/authService';

const Orderservice = new orderService();
const AuthService = new authService();

export const getServerSideProps = async context => {
  const { id } = context.params;
  const order = await Orderservice.getOrder(id);
  return { props: order };
};

const Ordine = ({ order }) => {
  const [proceed, setProceed] = useState(false);
  const router = useRouter();

  const { productsInCart, totalPriceOrder, stateOfTheOrder, discountCodeWasApplied, discountCode } =
    order;
  const {
    firstName,
    lastName,
    vatOrFiscalCode,
    address,
    city,
    province,
    zipCode,
    telephone,
    email,
    additionalNotes,
  } = order.billingDetails;

  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        const response = await AuthService.loggedin();
        if (response.user) {
          setProceed(true);
        }
      } catch (e) {
        router.push('/admin/login');
        console.log(e);
      }
    }
    checkIfLoggedIn();
  }, []);

  if (!proceed) {
    <p>Loading...</p>;
  }

  return (
    proceed && (
      <ContainerApp>
        <Container>
          <OrderDetailsContainer>
            <p>
              <strong>Ordine: </strong> #{order._id}
            </p>
            <p>
              <strong>Stato dell'ordine: </strong> {stateOfTheOrder}
            </p>
            <p>
              <strong>Nome: </strong> {firstName} {lastName}
            </p>
            <p>
              <strong>P.IVA / Codice Fiscale: </strong> {vatOrFiscalCode}
            </p>
            <p>
              <strong>Indirizzo: </strong> {address}, {city}, {province}, {zipCode}
            </p>
            <p>
              <strong>Telefono: </strong> {telephone}
            </p>
            <p>
              <strong>Email: </strong> {email}
            </p>
            {additionalNotes && (
              <p>
                <strong>Note aggiuntive: </strong> {additionalNotes}
              </p>
            )}
          </OrderDetailsContainer>
          <OrderRecapContainer>
            <OrderRecap
              products={productsInCart}
              totalPrice={totalPriceOrder}
              discountCodeWasApplied={discountCodeWasApplied}
            />
            {discountCodeWasApplied && <p>Codice sconto utilizzato: {discountCode}</p>}
          </OrderRecapContainer>
        </Container>
      </ContainerApp>
    )
  );
};

const Container = styled.div`
  margin: 40px 0 0;
  @media (min-width: 968px) {
    display: flex;
    justify-content: centerd;
    margin: 40px 0;
  }
`;
const OrderDetailsContainer = styled.div`
  @media (min-width: 968px) {
    margin: 0 60px 0 40px;
  }
`;
const OrderRecapContainer = styled.div`
  margin-top: 40px;
  @media (min-width: 968px) {
    width: 70%;
    margin-top: 20px;
  }
`;

//export default withPrivateRoute(Ordine);
export default Ordine;
