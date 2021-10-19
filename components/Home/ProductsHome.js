import styled from 'styled-components'
import PropTypes from 'prop-types'
import OverTitleSection from '../atoms/OverTitleSection'
import TitleSection from '../atoms/TitleSection'
import DisplayProducts from '../molecules/DisplayProducts'

export default function Products ({ products }) {
  return (
    <Container>
      <>
        <OverTitleSection align='center'>
               LE LINEE ALTRAPELLE
        </OverTitleSection>
        <TitleSection align='center'>
                Prodotti in evidenza
        </TitleSection>
        <P>Scopri i nostri prodotti dedicati alla cura e al benessere della pelle.
        </P>
      </>
      <DisplayProducts products={products} />
    </Container>
  )
}

const Container = styled.div`
    margin: 40px ${({ theme }) => theme.mobileContainer} 0;
    @media(min-width: 768px){
        margin: 80px auto;
    }
`
const P = styled.p`
    text-align: center;
    padding: 0 ${({ theme }) => theme.mobileContainer};
    position: relative;
    bottom: 20px;
    @media(min-width: 768px){
        max-width: 50%;
        margin: 0 auto;
    }
`

const { array } = PropTypes

Products.propTypes = {
  products: array.isRequired
}
