import "normalize.css";
import React from "react";
import "../../styles/main.css";

export const CheckBox = props => {
  return (
    <label className={"container"}>
      <input
        type="checkbox"
        name={props.boxName}
        onChange={props.handleInputChange}
      />
      <span className={"checkmark"} />
    </label>
  );
};
