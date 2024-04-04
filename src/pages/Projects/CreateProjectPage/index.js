import React from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumbs from "../../../components/BreadCrumbs/index";
import ProgressStepper from "../../../components/ProgressStepper";
import "./index.scss";
import StepperContent from "../../../components/StepperContent";
import AddProjectDetailsForm from "../ProjectsForms/AddProjectDetailsForm";
import ProjectDetailsPage from "../ProjectsForms";

const Data = [
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Create New Project",
    path: "/projects/create-project",
  },
];

const CreateProject = () => {
  return (
    <div>
      <Breadcrumbs data={Data} />
      <PageTitle name={"New Project"} isImg />
      <div className="stepper-content-div">
        <ProgressStepper />
        <StepperContent>
          <ProjectDetailsPage />
        </StepperContent>
      </div>
    </div>
  );
};

export default CreateProject;
