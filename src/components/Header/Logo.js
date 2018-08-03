import React from "react";
import { Link } from "react-router-dom";
import PoolProsLogo from "../../assets/pool-pros-logo.png";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const WrapperForAppTitle = styled(Link)`
  flex: auto;
  display: flex;
  align-items: center;
  text-align: initial;
  &:hover {
    text-decoration: none;
  }
`;

export const Logo = () => {
  return (
    <WrapperForAppTitle to={"/"}>
      <img src={PoolProsLogo} className={"app-logo"} alt="" />
    </WrapperForAppTitle>
  );
};
