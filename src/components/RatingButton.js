import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RatingIcon = styled.button`
  height: 55px;
  width: 55px;
  fill: ${props => (props.active ? "#547FB3" : "#bababa")};
  border: none;
  outline: none;
  padding: 1px;
`;

export default function RatingButton({ active, children }) {
  return <RatingIcon active={active}>{children}</RatingIcon>;
}

RatingButton.propTypes = {
  children: PropTypes.object
};
