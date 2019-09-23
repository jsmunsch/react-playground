import React from "react";
import Walk from "../icons/Walk";
import Details from "./Details";

export default function Distance(props) {
  return (
    <Details>
      <Walk />
      &nbsp;
      {props.value} min
    </Details>
  );
}
