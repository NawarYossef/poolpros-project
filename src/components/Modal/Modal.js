import React, { Component } from 'react';
import DealersData from '../../dealers-data';
import { ModalHeader } from "./ModalHeader";
import ModalForm from "./ModalForm";
import { BodyHeadingText } from "./BodyHeadingText";
import { ModalFooter } from "./ModalFooter";
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const ModalWrapper = styled.article`
opacity: 0.9; 
background: #000; 
width: 100%;
height: 100%;
z-index: 1;
top: 0; 
left: 0; 
bottom: 0;
position:absolute; 
`;
const ModalBody = styled.div`
background-color: #ffffff;
width: 50%;
margin: 0 auto;
margin-top: 120px;
`
export const Modal = props => {
  const company = DealersData.dealers.filter(company => company.data.companyID === props.companyId)[0]
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader name={company.data.name} onClick={props.handleModalButtonAndStoreCompanyId} />
        <BodyHeadingText />
        <ModalForm handleSubmit={props.handleSubmit} />
        <ModalFooter />
      </ModalBody>
    </ModalWrapper>
  );
}