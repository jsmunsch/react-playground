import React from "react";
import ActionButton from "../components/ActionButton";
import Done from "../Icons/Done";
import Cancel from "../Icons/Cancel";
import Add from "../Icons/Add";

export default {
  title: "ActionButton"
};

export function SubmitButton() {
  return (
    <ActionButton>
      <Done />
    </ActionButton>
  );
}

export function CancelButton() {
  return (
    <ActionButton>
      <Cancel />
    </ActionButton>
  );
}

export function AddButton() {
  return (
    <ActionButton>
      <Add />
    </ActionButton>
  );
}
