import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 3em;
  background: ${props => (props.color ? "grey" : "peachpuff")};
  height: 100px;
  text-align: center;
  line-height: 250px;
`;

function renderPage() {
  return (
    <>
      <Input
        type="text"
        color="blue"
        placeholder="Alles Banane?"
        disabled={false}
      />
      <Input />
    </>
  );
}

export default renderPage;
