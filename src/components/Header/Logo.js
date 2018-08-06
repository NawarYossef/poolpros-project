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
  @media (max-width: 980px) {
    flex: 0 0 40%;
  }
  @media (min-width: 1100px) {
    flex: 0 0 30%;
  }
  @media (min-width: 1440px) {
    flex: 0 0 20%;
  }
`;

const Image = styled.img`
  width: 70%;
  height: 100%;
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 980px) {
    width: 90%;
  }
`;

export const Logo = () => {
  return (
    <WrapperForImg to={"/"}>
      <Image src={PoolProsLogo} className={"app-logo"} alt="" />
    </WrapperForImg>
  );
};
