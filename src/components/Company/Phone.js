import "normalize.css";
import React from "react";
import PhoneIcon from "../../assets/phone-icon-desktop.png";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 84px;
  padding-top: 33px;
`;
const Number = styled.h4`
  margin: 0px;
`;
export const Phone = props => {
  return (
    <Wrapper>
      <img src={PhoneIcon} className={"phone-icon-desktop"} alt="" />
      <Number>{props.number}</Number>
    </Wrapper>
  );
};
