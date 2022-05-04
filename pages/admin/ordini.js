import OrdersTable from '../../components/Admin/OrdersTable';
import ContainerApp from '../../components/atoms/ContainerApp';
import orderService from '../../services/orderService';
import OrdersStatus from '../../components/Admin/OrdersStatus';
import TotalRevenue from '../../components/Admin/TotalRevenue';
import useIsAdmin from '../../hooks/admin/useIsAdmin';

const OrderService = new orderService();

export const getServerSideProps = async () => {
  const orders = await OrderService.getAllOrders();
  return { props: orders };
};

const Ordini = ({ orders }) => {
  const [{ loading, proceed }] = useIsAdmin();

  if (loading) {
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
