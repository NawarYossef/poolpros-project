import React from "react";
import MenuIcon from "../../assets/menu-icon-mobile.png";
import styled from "styled-components";
import "../../styles/main.css";

const HamburgerButton = styled.img`
  flex: 0 0 10%;
  width: 55px;
  position: absolute;
  top: 7px;
  z-index: 1;
  right: 1%;
  @media (min-width: 981px) {
    display: none;
  }
`;
export const HamburgerBtn = props => {
  return (
    <HamburgerButton
      src={MenuIcon}
      className={"hamburger-btn"}
      alt=""
      onClick={() => props.hamburgerBtnHandle()}
    />
  );
};
