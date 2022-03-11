import PropTypes from 'prop-types';

const OrderStatus = ({ orders, status, title }) => {
  const calculateOrders = () => {
    let ordersToCalculate = 0;
    orders.forEach(order => {
      if (order.stateOfTheOrder === status) {
        ordersToCalculate++;
      }
    });
    return ordersToCalculate;
  };
  return (
    <span>
      {title} {calculateOrders()}
    </span>
  );
};

export default OrderStatus;

const { string, array } = PropTypes;
OrderStatus.propTypes = {
  orders: array.isRequired,
  status: string.isRequired,
  title: string.isRequired,
};
