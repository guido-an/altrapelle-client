import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Benefits({ product }) {
    return (
        <Container>
          <Title>{product.benefits.title}:</Title>
           {product.benefits.list.map((benefit, i) => {
               return(
                   <P key={i}>{benefit[0]} <Span>{benefit[1]}</Span></P>
               )
           })}
       </Container>
    )
}



const Container = styled.div`
      padding: 0 ${({ theme }) => theme.mobileContainer};
     
      @media(min-width: 1200px){
         text-align: center;
      }
`
const Title = styled.h3`
      padding: 10px 0 0;
      color: ${({ theme }) => theme.colors.blue};
      @media(min-width: 1200px){
        
      }
`
const P = styled.p`
      color: ${({ theme }) => theme.colors.lightBlue};
      font-weight: 500;
      @media(min-width: 1200px){
        
      }
`
const Span = styled.span`
      color: ${({ theme }) => theme.colors.blue};
      font-weight: 500;
      @media(min-width: 1200px){
        
      }
`


const { object } = PropTypes

Benefits.propTypes = {
     product: object.isRequired
  }

