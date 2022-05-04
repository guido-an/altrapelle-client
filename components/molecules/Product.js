import React, { useTheme } from 'styled-components';
import styled from 'styled-components';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Product({ product }) {
  const theme = useTheme();
  return (
    <motion.div whileHover={{ scale: 1.05, cursor: 'pointer' }}>
      <Link scroll={false} href={`/${product.slug}`}>
        <ProductContainer key={product.id}>
          <ImageContainer>
            <Image
              src={product.images[0].url}
              width="640"
              height="534"
              alt={product.images[0].alt}
            />
          </ImageContainer>
          <ProductName>{product.name}</ProductName>
          <Button
            href={`/${product.slug}`}
            margin="20px auto 40px"
            bgColor={theme.colors.lightBlue}
            bgHover={theme.colors.blue}
          >
            Scopri di più
          </Button>
        </ProductContainer>
      </Link>
    </motion.div>
  );
}

const ProductContainer = styled.div`
  @media (min-width: 968px) {
    width: 350px;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 968px) {
    width: 350px;
    margin: 0 auto;
  }
`;
const ProductName = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  position: relative;
  bottom: 20px;
`;

const { object } = PropTypes;

Product.propTypes = {
  product: object.isRequired,
};
