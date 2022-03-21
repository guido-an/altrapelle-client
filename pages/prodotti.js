import React from 'react';
import styled from 'styled-components';
import productService from '../services/productService';
import ContainerApp from '../components/atoms/ContainerApp';
import DisplayProducts from '../components/molecules/DisplayProducts';
import IntroPage from '../components/molecules/IntroPage';
import OverFooter from '../components/molecules/OverFooter';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';

const service = new productService();

export const getStaticProps = async () => {
  return {
    props: { products: await service.getAllProducts() },
  };
};

const Products = ({ products }) => {
  return (
    <AnimatedWrapper>
      <ContainerApp>
        <IntroPage>I nostri prodotti</IntroPage>
        <ProductsContainer>
          <DisplayProducts products={products} />
        </ProductsContainer>
      </ContainerApp>
      <OverFooter />
    </AnimatedWrapper>
  );
};

const ProductsContainer = styled.div`
  margin-bottom: 80px;
  @media (min-width: 968px) {
    margin: 40px 120px;
  }
`;

export default Products;
