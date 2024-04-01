import React from "react";
import Header from "../Header";
import Content from "../Content";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="nav-content-div">
        <Content />
      </div>
    </div>
  );
};

export default Layout;
