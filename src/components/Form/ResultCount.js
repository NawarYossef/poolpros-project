import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const Count = styled.h4`
  margin: 0px;
  padding: 0px;
  padding-right: 29px;
  color: #216ddf;
  display: inline-block;
  @media (max-width: 980px) {
    padding: 0px;
    flex: 0 0 50%;
    height: 100%;
  }
`;

export const ResultCount = props => {
  return <Count>{props.count} dealers in 28226</Count>;
};
