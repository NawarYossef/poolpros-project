import React from "react";
import { MainHeader } from "./components/Header/MainHeader";
import { TopHeader } from "./components/Header/TopHeader";
import Main from "./containers/Main";
import { Footer } from "./components/Footer/Footer";

export const Layout = ({ children, DealersData }) => {
  return (
    <React.Fragment>
      <TopHeader />
      <MainHeader />
      <Main DealersData={DealersData} />
      {children}
      <Footer />
    </React.Fragment>
  );
};
