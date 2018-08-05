import React from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 42px 0px;
  background: transparent;
  text-align: center;
  border: none;
`;
export const SendEmailButton = props => {
  return (
    <Button>
      Send my email
      <i className="fas fa-angle-right" />
    </Button>
  );
};
