import React from "react";
import styled from "styled-components";

const RatingIcon = styled.button`
  height: 55px;
  width: 55px;
  fill: #bababa;
  border: none;
  outline: none;
  padding: 1px;
`;

export default function RatingButton({ children }) {
  return <RatingIcon>{children}</RatingIcon>;
}
