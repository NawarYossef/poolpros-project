import "normalize.css";
import React from "react";
import EmailImg from "../../assets/email-icon.png";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  text-align: center;
  padding: 0px 40px;
  padding-top: 25px;
  @media (max-width: 700px) {
    padding-top: 16px;
  }
`;

const Button = styled.button`
  padding: 16px 15px;
  border: 1px solid #02c7c6;
  border-radius: 3px;
  background-color: transparent;
  color: #083d8c;
  font-weight: bold;
`;
export const Email = props => {
  return (
    <Wrapper>
      <Button
        onClick={() =>
          props.handleModalButtonAndStoreCompanyId(props.companyId)
        }
      >
        <img src={EmailImg} className={"email-icon-img"} alt="" />
        Contact this Pro
      </Button>
    </Wrapper>
  );
};
