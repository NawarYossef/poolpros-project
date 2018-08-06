import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Main from "./containers/Main";
import history from "./history";
import axios from "axios";
import styled, { injectGlobal } from "styled-components";
import "normalize.css";
import "./App.css";

// I faced technical issues while importing application fonts with the styled component "injectGlobal" method.
// Therefore, I used google's 'Open Sans' font instead.
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount = () => {
    // data from the Dealer.json file is hosted on api.json.com
    const url = "https://api.myjson.com/bins/sgv34";
    axios
      .get(url)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Page history={history}>
        <PageWrapper>
          <Layout DealersData={this.state.data}>
            <Route exact path="/" Component={Main} />
          </Layout>
        </PageWrapper>
      </Page>
    );
  }
}
