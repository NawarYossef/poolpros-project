import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FindPoolButton } from "./FindPoolButton";
import { HamburgerBtn } from "./HamburgerBtn";
import { MobileNavMenu } from "./MobileNavMenu";
import "../../styles/main.css";

const NavBar = styled.nav`
  flex: 0 0 80%;
  @media (max-width: 980px) {
    flex: 0 0 60%;
    display: flex;
    justify-content: flex-start;
    padding-left: 0px;
  }
  @media (min-width: 1100px) {
    flex: 0 0 70%;
  }
  @media (min-width: 1440px) {
    flex: 0 0 80%;
  }
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0px;
  @media (min-width: 320px) {
    padding-left: 0px;
  }
`;

const ListElement = styled.li`
  display: inline-block;
  text-decoration: none;
  @media (max-width: 980px) {
    display: flex;
    padding: 10px 0px;
    align-items: center;
    justify-content: flex-start;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1em;
  font-weight: 600;
  display: block;
  margin-right: ${props => (props.lastbtn ? "0px" : "60px")};
  &:hover {
    color: #d9d9d9;
    text-decoration: none;
  }
  &:visited,
  &:active {
    color: #d9d9d9;
    text-decoration: none;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

export const MainNavbar = props => {
  const links = [
    <NavLink to="/community">Pools & Spas</NavLink>,
    <NavLink to="/community">Supplies</NavLink>,
    <NavLink to="/community">Resources</NavLink>,
    <NavLink to="/community">Services</NavLink>
  ];

  return (
    <NavBar className={"main-nav-menu"}>
      <List>
        {links.map((link, idx) => {
          return (
            <ListElement key={idx.toString()} className="link">
              {link}
            </ListElement>
          );
        })}
        <ListElement key={"location-btn"} className="link">
          <FindPoolButton />
        </ListElement>
        <HamburgerBtn menuBtnHandle={props.menuBtnHandle} />
      </List>
      {props.btnClicked ? (
        <MobileNavMenu onClick={props.menuBtnHandle} />
      ) : null}
    </NavBar>
  );
};
