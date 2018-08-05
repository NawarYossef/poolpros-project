import React, { Component } from "react";
import { MainHeader } from "./components/Header/MainHeader";
import { TopHeader } from "./components/Header/TopHeader";
import Main from "./containers/Main";
import { Footer } from "./components/Footer/Footer";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerBtnClicked: false
    }
  }
  hamburgerBtnHandle = () => {
    this.setState({hamburgerBtnClicked: !this.state.hamburgerBtnClicked})
  }

  render() {
    const { children, DealersData } = this.props;
    return (
      <React.Fragment>
        <TopHeader />
        <MainHeader hamburgerBtnHandle={this.hamburgerBtnHandle}/>
        <Main DealersData={DealersData} />
        {children}
        <Footer />
      </React.Fragment>
    );
  }
}
