import React from "react";
import styled from "styled-components";

const InactiveButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  fill: #547fb3;
  padding: 14px;
  outline: none;
`;

export default function IconButton({ children }) {
  return <InactiveButton>{children}</InactiveButton>;
}
