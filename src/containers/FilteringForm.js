import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormTitle } from '../components/Form/FormTitle';
import { ResultCount } from '../components/Form/ResultCount';
import { FilterButtons } from '../components/Form/FilterButtons';
import Rectangle from '../assets/rectangle-icon.png'
import { TooTip } from '../components/Form/ToolTip';
import 'normalize.css';
import styled from 'styled-components';
import '../styles/main.css';

const FormWrapper = styled.section`
width: 100%;
background-color: transparent;
padding: 0px 0px;
position: relative;
top: 7.5%;
`;

const InnerWrapper = styled.div`
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

const List = styled.div`
flex: auto;
width: 100%;
display: flex;
align-items: center;
padding: 31px 0px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export default class FilterSearchForm extends Component {
  render() {
    return (
      <FormWrapper>
        <InnerWrapper>
          <List className={"filter-list-wrapper"}>
            <Wrapper>
              <ResultCount />
              <img src={Rectangle} alt="" className={'border-img'}/>
              <FormTitle />
              <FilterButtons />
              <TooTip />
            </Wrapper>
          </List>
        </InnerWrapper>
      </FormWrapper>
    );
  }
}