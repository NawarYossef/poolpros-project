import React from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  font-weight: bold;
  color: #3f3f3f;
  align-items: center;
  padding: 42px 0px;
  background: transparent;
  text-align: center;
  border: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileBtnWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 0px;
  @media (min-width: 769px) {
    display: none;
  }
`;
const ButtonMobile = styled.button`
  color: #0bc9c8;
  font-weight: bold;
  background: transparent;
  text-align: center;
  border: none;
`;

const PhoneBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SendEmailButton = props => {
  return (
    <React.Fragment>
      <PhoneBtnWrapper>
        <Button>
          Send my email
          <i className="fas fa-angle-right" />
        </Button>
      </PhoneBtnWrapper>
      <MobileBtnWrapper>
        <ButtonMobile>Send</ButtonMobile>
      </MobileBtnWrapper>
    </React.Fragment>
  );
};
