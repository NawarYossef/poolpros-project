import React, { Component } from 'react';
import DealersData from '../../dealers-data';
import { ModalHeader } from "./ModalHeader";
import { ModalForm } from "./ModalForm";
import { BodyHeadingText } from "./BodyHeadingText";
import { SendEmailButton } from "./SendEmailButton";
import { ModalFooter } from "./ModalFooter";
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const Container = styled.div`
width: 100%;
margin: 0 auto;
align-items: center;
position: relative;
`;
const ModalWrapper = styled.div`
opacity: 0.9; 
background: #000; 
width: 100%;
height: 100%;
z-index: 1;
top: 0; 
left: 0; 
position:fixed; 
`;
const ModalBody = styled.div`
background-color: #ffffff;
width: 50%;
margin: 0 auto;
height: 50%;
margin-top: 120px;
`
export const Modal = props => {
  const company = DealersData.dealers.filter(company => company.data.companyID === props.companyId)[0]
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader name={company.data.name} onClick={props.handleModalButton} />
        <BodyHeadingText />
        <ModalForm />
        <SendEmailButton />
        <ModalFooter />
      </ModalBody>
    </ModalWrapper>
  );
}