import React from "react";
import styled from "styled-components";
import {
  ActiveWalkButton,
  InactiveStarButton,
  InactiveFoodButton,
  InactiveEuroButton,
  InactiveWalkButton,
  ActiveStarButton,
  ActiveFoodButton,
  ActiveEuroButton
} from "../stories/IconButton.stories";

const FilterBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 415px;
  height: 135px;
  position: sticky;
  align-items: center;
  justify-content: space-around;
  background-color: #fe6f61;
`;

export function FilterBarFirst() {
  return (
    <FilterBarContainer>
      <ActiveWalkButton />
      <InactiveStarButton />
      <InactiveFoodButton />
      <InactiveEuroButton />
    </FilterBarContainer>
  );
}
export function FilterBarSecond() {
  return (
    <FilterBarContainer>
      <InactiveWalkButton />
      <ActiveStarButton />
      <InactiveFoodButton />
      <InactiveEuroButton />
    </FilterBarContainer>
  );
}
export function FilterBarThird() {
  return (
    <FilterBarContainer>
      <InactiveWalkButton />
      <InactiveStarButton />
      <ActiveFoodButton />
      <InactiveEuroButton />
    </FilterBarContainer>
  );
}
export function FilterBarFourth() {
  return (
    <FilterBarContainer>
      <InactiveWalkButton />
      <InactiveStarButton />
      <InactiveFoodButton />
      <ActiveEuroButton />
    </FilterBarContainer>
  );
}
