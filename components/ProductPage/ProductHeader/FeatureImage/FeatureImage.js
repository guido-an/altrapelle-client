import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function FeatureImage({ product }) {
  return (
    <ImageContainer>
      <Image src={product.images[1].url} width="500" height="500" alt={product.images[1].alt} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  padding: 20px ${({ theme }) => theme.mobileContainer} 30px;
  img {
    border-radius: 8px;
  }
  @media (min-width: 1200px) {
    padding: 20px 20px 20px 0;
    min-width: 50%;
  }
`;

const { object } = PropTypes;

FeatureImage.propTypes = {
  product: object.isRequired,
};
