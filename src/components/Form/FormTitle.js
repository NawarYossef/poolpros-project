import 'normalize.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/main.css';

const Title = styled.h4`
  margin: 0px;
  padding: 0px;
`
export const FormTitle = () => {
  return (
    <Title>Filter Results</Title>
  );
}