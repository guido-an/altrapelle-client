import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HowToUseIt({ howToUseIt }) {
  return (
    <>
      <Title>Indicazioni per l'uso</Title>
      <P>{howToUseIt}</P>
    </>
  );
}

const Title = styled.h2`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
`;
const P = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  line-height: 25px;
  position: relative;
  bottom: 10px;
`;

const { string } = PropTypes;

HowToUseIt.propTypes = {
  howToUseIt: string.isRequired,
};
