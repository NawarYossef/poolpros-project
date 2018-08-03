import React, { Component } from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const BtnsWrapper = styled.div`
  display: block;
  text-align: left;
  padding-left: 13px;
  margin-top: 4px;
`;
const Button = styled.button`
  width: 63px;
  height: 30px;
  margin-right: 7px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #000;
  background: transparent;
`;
export const PoolQuestion = props => {
  return (
    <BtnsWrapper>
      <Button>Yes</Button>
      <Button>No</Button>
    </BtnsWrapper>
  );
};
