import "normalize.css";
import React from "react";
import MobileIcon from "../../assets/phone-icon-mobile.png";
import PhoneIcon from "../../assets/phone-icon-desktop.png";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 0px;
  padding-top: 30px;
  @media (max-width: 700px) {
    padding: 0px;
  }
`;

const PhoneImg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileImg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 15px;
  cursor: pointer;
  @media (min-width: 701px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
  border-radius: 2px;
  height: 50px;
  align-items: center;
  margin: 0 auto;
  background-color: #216ddf;
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 450px) {
    justify-content: center;
    width: 40%;
  }
`
const PhoneNumber = styled.h4`
margin: 0px;
@media (max-width: 700px) {
  display: none;
}
`
const MobileNumber = styled.h4`
@media (min-width: 701px) {
  display: none;
}
`
export const Phone = props => {
  return (
    <Wrapper>
      <PhoneImg src={PhoneIcon} alt="" />
      <PhoneNumber>{props.number}</PhoneNumber>

      <MobileWrapper>
        <MobileImg src={MobileIcon} alt="" />
        <MobileNumber>{props.number}</MobileNumber>
      </MobileWrapper>
    </Wrapper>
  );
};
