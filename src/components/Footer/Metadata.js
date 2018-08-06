import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/main.css";

const Container = styled.div`
  width: 100%;
  background-color: #216ddf;
`;

const InnerWrapper = styled.div`
  width: 34%;
  margin: 0 auto;
  padding: 14px 0px;
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 980px) {
    width: 50%;
  }
`;

const NavMenu = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0px !important;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style-type: none !important;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const Metadata = () => {
  const copyRights = (
    <Text className="copyright">
      <i class="far fa-copyright" />
      <span>2017</span> Pool Pros
    </Text>
  );
  return (
    <Container>
      <InnerWrapper>
        <NavMenu>
          {copyRights}
          <Element key={"privacy"} className="link">
            <LinkText to={"/policy"}>Privacy Policy</LinkText>
          </Element>
          <Element key={"terms"} className="link">
            <LinkText to={"/policy"}>Terms and Conditions</LinkText>
          </Element>
        </NavMenu>
      </InnerWrapper>
    </Container>
  );
};
