import 'normalize.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
background-color: #081C24;
border-top: 1px solid #D2691E;
`

const NavMenu = styled.ul`
width: 60%;
margin: 0 auto;
padding: 0px !important;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
justify-content: space-around;
list-style-type: none !important;
@media (min-width: 320px) {
  flex-direction: column;
}
@media (min-width: 768px) {
  flex-direction: row;
}
`
const Anchor = styled(Link)`
color: #ffffff;
font-size: 1.3em;
  &:hover {
    text-decoration: none;
    color: #d9d9d9;
  }
`
const List = styled.li`
@media (min-width: 320px) {
  margin: 0 auto;
  padding: 10px 0px;
}
@media (min-width: 768px) {
  margin: initial;
}
`
export const Footer = () => {
  return (
    <Wrapper>
      <NavMenu>
        <List><Anchor to="/movies/coming-soon">Coming Soon</Anchor></List>
        <List><Anchor to="/movies/now-playing">Now Playing</Anchor></List>
        <List><Anchor to="/movies/popular">Popular</Anchor></List>
      </NavMenu>
    </Wrapper>
  );
}