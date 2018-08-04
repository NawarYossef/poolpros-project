import React from "react";
import { Link } from "react-router-dom";
import Action from "../../assets/action-commercial-icon.png";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const NavBar = styled.nav`
  flex: auto;
  width: 100%;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  margin-bottom: 0px;
  @media (max-width: 450px) {
    justify-content: center;
    padding: 0px;
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
    <ListElement key={"list-element-1"} className="link">
      <NavLink to="/community">Dealers and Distributors</NavLink>
    </ListElement>,
    <ListElement key={"list-element-2"} className="link second-link">
      <NavLink className={"second-link-top-menu"} to="/community">
        Commercial
      </NavLink>
      <img src={Action} className={"action-icon"} alt="" />
    </ListElement>
  ];
  return (
    <NavBar className={"top-nav-menu"}>
      <List>{[...links]}</List>
    </NavBar>
  );
};
