import React from "react";
import Header from "../Header";
import Content from "../Content";
import { Navigate, Route, Routes } from "react-router-dom";
import Projects from "../../pages/Projects";
import SideNav from "../SideNav";
import "./index.scss";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="nav-content-div">
        <SideNav />
        <div
          style={{
            width: 2,
            backgroundColor: "#e5e5e56e",
          }}
        ></div>
        <Content>
          <Routes>
            <Route path="/" element={<Navigate replace to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Projects />} />
          </Routes>
        </Content>
      </div>
    </div>
  );
};

export default Layout;
