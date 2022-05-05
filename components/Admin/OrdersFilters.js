import PropTypes from 'prop-types';
import styled from 'styled-components';

const OrdersFilters = ({ orders, ordersToDisplay, setOrdersToDisplay }) => {
  function filterOrders(e) {
    if (e.target.value === 'All') {
      setOrdersToDisplay(orders);
      return;
    }
    const filteredOrders = orders.filter(order => order.stateOfTheOrder === e.target.value);
    setOrdersToDisplay(filteredOrders);
  }

  return (
    <div>
      <Select onChange={e => filterOrders(e)}>
        <option value="All">Tutti gli ordini</option>
        <option value="Nuovo">Nuovi</option>
        <option value="In Lavorazione">In Lavorazione</option>
        <option value="Completato">Completati</option>
        <option value="Cancellato">Cancellati</option>
      </Select>
      <span>{ordersToDisplay.length}</span>
    </div>
  );
};

export default OrdersFilters;

const Select = styled.select`
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadowLight};
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 20px;
  outline: none;
  color: ${({ theme }) => theme.greyText};
`;

const { array, func } = PropTypes;

OrdersFilters.propTypes = {
  orders: array.isRequired,
  ordersToDisplay: array.isRequired,
  setOrdersToDisplay: func.isRequired,
};
