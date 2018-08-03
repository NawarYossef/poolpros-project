import "normalize.css";
import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const Count = styled.h4`
  margin: 0px;
  padding: 0px;
  padding-right: 29px;
  color: #216ddf;
  display: inline-block;
`;

export const ResultCount = () => {
  return <Count>7 dealers in 28226</Count>;
};
