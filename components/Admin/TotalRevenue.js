const TotalRevenue = ({ orders }) => {
  const calculateTotalRevenue = () => {
    let totalRevenue = 0;
    orders.forEach(order => (totalRevenue += order.totalPriceOrder));
    return totalRevenue.toFixed(2);
  };
  return (
    <div>
      <p>Totale entrate: {calculateTotalRevenue()}€</p>
    </div>
  );
};

export default TotalRevenue;
