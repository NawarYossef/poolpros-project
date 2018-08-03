import "normalize.css";
import React from "react";
import { LogoFooter } from "./LogoFooter";
import styled from "styled-components";
import "../../styles/main.css";
import { SocialMedia } from "./SocialMedia";
import { Metadata } from "./Metadata";

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #083d8c;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <LogoFooter />
      <SocialMedia />
      <Metadata />
    </Wrapper>
  );
};
