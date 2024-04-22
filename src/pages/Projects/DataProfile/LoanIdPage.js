import React from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumbs from "../../../components/BreadCrumbs";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";
import { useNavigate } from "react-router-dom";

const breadcrumbsData = [
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Create New Project",
    path: "/projects/create-project",
  },
  {
    text: "Column Drill Down",
    path: "/projects/create-project/loan-id",
  },
];

const LoanIdPage = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/projects/create-project");
  };

  return (
    <>
      <Breadcrumbs data={breadcrumbsData} />
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={ArrowLeft}
          height="16"
          width="19"
          alt=""
          onClick={handleBackButton}
          className="img"
        />
        <PageTitle name={"LoanId"} />
      </div>
    </>
  );
};

export default LoanIdPage;
