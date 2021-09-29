import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Benefits({ benefits, marginTop }) {
    return (
        <>
          <Title marginTop={marginTop}>{benefits.title}:</Title>
          {benefits.list.map((benefit, i) => <P key={i}>{benefit[0]} <Span>{benefit[1]}</Span></P>)}
       </>
    )
}

const Title = styled.h3`
       margin-top: ${( {marginTop }) => marginTop};
       color: ${({ theme }) => theme.colors.blue};
`
const P = styled.p`
      color: ${({ theme }) => theme.colors.lightBlue};
      font-weight: 500;
      position: relative;
      bottom: 10px;
`
const Span = styled.span`
      color: ${({ theme }) => theme.colors.blue};
      font-weight: 500;
`
const { object, string } = PropTypes

Benefits.propTypes = {
    benefits: object.isRequired,
     marginTop: string
  }