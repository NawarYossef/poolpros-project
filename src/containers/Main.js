import React, { Component } from "react";
import { FilteringForm } from "./FilteringForm";
import { SearchResults } from "../components/SearchResults";
import { Modal } from "../components/Modal/Modal";
import DealersData from "../dealers-data";
import "normalize.css";
import styled from "styled-components";
import WaterImage from "../assets/water-image.png";
import "../styles/main.css";

const MainSection = styled.main`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  position: relative;
`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultCount: 0,
      checked: false,
      btnClicked: false,
      companyId: 0,
      formSubmitValid: false,
      checkBoxValues: []
    };
  }

  handleModalButtonAndStoreCompanyId = companyId => {
    this.setState({
      btnClicked: !this.state.btnClicked,
      companyId
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = () => {};
  render() {
    return (
      <MainSection>
        <img src={WaterImage} className={"main-section-image"} alt="" />
        <FilteringForm
          checkBoxValues={this.props.checkBoxValues}
          handleInputChange={this.props.handleInputChange}
        />
        <SearchResults
          Data={DealersData}
          handleModalButtonAndStoreCompanyId={
            this.handleModalButtonAndStoreCompanyId
          }
        />
        {this.state.btnClicked ? (
          <Modal
            handleModalButtonAndStoreCompanyId={
              this.handleModalButtonAndStoreCompanyId
            }
            companyId={this.state.companyId}
          />
        ) : null}
      </MainSection>
    );
  }
}
