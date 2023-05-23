import React from "react";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <MainNavbar />

      {props.children}
    </>
  );
};

export default Layout;
