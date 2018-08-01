import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FilterButtons } from '../components/FilterButtons';
import 'normalize.css';
import styled from 'styled-components';
import '../styles/main.css';

const FilterResultsWrapper = styled.section`
width: 100%;
background-color: #ffffff;
padding: 0px 0px;
position: absolute;
top: 69%;
`;

const ListWrapper = styled.div`
max-width: 88.5%;
margin: 0 auto;
height: 100%;
background: #f6f6f6;
display: flex;
align-items: center;
border-radius: 5px;
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

export default class FilterResultsSection extends Component {
  render() {
    return (
      <FilterResultsWrapper>
        <ListWrapper>
          <FilterButtons />
        </ListWrapper>
      </FilterResultsWrapper>
    );
  }
}