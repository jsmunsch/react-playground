import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";
import PropTypes from "prop-types";

const FilterBarContainer = styled.nav`
  display: flex;
  width: 415px;
  height: 135px;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-around;
  background-color: #fe6f61;
`;

export default function FilterBar({ selected }) {
  return (
    <FilterBarContainer>
      <IconButton active={selected === "0"}>
        <Walk />
      </IconButton>
      <IconButton active={selected === "1"}>
        <Star />
      </IconButton>
      <IconButton active={selected === "2"}>
        <Euro />
      </IconButton>
      <IconButton active={selected === "3"}>
        <Food />
      </IconButton>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  selected: PropTypes.string
};

FilterBar.propTypes = {
  active: PropTypes.bool
};
