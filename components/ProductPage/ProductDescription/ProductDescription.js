import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from './TopBar/TopBar';
import ScreenBenefits from './ScreenBenefits/ScreenBenefits';
import Benefits from './Benefits/Benefits';
import MoleculeText from './MoleculeText/MoleculeText';
import HowToUseIt from './HowToUseIt/HowToUseIt';
import Ingredients from './Ingredients/Ingredients';
import Without from './Without/Without';
export default function ProductDescription({ product }) {
  const { topBarText, screen } = product;

  const componentMapping = {
    moleculeText: MoleculeText,
    benefits: Benefits,
    howToUseIt: HowToUseIt,
    ingredients: Ingredients,
    without: Without,
  };

  function displayDescription() {
    return (
      product.properties &&
      product.properties.map((property, i) => {
        const Component = componentMapping[property.type];
        return <Component key={i} {...property.props} />;
      })
    );
  }

  //   Quick fix
  function howToApplyTheProduct() {
    return product.steps?.map((step, i) => {
      return (
        <div key={i}>
          <Title>{step.title}</Title>
          <p>{step.description}</p>
        </div>
      );
    });
  }

  return (
    <Container>
      <TopBar topBarText={topBarText} />
      <DescriptionContainer screen={screen}>
        {screen && <ScreenBenefits screen={screen} />}
        {product.combinedProduct && howToApplyTheProduct()}
        {displayDescription()}
      </DescriptionContainer>
      {product.id === '9' && (
        <p>
          *Effetto temporaneo Reversibile <br />
          **Valutazione Strumentale dell’effetto antirughe a breve termine su 20 soggetti età
          <br /> >40 anni, a 4 controlli
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 80px ${({ theme }) => theme.mobileContainer} 120px;
  @media (min-width: 768px) {
    margin: 40px ${({ theme }) => theme.desktopContainer} 120px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
  position: relative;
  top: 5px;
`;
const DescriptionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  padding: ${({ screen, theme }) =>
    screen ? `0 ${theme.mobileContainer} 60px` : `10px ${theme.mobileContainer} 60px`};
  border-radius: 4px;
  margin-top: 30px;
  @media (min-width: 968px) {
    padding: ${({ screen }) => (screen ? `0 15% 60px` : `20px 15% 60px`)};
    margin: 20px auto 0;
  }
`;

const { object } = PropTypes;
ProductDescription.propTypes = {
  product: object.isRequired,
};
