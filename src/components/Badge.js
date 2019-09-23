import React from "react";
import styled from "styled-components";

const BadgeButton = styled.button`
  height: 24 px;
  /* padding: 3 px; */
  color: white;
  background-color: #547fb3;
  border-radius: 5px;
  border: none;
  font-size: 16 px;
  margin: 5px;
`;

export default function Badge({ children }) {
  return <BadgeButton>{children}</BadgeButton>;
}
