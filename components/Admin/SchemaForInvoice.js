import PropTypes from 'prop-types';

const SchemaForInvoice = ({ order }) => {
  const { _id, dateOfCreation } = order;

  // T;1; {ID ORDINE}; {DATA ORDINE}
  // D;RIFERIMENTO ORDINE ALTRAPELLE: {ID ORDINE}
  // O;{CODART};{QTY};{TOTALE};{TOTALE} / 1.22 # N linee per N articoli
  // D;Spedizione gratuita

  function productsInCart() {
    return order.productsInCart.map(product => {
      const { discountedPrice, quantity, price, codeArticle, id } = product;
      const priceToAdd = discountedPrice ? discountedPrice : price;
      const total = (quantity * priceToAdd).toFixed(2);
      const codeToShow = () => {
        if (codeArticle) {
          return codeArticle;
        }
        if (id === '1') {
          return 'DCC.APT001';
        }
        if (id === '2') {
          return 'DCC.APT002';
        }
        if (id === '3') {
          return 'DCC.APT001 DCC.APT002';
        }
        if (id === '4') {
          return 'DCC.APT003';
        }
        if (id === '5') {
          return 'DCC.APT004';
        }
      };
      return (
        <div>
          <p>
            O;{codeToShow()};{quantity};{total};{(total / 1.22).toFixed(2)}
          </p>
        </div>
      );
    });
  }
  return (
    <div>
      <p>
        <strong>Per generare la fattura</strong>
      </p>
      <p>
        T;1; {_id}; {dateOfCreation.date}
      </p>
      <p>D;RIFERIMENTO ORDINE ALTRAPELLE: {_id}</p>
      {productsInCart()}
      <p>D;Spedizione gratuita</p>
    </div>
  );
};

export default SchemaForInvoice;

const { object } = PropTypes;

SchemaForInvoice.propTypes = {
  order: object,
};
