import React from "react";
import styled from "styled-components";

const ActiveButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => (props.active ? "#547fb3" : "white")};
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  fill: ${props => (props.active ? "white" : "#547fb3")};
  padding: 14px;
  outline: none;
`;

export default function ActiveIconButton({ active, children }) {
  return <ActiveButton active={active}>{children}</ActiveButton>;
}
