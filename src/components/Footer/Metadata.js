import "normalize.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

import styled from "styled-components";
import "../../styles/main.css";

const Container = styled.div`
  width: 100%;
  background-color: #216ddf;
`;

const InnerWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 14px 0px;
`;

const NavMenu = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0px !important;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  list-style-type: none !important;
`;
const Text = styled.p`
  color: #ffffff;
  display: inline-block;
  margin: 0px;
`;
const LinkText = styled(Link)`
  color: #ffffff;
`;
const Element = styled.li`
  list-style: none;
`;
export const Metadata = () => {
  const links = [
    <LinkText to={"/policy"}>Privacy Policy</LinkText>,
    <LinkText to={"/terms-and-conditions"}>Terms and Conditions</LinkText>
  ];
  const copyRights = (
    <Text className="copyright">
      <FontAwesome name="copyright" />
      <span>2017</span> Pool Pros
    </Text>
  );
  return (
    <Container>
      <InnerWrapper>
        <NavMenu>
          {copyRights}
          {links.map((link, idx) => {
            return (
              <Element key={idx.toString()} className="link">
                {link}
              </Element>
            );
          })}
        </NavMenu>
      </InnerWrapper>
    </Container>
  );
};
