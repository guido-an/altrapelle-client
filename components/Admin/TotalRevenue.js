const TotalRevenue = ({ orders }) => {
  const calculateTotalRevenue = () => {
    let totalRevenue = 0;
    orders.forEach(order => {
      if (order.stateOfTheOrder === 'Completato') {
        totalRevenue += order.totalPriceOrder;
      }
    });
    return totalRevenue.toFixed(2);
  };
  return (
    <div>
      <p>Totale entrate ordini completati: {calculateTotalRevenue()}€</p>
    </div>
  );
};

export default TotalRevenue;
