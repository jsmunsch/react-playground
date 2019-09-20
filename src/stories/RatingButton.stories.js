import React from "react";
import RatingButton from "../components/RatingButton";
import EuroGrey from "../Icons/EuroGrey";

export default {
  title: "RatingButton"
};

export function CostRating() {
  return (
    <RatingButton>
      <EuroGrey />
    </RatingButton>
  );
}
