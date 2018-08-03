import React from "react";
import "normalize.css";
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
`;

const HeaderWrapper = styled.div`
  max-width: 88.5%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 375px) {
    flex-direction: column;
  }
  @media (min-width: 425px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainHeader = () => {
  return (
    <AppHeader>
      <HeaderWrapper>
        <Logo />
        <MainNavbar />
      </HeaderWrapper>
    </AppHeader>
  );
};
