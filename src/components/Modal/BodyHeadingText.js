import React, { Component } from 'react';
import 'normalize.css';
import styled from 'styled-components';
import '../../styles/main.css';

const Text = styled.div`
display: bock;
padding: 30px 0px;
padding-left: 32px;
text-align: left;
margin: 0px;
color: #616161;
`
export const BodyHeadingText = props => {
  return (
    <Text>Fill out the form below and Premium Pools & Spas of Charlotte will get in touch</Text>
  );
}