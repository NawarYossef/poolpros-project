import React, { Component } from "react";
import { MainHeader } from "./components/Header/MainHeader";
import { TopHeader } from "./components/Header/TopHeader";
import Main from "./containers/Main";
import { Footer } from "./components/Footer/Footer";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBtnClicked: false
    }
  }
  menuBtnHandle = () => {
    this.setState({menuBtnClicked: !this.state.menuBtnClicked})
  }

  render() {
    const { children, DealersData } = this.props;
    return (
      <React.Fragment>
        <TopHeader />
        <MainHeader menuBtnHandle={this.menuBtnHandle} btnClicked={this.state.menuBtnClicked}/>
        <Main DealersData={DealersData} />
        {children}
        <Footer />
      </React.Fragment>
    );
  }
}
