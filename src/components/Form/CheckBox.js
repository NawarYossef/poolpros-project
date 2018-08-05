import "normalize.css";
import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const LabelForCheckBox = styled.label`
  @media (max-width: 1024px) {
    margin-left: 20px;
  }
`;
const Input = styled.input`
  @media (max-width: 1024px) {
    font-size: 1em;
    margin-left: 0px;
  }
`;

export const CheckBox = props => {
  return (
    <LabelForCheckBox className={"label-for-checkbox"}>
      <Input
        type="checkbox"
        checked={props.checked}
        name={props.boxName}
        onChange={e => props.handleInputChange(e)}
      />
      <span className={"checkmark"} />
    </LabelForCheckBox>
  );
};
