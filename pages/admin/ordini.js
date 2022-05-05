import OrdersTable from '../../components/Admin/OrdersTable';
import ContainerApp from '../../components/atoms/ContainerApp';
import orderService from '../../services/orderService';
import OrdersStatus from '../../components/Admin/OrdersStatus';
import TotalRevenue from '../../components/Admin/TotalRevenue';
import useIsAdmin from '../../hooks/admin/useIsAdmin';
import { useState } from 'react';
import OrdersFilters from '../../components/Admin/OrdersFilters';

const OrderService = new orderService();

export const getServerSideProps = async () => {
  const orders = await OrderService.getAllOrders();
  return { props: orders };
};

const Ordini = ({ orders }) => {
  const [ordersToDisplay, setOrdersToDisplay] = useState(orders);
  const [{ loading, proceed }] = useIsAdmin();

  if (loading) {
    <p>Loading...</p>;
  }

  return (
    proceed && (
      <ContainerApp>
        <TotalRevenue orders={orders} />
        {/* <p>Totale ordini {orders.length}:</p>
        <OrdersStatus orders={orders} title="Nuovi" status="Nuovo" />
        <OrdersStatus orders={orders} title=" - In lavorazione" status="In Lavorazione" />
        <OrdersStatus orders={orders} title=" - Completati" status="Completato" />
        <OrdersStatus orders={orders} title=" - Cancellati" status="Cancellato" /> */}
        <OrdersFilters
          orders={orders}
          ordersToDisplay={ordersToDisplay}
          setOrdersToDisplay={setOrdersToDisplay}
        />
        <OrdersTable ordersToDisplay={ordersToDisplay} />
      </ContainerApp>
    )
  );
};

export default Ordini;
