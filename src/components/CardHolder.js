import React from 'react';
import styled from 'styled-components';
import createCards from '../utils/createCards';
import CardContainer from '../containers/CardContainer';

const CardHolder = ({ numberOfCards, noZero, noHalfy }) => (
  <StyledCardHolder>
    {createCards(numberOfCards, false, false).map((result, index) => (
      <CardContainer key={result}>{result}</CardContainer>
    ))}
  </StyledCardHolder>
);

const StyledCardHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  /* Then we define how is distributed the remaining space */
  justify-content: space-evenly;
`;

const defaultProps = {
  noZero: false,
  noHalfy: false
};

export default CardHolder;
