import React from "react";
import styled from "styled-components";
import { MainNavbar } from "./MainNavbar";
import { Logo } from "./Logo";
import "../../styles/main.css";

const AppHeader = styled.nav`
  width: 100%;
  background-color: #ffffff;
  padding: 30px 0px;
  box-shadow: 0 0 10px -2px rgba(41, 38, 38, 0.7);
  -webkit-box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.7);
  @media (max-width: 980px) {
    padding: 0px;
    height: 55px;
  }
`;

const HeaderWrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainHeader = props => {
  return (
    <AppHeader>
      <HeaderWrapper>
        <Logo />
        <MainNavbar
          menuBtnHandle={props.menuBtnHandle}
          btnClicked={props.btnClicked}
        />
      </HeaderWrapper>
    </AppHeader>
  );
};
