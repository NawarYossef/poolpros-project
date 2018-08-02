import React, { Component } from 'react';
import { CompanySection } from './Company/CompanySection';
import 'normalize.css';
import styled from 'styled-components';
import '../styles/main.css';

const Results = styled.section`
max-width: 100%;
margin: 0 auto;
margin-top: 50px;
`;
const Wrapper = styled.div`
max-width: 88.5%;
position: relative;
margin: 0 auto;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;

export const SearchResults = props => {
  return (
    <Results>
     <Wrapper>
     {props.Data.dealers.map(dealer => 
      <CompanySection 
      company={dealer.data}
      handleModalButtonAndStoreCompanyId={props.handleModalButtonAndStoreCompanyId} />
    )}
     </Wrapper> 
    </Results>
  );
}