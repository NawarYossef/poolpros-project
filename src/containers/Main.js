import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FilteringForm } from "./FilteringForm";
import { SearchResults } from "../components/SearchResults";
import { Modal } from "../components/Modal/Modal";
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
      dropDownBtnClicked: false,
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

  handleInputChange = e => {
    // this.RetainCheckBoxState(e);
    e.target.checked
      ? this.setState({
          checkBoxValues: [...this.state.checkBoxValues, e.target.name]
        })
      : this.setState({
          checkBoxValues: this.state.checkBoxValues.filter(
            val => val !== e.target.name
          )
        });
  };

  // RetainCheckBoxState = e => {
  //   if (this.state.checkBoxValues.includes(e.target.name)) {
  //     document.
  //   }
  // };

  handleDropDownMenu = () => {
    this.setState({
      dropDownBtnClicked: !this.state.dropDownBtnClicked
    });
  };

  render() {
    const { DealersData } = this.props;
    let companiesData = [];
    if (this.state.checkBoxValues.length) {
      companiesData = DealersData.dealers.filter(dealer => {
        return (
          dealer.data.certifications.length ===
          dealer.data.certifications
            .concat(this.state.checkBoxValues)
            .filter((val, idx, arr) => arr.indexOf(val) === idx).length
        );
      });
    } else {
      companiesData = DealersData.dealers;
    }

    return (
      <MainSection>
        <img src={WaterImage} className={"main-section-image"} alt="" />
        <FilteringForm
          handleInputChange={this.handleInputChange}
          handleDropDownMenu={this.handleDropDownMenu}
          dropDownBtnClicked={this.state.dropDownBtnClicked}
          resultCount={companiesData ? companiesData.length : 0}
          checkBoxValues={this.state.checkBoxValues}
        />
        <SearchResults
          data={companiesData}
          checkBoxValues={this.state.checkBoxValues}
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
