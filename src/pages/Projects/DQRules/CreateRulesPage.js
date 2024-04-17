import React, { useEffect } from "react";
import Input from "../../../components/Input";
import InputSelector from "../../../components/InputSelector";
import PageTitle from "../../../components/PageTitle";
import UploadFiles from "../../../components/UploadFiles";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/BreadCrumbs";

const Options = [
  {
    label: "x",
    value: "x",
  },
  {
    label: "y",
    value: "y",
  },
];

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
    text: "Create New Rule",
    path: "/projects/create-project/create-new-rule",
  },
];

const CreateRulesPage = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    // localStorage.removeItem("createRulesManually");
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
        <PageTitle name={"New Project"} />
      </div>
      <div className="input-label">
        <InputSelector label="Rule Type" options={Options} />
      </div>
      <div>
        <UploadFiles />
      </div>
      <div className={"input-label"}>
        <Input
          label={"Rule Name"}
          placeholder="Enter"
          //   onChange={handleChange}
          className={"label"}
        />
      </div>
      <div className="input-label">
        <Input
          placeholder="Enter"
          type={"textarea"}
          label="Rule Description"
          className={"textarea-class"}
          //   onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CreateRulesPage;
