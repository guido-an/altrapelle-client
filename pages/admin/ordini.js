import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import OrdersTable from '../../components/Admin/OrdersTable';
import ContainerApp from '../../components/atoms/ContainerApp';
import orderService from '../../services/orderService';
import authService from '../../services/authService';
import OrdersStatus from '../../components/Admin/OrdersStatus';
import TotalRevenue from '../../components/Admin/TotalRevenue';

const OrderService = new orderService();
const AuthService = new authService();

export const getServerSideProps = async () => {
  const orders = await OrderService.getAllOrders();
  return { props: orders };
};

const Ordini = ({ orders }) => {
  const [proceed, setProceed] = useState(false);
  const router = useRouter();

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
        <TotalRevenue orders={orders} />
        <p>Totale ordini {orders.length}:</p>
        <OrdersStatus orders={orders} title="Nuovi" status="Nuovo" />
        <OrdersStatus orders={orders} title=" - In lavorazione" status="In Lavorazione" />
        <OrdersStatus orders={orders} title=" - Completati" status="Completato" />
        <OrdersStatus orders={orders} title=" - Cancellati" status="Cancellato" />
        <OrdersTable orders={orders} />
      </ContainerApp>
    )
  );
};

export default Ordini;
// export default withPrivateRoute(Ordini);
