import styled from 'styled-components'
import PropTypes from 'prop-types'
import Product from './Product'

export default function DisplayProducts ({ products }){
    return(
        <ContainerProducts>
         {products.map(product => {
            return (
                <>
                   <Product product={product} />
                </>
            )
          })}
        </ContainerProducts>
    )
}

const ContainerProducts = styled.div `
    
    @media(min-width: 768px){
        display: flex;
        justify-content: space-evenly;
        margin: 0 ${({ theme }) => theme.desktopContainer}
    }
`

const { array } = PropTypes

DisplayProducts.propTypes = {
     products: array.isRequired
  }




