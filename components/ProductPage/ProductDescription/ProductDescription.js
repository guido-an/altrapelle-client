import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TopBar from './TopBar/TopBar'
import ScreenBenefits from './ScreenBenefits/ScreenBenefits'
import Benefits from './Benefits/Benefits'
import MoleculeText from './MoleculeText/MoleculeText'
import HowToUseIt from './HowToUseIt/HowToUseIt';
import Ingredients from './Ingredients/Ingredients';
export default function ProductDescription({ product }) {
    const { topBarText, screen } = product

    const componentMapping = {
        moleculeText: MoleculeText,
        benefits: Benefits,
        howToUseIt: HowToUseIt,
        ingredients: Ingredients,
    }

    function displayDescription(){
        return product.properties && product.properties.map((property, i) => {
            const Component = componentMapping[property.type]
             return <Component key={i} {...property.props} />
          })
    }
 
     return(
        <Container>
            <TopBar topBarText={topBarText}/>
            <DescriptionContainer>
              { screen &&  <ScreenBenefits screen={screen} /> }
              { displayDescription() }
            </DescriptionContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 80px ${({ theme }) => theme.mobileContainer} 120px;
       @media(min-width: 768px){
           margin: 40px ${({ theme }) => theme.desktopContainer} 120px;
       }
`
const DescriptionContainer = styled.div`
     background-color: ${({ theme }) => theme.colors.backgroundGrey};
     padding: 0 ${({ theme }) => theme.mobileContainer} 60px;
     border-radius: 4px;
     margin-top: 30px;
       @media(min-width: 968px){
           padding: 0 15% 60px;;
           margin: 20px auto 0; 
       }
 
`

const { object } = PropTypes
ProductDescription.propTypes = {
     product: object.isRequired
  }
  