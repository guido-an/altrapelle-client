import PropTypes from 'prop-types'
import FeatureImage from './FeatureImage/FeatureImage'
import ProductOverview from './ProductOverview/ProductOverview'
import styled from 'styled-components'



export default function ProductHeader({ product }) {
    return(
        <Container>
            <FeatureImage product={product} />
            <ProductOverview product={product} />
        </Container>
    )
}


const Container = styled.div`
   @media(min-width: 1200px){
       margin: 20px ${({ theme }) => theme.desktopContainer};
       display: flex;
       justify-content: space-between;
   }
`
const ImageContainer = styled.div`
   @media(min-width: 1200px){
       
   }
`

const { object } = PropTypes

ProductHeader.propTypes = {
     product: object.isRequired
  }

