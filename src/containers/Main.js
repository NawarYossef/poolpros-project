import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterResultsMenu from '../containers/FilterResultsMenu';
import 'normalize.css';
import styled from 'styled-components';
import WaterImage from '../assets/water-image.png'
import '../styles/main.css';

const MainSection = styled.div`
max-width: 100%;
margin: 0 auto;
align-items: center;
position: relative;
`;

export default class Main extends Component {
  render() {
    return (
      <MainSection>
        <img src={WaterImage} className={'main-section-image'} alt="" />
        <FilterResultsMenu />
      </MainSection>
    );
  }
}