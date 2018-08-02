import React, { Component } from 'react';
import DealersData from '../../dealers-data'
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const Wrapper = styled.div`
padding-right: 20px;
padding-left: 32px;
padding-top: 20px;
padding-bottom: 47px;
background-color: #083d8c;
`
const Text = styled.h6`
float: left;
margin: 0px;
clear: both;
color: #ffffff;
`
const Name = styled.h2`
display: bock;
clear: both;
text-align: left;
margin: 0px;
color: #ffffff;
`
const CloseButton = styled.button`
background-color: transparent;
padding: 0px;
border: none;
float: right;
font-weight: bold;
color: #ffffff;
position: relative;
`
export const ModalHeader = props => {
  return (
    <Wrapper>
      <CloseButton onClick={props.onClick}>x</CloseButton>
      <Text>Email:</Text>
      <Name>{props.name}</Name>
    </Wrapper>
  );
}