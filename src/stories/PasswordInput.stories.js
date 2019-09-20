import React from "react";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "PasswordInput"
};

export const Default = () => {
  const [password, setPassword] = React.useState("");
  return <PasswordInput value={password} onChange={setPassword} />;
};
