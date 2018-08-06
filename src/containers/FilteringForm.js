import React from "react";
import { FormTitle } from "../components/Form/FormTitle";
import { ResultCount } from "../components/Form/ResultCount";
import { FilterButtons } from "../components/Form/FilterButtons";
import { DropDownButtons } from "../components/Form/DropDownButtons";
import Rectangle from "../assets/rectangle-icon.png";
import { TooTip } from "../components/Form/ToolTip";
import "normalize.css";
import styled from "styled-components";
import "../styles/main.css";

const Section = styled.section`
  width: 100%;
  background-color: transparent;
  padding: 0px 0px;
  position: relative;
  top: 7.5%;
  @media (max-width: 980px) {
    background: #f6f6f6;
  }
`;

const Wrapper = styled.div`
  max-width: 88.5%;
  margin: 0 auto;
  height: 100%;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  border-radius: 5px;
  @media (max-width: 1200px) {
    max-width: 95%;
  }
  @media (min-width: 1025px) {
    max-width: 95%;
  }
`;

const List = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 31px 0px;
  @media (max-width: 1024px) {
    padding: 31px 10px;
    width: 100%;
  }
  @media (max-width: 980px) {
    padding: 0px;
  }
  @media (min-width: 1025px) {
    padding: 31px 10px;
  }
  @media (min-width: 1440px) {
    padding: 31px;
  }
`;

const InnerWrapper = styled.div`
  width: 87.5%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
    padding: 17px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    padding: 17px 0px;
    width: 100%;
  }
  @media (min-width: 981px) {
    width: 100%;
  }
  @media (min-width: 1100px) {
    width: 100%;
  }
  @media (min-width: 1300px) {
    width: 87.5%;
  }
`;

const FirstContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 980px) {
    width: 86%;
  }
`;

const SecondContainer = styled.div`
  flex: 0 0 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 980px) {
    width: 86%;
  }
`;
export const FilteringForm = props => {
  return (
    <Section>
      <Wrapper>
        <List className={"filter-list-wrapper"}>
          <InnerWrapper>
            <FirstContainer>
              <ResultCount count={props.resultCount} />
              <img src={Rectangle} alt="" className={"border-img"} />
              <FormTitle handleDropDownMenu={props.handleDropDownMenu} />
            </FirstContainer>
            <SecondContainer>
              {
                <FilterButtons
                  handleInputChange={props.handleInputChange}
                  checkBoxValues={props.checkBoxValues}
                />
              }
              {props.dropDownBtnClicked && (
                <DropDownButtons
                  handleInputChange={props.handleInputChange}
                  checkBoxValues={props.checkBoxValues}
                />
              )}
              <TooTip />
            </SecondContainer>
          </InnerWrapper>
        </List>
      </Wrapper>
    </Section>
  );
};
