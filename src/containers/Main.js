import React, { Component } from 'react';
import FilteringForm from './FilteringForm';
import { SearchResults } from '../components/SearchResults';
import { Modal } from '../components/Modal/Modal';
import DealersData from '../dealers-data'
import 'normalize.css';
import styled from 'styled-components';
import WaterImage from '../assets/water-image.png'
import '../styles/main.css';

const MainSection = styled.main`
width: 100%;
margin: 0 auto;
align-items: center;
position: relative;
`;

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultCount: 0,
      checked: false,
      btnClicked: false,
      companyId: 0
    }
  }

  handleModalButton = id => {
    this.setState({
      btnClicked: !this.state.btnClicked,
      companyId: id
    });
  };

  render() {
    return (
      <MainSection>
        <img src={WaterImage} className={'main-section-image'} alt="" />
        <FilteringForm />
        <SearchResults Data={DealersData} handleModalButton={this.handleModalButton}/>
        {this.state.btnClicked ? <Modal handleModalButton={this.handleModalButton} companyId={this.state.companyId}/> : null}
      </MainSection>
    );
  }
}