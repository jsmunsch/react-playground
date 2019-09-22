import React from "react";
import {
  FilterBarFirst,
  FilterBarSecond,
  FilterBarThird,
  FilterBarFourth
} from "../components/FilterBar";

export default {
  title: "FilterBar"
};

export function FirstButtonSelectedFilterBar() {
  return <FilterBarFirst />;
}

export function SecondButtonSelectedFilterBar() {
  return <FilterBarSecond />;
}

export function ThirdButtonSelectedFilterBar() {
  return <FilterBarThird />;
}

export function FourthButtonSelectedFilterBar() {
  return <FilterBarFourth />;
}
