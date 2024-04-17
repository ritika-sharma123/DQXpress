import React, { useEffect, useState } from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumbs from "../../../components/BreadCrumbs/index";
import ProgressStepper from "../../../components/ProgressStepper";
import "./index.scss";
import StepperContent from "../../../components/StepperContent";
import AddProjectDetailsForm from "../ProjectsForms/AddProjectDetailsForm";
import ProjectDetailsPage from "../ProjectsForms";
import RulesPage from "../DQRules/RulesPage";
import CreateRulesPage from "../DQRules/CreateRulesPage";
import DataProfile from "../DataProfile";
import ScoreCards from "../ScoreCards";
import ExceptionHandlingPage from "../ExceptionHandling";
import CorrectedDataPage from "../CorrectedData";
import WorkflowsPage from "../Workflows";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeft from "../../../assets/images/ArrowLeft.png";

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
  {
    step: 5,
    name: "Exception Handling",
  },
  {
    step: 6,
    name: "Corrected Data",
  },
  {
    step: 7,
    name: "Workflows",
  },
];

const conditionalRenderPage = {
  createRulesManually: <CreateRulesPage />,
  columnDrill: "Column Drill",
};

const CreateProject = ({ setId }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [renderSubPage, setRenderSubPage] = useState("");
  const [breadcrumbsData, setBreadcrumbsData] = useState([
    {
      text: "Projects",
      path: "/projects",
    },
    {
      text: "Create New Project",
      path: "/projects/create-project",
    },
  ]);

  console.log(pathname);

  const handlecreaterule = () => {
    setRenderSubPage("createRulesManually");
    navigate("/projects/create-project/create-new-rule/");
    localStorage.setItem("createRulesManually", 4);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev <= StepperObject.length ? prev + 1 : prev));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => (prev >= currentStep ? prev - 1 : prev));
  };

  function dynamicStepperContent() {
    switch (currentStep) {
      case 0:
        return <ProjectDetailsPage nextStep={handleNextStep} />;
      case 1:
        return (
          <DataProfile
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 2:
        return (
          <ScoreCards
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 3:
        return (
          <RulesPage
            handleNextStep={handleNextStep}
            handlecreaterule={handlecreaterule}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 4:
        return (
          <ExceptionHandlingPage
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 5:
        return (
          <ScoreCards
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 6:
        return <WorkflowsPage handlePreviousStep={handlePreviousStep} />;
      default:
        return <ProjectDetailsPage />;
    }
  }

  return (
    <div>
      <Breadcrumbs data={breadcrumbsData} />
      {pathname === "/projects/create-project" ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={ArrowLeft}
            height="16"
            width="19"
            alt=""
            onClick={() => navigate("/projects")}
            className="img"
          />
          <PageTitle name={"New Project"} />
        </div>
      ) : (
        <PageTitle name={"New Project"} isImg />
      )}
      <div className="stepper-content-div">
        <ProgressStepper
          numberOfSteps={StepperObject}
          currentStep={currentStep}
        />
        <StepperContent>{dynamicStepperContent()}</StepperContent>
      </div>
    </div>
  );
};

export default CreateProject;
