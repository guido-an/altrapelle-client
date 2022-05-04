import styled from 'styled-components';
import PropTypes from 'prop-types';
import Product from './Product';

export default function DisplayProducts({ products, featured }) {
  console.log(featured, 'featured');
  function displayProductsPerCategory(products) {
    return products.map(product => {
      if (product.test) {
        return;
      }
      switch (product.category) {
        case 'TENLESS':
          return <Product key={product.id} product={product} />;
        default:
          return console.error('Error in displaying the product');
      }
    });
  }

  function displayFeaturedProducts(products) {
    return products.map(product => {
      if (product.featured) {
        return <Product key={product.id} product={product} />;
      }
    });
  }

  return (
    <ContainerProducts>
      {featured ? displayFeaturedProducts(products) : displayProductsPerCategory(products)}
    </ContainerProducts>
  );
}

const ContainerProducts = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const { array } = PropTypes;
DisplayProducts.propTypes = {
  products: array.isRequired,
};
