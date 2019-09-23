import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 3 px;
  background-color: white;
`;

export default function BadgeBar({ children }) {
  return <BadgeContainer>{children}</BadgeContainer>;
}
