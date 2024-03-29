import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import productService from '../services/productService';
import ProductHeader from '../components/ProductPage/ProductHeader/ProductHeader';
import ProductDescription from '../components/ProductPage/ProductDescription/ProductDescription';
import OverFooter from '../components/molecules/OverFooter';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';
import { NextSeo } from 'next-seo';

const service = new productService();

export const getStaticPaths = async () => {
  const data = await service.getAllProducts();
  const paths = data.map(product => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;
  const data = await service.getSingleProduct(slug);

  return {
    props: { product: data },
  };
};

const Product = ({ product }) => {
  const [inputQuantity, setInputQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { name } = product[0];
  const { seo } = product[0];

  return (
    <AnimatedWrapper>
      <NextSeo title={seo?.title} description={seo?.description} />
      <ProductHeader product={product[0]} />
      <ProductDescription product={product[0]} />
      <OverFooter />
    </AnimatedWrapper>
  );
};

export default Product;
