import React from "react";
import ActiveIconButton from "../components/ActiveIconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";

export default {
  title: "ActiveIconButton"
};

export function ActiveWalkButton() {
  return (
    <ActiveIconButton active={true}>
      <Walk />
    </ActiveIconButton>
  );
}

export function ActiveStarButton() {
  return (
    <ActiveIconButton active={true}>
      <Star />
    </ActiveIconButton>
  );
}

export function ActiveEuroButton() {
  return (
    <ActiveIconButton active={true}>
      <Euro />
    </ActiveIconButton>
  );
}

export function ActivFoodButton() {
  return (
    <ActiveIconButton active={true}>
      <Food />
    </ActiveIconButton>
  );
}
