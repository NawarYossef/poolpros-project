import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import { FindPoolButton } from './FindPoolButton';
import '../../styles/main.css';

const NavBar = styled.nav`
  flex: auto;
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  display: block;
  margin-right: ${props => props.lastbtn ? '0px' : '60px'};
  &:hover {
    color: #d9d9d9;
    text-decoration: none;
  }
  &:visited, &:active {
    color: #d9d9d9;
    text-decoration: none;
  }
  @media (min-width: 320px) {
    font-size: 1em !important;
  }
  @media (min-width: 425px) {
    font-size: 0.8em !important;
  }
`;

export const MainNavbar = () => {
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
        <FindPoolButton />
      </List>
    </NavBar>
  );
}



