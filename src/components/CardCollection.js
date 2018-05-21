import React from "react";
import styled from "styled-components";
import createCards from "../utils/createCards";
import CardContainer from "../containers/CardContainer";

const CardCollection = ({
  numberOfCards,
  showZeroCard,
  showHalfyCard,
  showInfinityCard,
  showTShirtSizingCards
}) => (
  <StyledCardHolder>
    {createCards(
      numberOfCards,
      showZeroCard,
      showHalfyCard,
      showInfinityCard,
      showTShirtSizingCards
    ).map((result, index) => (
      <CardContainer key={result}>{result}</CardContainer>
    ))}
  </StyledCardHolder>
);

const StyledCardHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: start;
`;

export default CardCollection;
