import PropTypes from 'prop-types'
import styled from 'styled-components'
import TopBar from './TopBar/TopBar'
import Benefits from './Benefits/Benefits'
import Image from 'next/image'


export default function ProductDescription({ product }) {
    console.log(product, 'screen')
    return(
        <Container>
            <TopBar product={product}/>
            <DescriptionContainer>
              <IconsContainer>
                 {product.icons.map(icon => <Image key={product.id} src={icon} width="84" height="84"/>
                 )}
              </IconsContainer>
              <Benefits product={product}/>
              <ImageContainer>
                 <Image src={product.screen} width="1200" height="527"/>
              </ImageContainer>
            </DescriptionContainer>
           
        </Container>
    )
}


const Container = styled.div`
      margin: 40px ${({ theme }) => theme.mobileContainer};
   @media(min-width: 768px){
       margin: 20px ${({ theme }) => theme.desktopContainer};
       
   }
`
const DescriptionContainer = styled.div`
     background-color: ${({ theme }) => theme.colors.backgroundGrey};
    @media(min-width: 768px){
       
       
   }
`
const IconsContainer = styled.div`
     padding-top: 20px;
     background-color: ${({ theme }) => theme.colors.backgroundGrey};
     margin: 20px 0 40px;
     text-align: center;
   @media(min-width: 768px){
       display: flex;
       justify-content: space-evenly;
         img {
             width: 124px;
         }
   }
`
const ImageContainer = styled.div`
    @media(min-width: 768px){
       width: 60%;
       margin: 0 auto;
       
   }
`


const { object } = PropTypes

ProductDescription.propTypes = {
     product: object.isRequired
  }

