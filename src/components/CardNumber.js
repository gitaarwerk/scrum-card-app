import React from "react";
import styled from "styled-components";

const CardNumber = styled.div`
  font-weight: bold;
  margin: 0 auto;
  font-size: ${props => (props.turned && props.selected ? "50vw" : "12vw")};
`;

export default CardNumber;
