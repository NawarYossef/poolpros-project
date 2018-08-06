import "normalize.css";
import React from "react";
import styled from "styled-components";

const CompanyName = styled.h3`
  padding: 25px 0px;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid #ececec;
  color: #3f3f3f;
  @media (max-width: 700px) {
    border: none;
    padding: 30px 0px;
  }
  @media (max-width: 1100px) {
    font-size: 1em;
  }
`;
export const Title = props => {
  return <CompanyName>{props.name}</CompanyName>;
};
