import React from "react";
import styled from "styled-components";
import createCards from "../utils/createCards";
import CardContainer from "../containers/CardContainer";

const CardCollection = ({
  numberOfCards,
  noZero,
  noHalfy,
  showInfinityCard,
  showTShirtSizingCards
}) => (
  <StyledCardHolder>
    {createCards(
      numberOfCards,
      noZero,
      noHalfy,
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
  justify-content: space-between;
  padding: 4vh 4vw;
`;

export default CardCollection;
