import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ScreenBenefits({ screen }) {
  return (
    <ScreenContainer>
      <Image src={screen.url} alt={screen.alt} width="1200" height="527" />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const { string } = PropTypes;

ScreenBenefits.propTypes = {
  screen: string.isRequired,
};
