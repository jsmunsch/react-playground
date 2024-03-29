import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonActiveBlue = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: #547fb3;
  fill: white;
  outline: none;
`;

export default function ActionButton({ children }) {
  return <ButtonActiveBlue>{children}</ButtonActiveBlue>;
}

ActionButton.propTypes = {
  children: PropTypes.object
};
