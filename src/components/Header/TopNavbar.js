import React from "react";
import { Link } from "react-router-dom";
import "normalize.css";
import styled from "styled-components";
// import '../styles/main.css';

const NavBar = styled.nav`
  flex: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const List = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin-bottom: 0px;
  @media (min-width: 320px) {
    padding-left: 0px;
  }
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.3em !important;
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
  @media (min-width: 320px) {
    font-size: 1em !important;
  }
  @media (min-width: 425px) {
    font-size: 1em !important;
  }
`;

export const TopNavbar = () => {
  const links = [
    <NavLink to="/community">Dealers and Distributors</NavLink>,
    <NavLink className={"second-link-top-menu"} to="/community">
      Commercial
    </NavLink>
  ];

  return (
    <NavBar className={"top-nav-menu"}>
      <List>
        {links.map((link, idx) => {
          return (
            <ListElement key={idx.toString()} className="link">
              {link}
            </ListElement>
          );
        })}
      </List>
    </NavBar>
  );
};
