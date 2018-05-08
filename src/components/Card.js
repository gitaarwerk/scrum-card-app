import React from 'react';
import styled from 'styled-components';

const Card = ({
  children,
  onClickCard,
  onClickDeselectCard,
  onClickTurnCard,
  selected,
  turned
}) => (
  <StyledCard
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
    <Front>{children === 0.5 ? '½' : children}</Front>
    <Back />
  </StyledCard>
);

const Back = styled.div`
  display: flex;
  cursor: pointer;
  background: hotpink;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  width: ${props => (props.selected ? '90vw' : '20vw')};
  padding: ${props => (props.selected ? '50% 0' : '10vw 0')};
  border-radius: 1.5rem;
  box-shadow: ${props =>
    props.selected ? '4vw 4vw 30px rgba(0, 0, 0, 0.05)' : '3px 4px 10px rgba(0, 0, 0, 0.2)'};
  position: ${props => (props.selected ? 'absolute' : 'static')};
`;

const Front = styled.div`
  display: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  width: 90vw;
  padding: 50% 0;
  background: gray;
  border-radius: 1.5rem;
  justify-content: center;
  font-size: 10vw;
  font-weight: bold;
  box-shadow: 4vw 4vw 30px rgba(0, 0, 0, 0.05);
  position: absolute;
`;

const StyledCard = styled.div`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  flex: 0 21vw;
  width: '20vw';
  padding: 10vw 0;
  background: white;
  border-radius: 1.5rem;
  justify-content: center;
  font-size: 10vw;
  font-weight: bold;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 3vw;
`;

export default Card;
