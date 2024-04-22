import React from "react";
import Header from "../Header";
import Content from "../Content";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import "./index.scss";
import Dashboard from "../../pages/Dashboard";
import ProjectsPage, { ProjectDetail } from "../../pages/Projects/ProjectsPage";
import CreateProject from "../../pages/Projects/CreateProjectPage";
import ScoreCards from "../../pages/Projects/ScoreCards";
import CreateRulesPage from "../../pages/Projects/DQRules/CreateRulesPage";
import LoginPage from "../../pages/LoginPage";
import File from "../../pages/File";
import ProjectDetailsPage from "../../pages/Projects/ProjectDetailPage";
import LoanIdPage from "../../pages/Projects/DataProfile/LoanIdPage";

const Layout = () => {
  const id = localStorage.getItem("createRulesManually");

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
            <Route path="/file-explorer" element={<File />} />
            <Route
              path="/projects/create-project/create-new-rule/"
              element={<CreateRulesPage />}
            />
            <Route
              path="/projects/create-project/"
              element={<CreateProject />}
            />
            <Route
              path="/projects/create-project/loan-id/"
              element={<LoanIdPage />}
            />
            <Route
              path="/projects/project-details"
              element={<ProjectDetailsPage />}
            />
            <Route path="/score-cards" element={<ScoreCards />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Content>
      </div>
    </div>
  );
};

export default Layout;
