import "normalize.css";
import React from "react";
import "../../styles/main.css";

export const CheckBox = props => {
  return (
    <label className={"container"}>
      <input
        type="checkbox"
        name={props.boxName}
        onChange={e => props.handleInputChange(e)}
      />
      <span className={"checkmark"} />
    </label>
  );
};
