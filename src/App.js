import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import MainHeader from "./containers/MainHeader"
import TopHeader from "./containers/TopHeader"
import Main from "./containers/Main"
import { Footer } from "./components/Footer"
import history from './history';
import styled from 'styled-components';
import 'normalize.css';
import './App.css';

const PageWrapper = styled.div`
text-align: center;
margin: 0 auto;
box-sizing: border-box;
height: 100%;
width: 100%;
overflow:auto;
`;

const Page = styled(Router)`
height: 100%;
width: 100%;
background-color: #051929;
`

class App extends Component {
  render() {
    return (
      <Page history={history}>
        <PageWrapper>
          <TopHeader />
          <MainHeader />
          <Main />
          <Route exact path="/" />
          
          <Route exact path="/dealers-distributors" />
          <Route exact path="/service" />

          <Route exact path="/pools-specs" />
          <Route exact path="/supplies" />
          <Route exact path="/resources" />
          <Route exact path="/services" />
          <Route exact path="/find-pool-pro" />
          <Footer />
        </PageWrapper>
      </Page>
    );
  }
}

export default App;
