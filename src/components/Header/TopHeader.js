import React from "react";
import "normalize.css";
import styled from "styled-components";
import { TopNavbar } from "./TopNavbar";
import "../../styles/main.css";

const AppHeader = styled.nav`
  width: 100%;
  z-index: 1;
  position: initial;
  top: 0;
  background-color: #083d8c;
  padding: 15px 0px;
  @media (max-width: 980px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const TopHeader = () => {
  return (
    <AppHeader>
      <HeaderWrapper>
        <TopNavbar />
      </HeaderWrapper>
    </AppHeader>
  );
};
