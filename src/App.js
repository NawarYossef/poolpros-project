import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import history from "./history";
import styled from "styled-components";
import "normalize.css";
import "./App.css";

const PageWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Page = styled(Router)`
  height: 100%;
  width: 100%;
  background-color: #051929;
`;

class App extends Component {
  render() {
    return (
      <Page history={history}>
        <PageWrapper>
          <Layout>
            <Route exact path="/" />
          </Layout>
        </PageWrapper>
      </Page>
    );
  }
}

export default App;
