import styled from "styled-components";

const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ cardFrontBackgroundColor }) => cardFrontBackgroundColor};
  color: ${({ cardFrontFontColor }) => cardFrontFontColor};
  transform: rotateY(180deg);
  z-index: 3;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
`;

export default CardFront;
