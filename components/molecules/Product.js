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
        <div key={product.id}>
          <ImageContainer>
            <Image src={product.images[0]} width="640" height="534" alt={product.name} />
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
        </div>
      </Link>
    </motion.div>
  );
}

const ImageContainer = styled.div`
  @media (min-width: 968px) {
    width: 400px;
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
