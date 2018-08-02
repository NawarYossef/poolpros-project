import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const Wrapper = styled.div`
max-width:  95%;
background-color: #f6f6f6;
`
export const ModalForm = props => {
  return (
      <Wrapper>
      <p>Fill out the form below and Premium Pools & Spas of Charlotte will get in touch</p>
    </Wrapper>
  );
}