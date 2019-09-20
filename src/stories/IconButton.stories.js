import React from "react";
import IconButton from "../components/IconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";

export default {
  title: "IconButton"
};

export function WalkButton() {
  return (
    <IconButton>
      <Walk />
    </IconButton>
  );
}

export function StarButton() {
  return (
    <IconButton>
      <Star />
    </IconButton>
  );
}

export function EuroButton() {
  return (
    <IconButton>
      <Euro />
    </IconButton>
  );
}

export function FoodButton() {
  return (
    <IconButton>
      <Food />
    </IconButton>
  );
}
