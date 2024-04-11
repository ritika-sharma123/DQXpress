import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumbs from "../../../components/BreadCrumbs/index";
import ProgressStepper from "../../../components/ProgressStepper";
import "./index.scss";
import StepperContent from "../../../components/StepperContent";
import AddProjectDetailsForm from "../ProjectsForms/AddProjectDetailsForm";
import ProjectDetailsPage from "../ProjectsForms";
import RulesPage from "../DQRules/RulesPage";
import CreateRulesPage from "../DQRules/CreateRulesPage";

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

const StepperObject = [
  {
    step: 1,
    name: "Data Source",
  },
  {
    step: 2,
    name: "Data Profile",
  },
  {
    step: 3,
    name: "Score Cards",
  },
  {
    step: 4,
    name: "DQ Rules",
  },
];

const conditionalRenderPage = {
  createRulesManually: <CreateRulesPage />,
  columnDrill: "Column Drill",
};

const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [renderSubPage, setRenderSubPage] = useState("");

  const handlecreaterule = () => {
    setRenderSubPage("createRulesManually");
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev <= StepperObject.length ? prev + 1 : prev));
  };

  return (
    <div>
      <Breadcrumbs data={Data} />
      <PageTitle name={"New Project"} isImg />
      {["createRulesManually", "columnDrill"].includes(renderSubPage) ? (
        conditionalRenderPage[renderSubPage]
      ) : (
        <div className="stepper-content-div">
          <ProgressStepper
            numberOfSteps={StepperObject}
            currentStep={currentStep}
          />
          <StepperContent>
            <ProjectDetailsPage nextStep={handleNextStep} />
            {/* <RulesPage handlecreaterule={handlecreaterule} /> */}
          </StepperContent>
        </div>
      )}
    </div>
  );
};

export default CreateProject;
