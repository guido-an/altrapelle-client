import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from './TopBar/TopBar';
import ScreenBenefits from './ScreenBenefits/ScreenBenefits';
import Benefits from './Benefits/Benefits';
import MoleculeText from './MoleculeText/MoleculeText';
import HowToUseIt from './HowToUseIt/HowToUseIt';
import Ingredients from './Ingredients/Ingredients';
export default function ProductDescription({ product }) {
  const { topBarText, screen } = product;

  const componentMapping = {
    moleculeText: MoleculeText,
    benefits: Benefits,
    howToUseIt: HowToUseIt,
    ingredients: Ingredients,
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
    return (
      <>
        <Title>Step 1</Title>
        <p>
          Applicare TENLESS TRATTAMENTO ANTI-MACCHIE, due volte al giorno direttamente sull’area
          interessata (mani, viso, décolleté o corpo) per contrastare le macchie esistenti e
          prevenire la formazione di nuove.
        </p>
        <Title>Step 2</Title>
        <p>
          Applicare TENLESS BOOSTER ILLUMINANTE, uso quotidiano, due volte al giorno su viso, collo
          e décolleté per migliorare l’incarnato illuminandolo ed uniformandolo e per prevenire la
          formazione di macchie scure.
        </p>
        <Title>Step 3</Title>
        <p>
          Dopo il completo assorbimento di TENLESS BOOSTER ILLUMINANTE, applicare i consueti
          prodotti di skincare (ad esempio creme, solari, fondotinta).
        </p>
      </>
    );
  }

  return (
    <Container>
      <TopBar topBarText={topBarText} />
      <DescriptionContainer>
        {screen && <ScreenBenefits screen={screen} />}
        {product.id === '3' && howToApplyTheProduct()}
        {displayDescription()}
      </DescriptionContainer>
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
  padding: 0 ${({ theme }) => theme.mobileContainer} 60px;
  border-radius: 4px;
  margin-top: 30px;
  @media (min-width: 968px) {
    padding: 0 15% 60px;
    margin: 20px auto 0;
  }
`;

const { object } = PropTypes;
ProductDescription.propTypes = {
  product: object.isRequired,
};
