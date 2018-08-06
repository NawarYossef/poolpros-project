import React from "react";
import PoolProsLogoFooter from "../../assets/pool-pros-logo-footer.png";
import "normalize.css";
import styled from "styled-components";

const Image = styled.img`
padding: 30px 0px;
width: 190px;
display: block;
margin: 0 auto;
`
export const LogoFooter = () => {
  return <Image src={PoolProsLogoFooter} className={"footer-logo"} alt="" />;
};
