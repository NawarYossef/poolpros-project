import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import { MainNavbar } from '../components/MainNavbar';
import { Logo } from '../components/Logo';
// import '../styles/main.css';

const AppHeader = styled.header`
width: 100%;
z-index: 1;
position: fixed;
top: 0;
background-color: #081C24;
padding: 15px 0px;
border-bottom: 1px solid #D2691E;
@media (min-width: 320px) {
  padding: 25px 0px;
}
@media (min-width: 768px) {
  padding: 15px 0px;
}
`;

const HeaderWrapper = styled.div`
max-width: 90%;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
@media (min-width: 320px) {
  flex-direction: column;
}
@media (min-width: 375px) {
  flex-direction: column;
}
@media (min-width: 425px) {
  flex-direction: column;
}
@media (min-width: 768px) {
  flex-direction: row;
}

`;

export default class MainHeader extends Component {
  render() {
    return (
      <AppHeader>
        <HeaderWrapper>
          <Logo />
          <MainNavbar />
        </HeaderWrapper>
      </AppHeader>
    );
  }
}