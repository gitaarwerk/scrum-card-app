import React from "react";
import styled from "styled-components";

const CardBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 4;
  border: solid 2vw white;
  transform: rotateY(0deg);
  border-radius: 1.5rem;
  ${({ cardBackgroundColor, cardBackgroundImage }) =>
    cardBackgroundImage
      ? `background: url(${cardBackgroundImage}) 50% 50% no-repeat; background-size: cover;`
      : `background: ${cardBackgroundColor}`};
`;

export default CardBack;
