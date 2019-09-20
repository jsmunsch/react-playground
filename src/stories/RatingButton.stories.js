import React from "react";
import RatingButton from "../components/RatingButton";
import EuroGrey from "../Icons/EuroGrey";

export default {
  title: "RatingButton"
};

export function InactiveCostRating() {
  return (
    <RatingButton>
      <EuroGrey />
    </RatingButton>
  );
}

export function ActiveCostRating() {
  return (
    <RatingButton active={true}>
      <EuroGrey />
    </RatingButton>
  );
}
