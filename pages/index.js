import React from 'react';
import Link from 'next/link';
import productService from '../services/productService';
import Hero from '../components/Home/Hero';
import SubHero from '../components/Home/SubHero';
import About from '../components/Home/About';
import Problem from '../components/Home/Problem';
import ProductsHome from '../components/Home/ProductsHome';
import BeforeAndAfter from '../components/Home/BeforeAndAfter';
import OverFooter from '../components/molecules/OverFooter';
import AnimatedWrapper from '../components/atoms/AnimatedWrapper';

const service = new productService();

export const getStaticProps = async () => {
  return {
    props: { products: await service.getAllProducts() },
  };
};

const Home = ({ products }) => {
  return (
    <AnimatedWrapper>
      <Hero />
      <SubHero />
      <About />
      <Problem />
      <ProductsHome products={products} />
      <BeforeAndAfter />
      <OverFooter />
    </AnimatedWrapper>
  );
};

export default Home;
