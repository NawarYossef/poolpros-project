import React from "react";
import { Link } from "react-router-dom";
import PoolProsLogo from "../../assets/pool-pros-logo.png";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const WrapperForImg = styled(Link)`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  text-align: initial;
  &:hover {
    text-decoration: none;
  }
  @media (min-width: 1025px) {
    flex: 0 0 30%;
  }
`;

export const Logo = () => {
  return (
    <WrapperForImg to={"/"}>
      <img src={PoolProsLogo} className={"app-logo"} alt="" />
    </WrapperForImg>
  );
};
