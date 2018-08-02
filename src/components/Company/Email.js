import 'normalize.css';
import React, { Component } from 'react';
import EmailImg from '../../assets/email-icon.png';
import styled from 'styled-components';
import '../../styles/main.css';

const Wrapper = styled.div`
text-align: center;
padding: 0px 40px;
padding-top: 33px;
`
const Message = styled.p`
margin: 0px;
padding: 0px;
font-style: italic;
font-size: 12px; 
`
const Button = styled.button`
 padding: 16px 15px;
 border: 1px solid #02c7c6;
 border-radius: 3px;
 background-color: transparent;
 color: #083d8c;
 font-weight: bold;
`
export const Email = props => {
  
  return (
    <Wrapper>
    <Button onClick={() => props.handleModalButton(props.companyId)}>
    <img src={EmailImg} className={'email-icon-img'} alt="" />
    Contact this Pro
    </Button>
    </Wrapper>
  );
}