import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Benefits({ benefits }) {
  return (
    <>
      <Title>{benefits?.title}</Title>
      {benefits?.list.map((benefit, i) => (
        <P key={i}>
          {benefit[0]} <Span>{benefit[1]}</Span>
        </P>
      ))}
    </>
  );
}

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  margin-top: 40px;
`;
const P = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: 500;
  position: relative;
  bottom: 10px;
`;
const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
`;
const { object, string } = PropTypes;

Benefits.propTypes = {
  benefits: object.isRequired,
};
