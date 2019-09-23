import React from "react";
import BadgeBar from "../components/BadgeBar";
import Badge from "../components/Badge";

export default {
  title: "BadgeBar"
};

export const TwoBadgeBar = () => (
  <BadgeBar>
    <Badge>Hello</Badge>
    <Badge>World</Badge>
  </BadgeBar>
);

export function FourBadgeBar() {
  return (
    <BadgeBar>
      <Badge>Asia</Badge>
      <Badge>Döner</Badge>
      <Badge>macht</Badge>
      <Badge>schöner</Badge>
    </BadgeBar>
  );
}
