import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Without({ without }) {
  return (
    <>
      <Title>Senza</Title>
      {without.map(item => {
        return (
          <div>
            <P>{item}</P>
          </div>
        );
      })}
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
  font-size: 0.9rem;
`;

const { array } = PropTypes;
Without.propTypes = {
  Without: array.isRequired,
};
