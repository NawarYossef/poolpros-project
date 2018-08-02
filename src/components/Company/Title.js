import 'normalize.css';
import React, { Component } from 'react';
import styled from 'styled-components';

const CompanyName = styled.h3`
padding: 40px 0px;
width: 90%;
margin: 0 auto;
border-bottom: 1px solid #ececec;
color: #3f3f3f;
`
export const Title = props => {
  return (
    <CompanyName>
      {props.name}
    </CompanyName>
  );
}