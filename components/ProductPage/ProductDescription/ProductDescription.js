import PropTypes from 'prop-types'
import styled from 'styled-components'
import TopBar from './TopBar/TopBar'
import ScreenBenefits from './ScreenBenefits/ScreenBenefits'
import Benefits from './Benefits/Benefits'
import MoleculeText from './MoleculeText/MoleculeText'
import HowToUseIt from './HowToUseIt/HowToUseIt';
import Ingredients from './Ingredients/Ingredients';
export default function ProductDescription({ product }) {
    const { topBarText, screen, moleculeText, benefits, howToUseIt, ingredients } = product
    return(
        <Container>
            <TopBar topBarText={topBarText}/>
            <DescriptionContainer>
              <ScreenBenefits screen={screen} />
              <MoleculeText moleculeText={moleculeText} />
              <Benefits benefits={benefits} marginTop="40px" /> 
              <HowToUseIt howToUseIt={howToUseIt} marginTop="40px" /> 
              <Ingredients ingredients={ingredients} marginTop="40px" /> 
            </DescriptionContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 80px ${({ theme }) => theme.mobileContainer};
       @media(min-width: 768px){
           margin: 40px ${({ theme }) => theme.desktopContainer};
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