import React from "react";
import InactiveIconButton from "../components/InactiveIconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";

export default {
  title: "InactiveIconButton"
};

export function WalkButton() {
  return (
    <InactiveIconButton>
      <Walk />
    </InactiveIconButton>
  );
}

export function StarButton() {
  return (
    <InactiveIconButton>
      <Star />
    </InactiveIconButton>
  );
}

export function EuroButton() {
  return (
    <InactiveIconButton>
      <Euro />
    </InactiveIconButton>
  );
}

export function FoodButton() {
  return (
    <InactiveIconButton>
      <Food />
    </InactiveIconButton>
  );
}
