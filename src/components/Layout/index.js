import React from "react";
import Header from "../Header";
import Content from "../Content";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import "./index.scss";
import Dashboard from "../../pages/Dashboard";
import ProjectsPage from "../../pages/Projects/ProjectsPage";
import CreateProject from "../../pages/Projects/CreateProjectPage";
import ScoreCards from "../../pages/Projects/ScoreCards";
import CreateRulesPage from "../../pages/Projects/DQRules/CreateRulesPage";
import DataprofileForm from "../../pages/Projects/ProjectsForms/DataProfileForm";
import LoanForm from "../../pages/Projects/ProjectsForms/LoanForm";
import LoanForm2 from "../DataTable/loanform";
import ExceptionForm2 from "../DataTable/exceptionform";



const Layout = () => {
  const id = localStorage.getItem("createRulesManually");

  let path = "/projects/create-project/";
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
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/create-project/create-new-rule/"
              element={<CreateRulesPage />}
            />
            <Route
              path="/projects/create-project/"
              element={<CreateProject />}
            />
            <Route path="/score-cards" element={<ScoreCards />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dataprofile" element={<DataprofileForm />} />
            <Route path="/loanform" element={<LoanForm2 />} />
            <Route path="/exceptionform" element={<ExceptionForm2 />} />
            

          </Routes>
        </Content>
      </div>
    </div>
  );
};

export default Layout;
