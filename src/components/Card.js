import React from "react";
import styled from "styled-components";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = ({
  children,
  onClickCard,
  onClickDeselectCard,
  onClickTurnCard,
  selected,
  turned,
  cardBackgroundImage,
  cardBackgroundColor
}) => (
  <StyledCard>
    <FlipperContainer
      selected={selected}
      turned={turned}
      onClick={() => {
        console.log(selected, turned);
        selected === false
          ? onClickCard(children)
          : turned
            ? onClickDeselectCard()
            : onClickTurnCard();
      }}
    >
      <Flipper turned={turned} selected={selected}>
        <CardFront>
          <CardNumber turned={turned} selected={selected}>
            {children === 0.5 ? "½" : children}
          </CardNumber>
        </CardFront>
        <CardBack
          cardBackgroundColor={cardBackgroundColor}
          cardBackgroundImage={cardBackgroundImage}
        />
      </Flipper>
    </FlipperContainer>
  </StyledCard>
);

const FlipperContainer = styled.div`
  transition: all 0.5 ease-in-out;
  perspective: 1000px;
  width: ${props => (props.selected ? "90vw" : "20vw")};
  padding: ${props => (props.selected ? "10vh 6vw" : "")};
  position: ${props => (props.selected ? "absolute" : "static")};
  z-index: 2;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${props => (props.selected ? "rgba(0,0,0,0.35)" : "")};
`;

const Flipper = styled.div`
  transition: 0.6s ease-in-out;
  transform-style: preserve-3d;
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  ${props =>
    props.turned && props.selected ? "transform: rotateY(180deg);" : ""};
  ${props => (!props.selected ? "transform: rotateY(180deg);" : "")};

  box-shadow: ${props =>
    props.selected
      ? "4vw 4vw 30px rgba(0, 0, 0, 0.05)"
      : "3px 4px 10px rgba(0, 0, 0, 0.2)"};
`;

const StyledCard = styled.div`
  flex: 0 21vw;
  width: 20vw;
  height: 25vw;
  justify-content: center;
  margin: 0 2vw 4vw;
`;

const CardNumber = styled.div`
  font-weight: bold;
  margin: 0 auto;
  font-size: ${props => (props.turned && props.selected ? "50vw" : "12vw")};
`;

export default Card;
