import React, { Component } from "react";
import { Link } from "react-router-dom";
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
`;

const HeaderWrapper = styled.div`
  max-width: 88.5%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;
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

export const TopHeader = () => {
  return (
    <AppHeader>
      <HeaderWrapper>
        <TopNavbar />
      </HeaderWrapper>
    </AppHeader>
  );
};
