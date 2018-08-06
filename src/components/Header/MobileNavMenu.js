import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
width: 100%;
position: absolute;
background-color: #ffffff;
border-top: solid 5px #0bc9c8;
border-bottom: solid 5px #0bc9c8;
top: 0;
left: 0;
rightL 0;
z-index: 1;
box-shadow:  0 10px 10px rgba(41, 38, 38,0.22);
-webkit-box-shadow:  0 10px 10px rgba(41, 38, 38,0.22);
`;
const NavBar = styled.nav`
  width: 100%;
`;

const List = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ListElement = styled.li`
  text-decoration: none;
  background-color: #f6f6f6;
  display: flex;
  margin-bottom: ${props => (props.lastBtn ? "0px" : "2px")};
  padding: 30px 25px;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: #616161 !important;
  font-size: 1em;
  &:hover &:visited,
  &:active {
    text-decoration: none;
  }
  @media (min-width: 320px) {
    font-size: 1em !important;
  }
  @media (min-width: 425px) {
    font-size: 0.8em !important;
  }
  @media (min-width: 981px) {
    display: none;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;
const Title = styled.h3`
  text-align: center;
  color: #01c7c6;
  clear: both;
`;

export const MobileNavMenu = props => {
  const links = [
    <NavLink to="/community">Pools & Spas</NavLink>,
    <NavLink to="/community">Supplies</NavLink>,
    <NavLink to="/community">Resources</NavLink>,
    <NavLink lastBtn={true} to="/community">
      Services
    </NavLink>
  ];

  return (
    <Wrapper>
      <BtnWrapper>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => props.onClick()}
        />
      </BtnWrapper>
      <Title>Menu</Title>
      <NavBar className={"mobile-nav-menu"}>
        <List>
          {links.map((link, idx) => {
            return (
              <ListElement key={idx.toString()} className="link">
                {link}
                <i class="fas fa-angle-right" />
              </ListElement>
            );
          })}
        </List>
      </NavBar>
    </Wrapper>
  );
};
