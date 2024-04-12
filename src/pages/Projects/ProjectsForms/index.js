import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle";
import "./index.scss";
import AddProjectDetailsForm from "./AddProjectDetailsForm";
import Button from "../../../components/Button";
import Stepper from "../../../components/Stepper";
import AddDataSourceForm from "./AddDataSourceForm";
import AddDataTargetForm from "./AddDataTargetForm";
import { current } from "@reduxjs/toolkit";
import RulesPage from "../DQRules/RulesPage";

const StepperObject = [
  {
    step: 0,
    label: "Project Details",
    title: "Add Project Details",
  },
  {
    step: 1,
    label: "Data Source",
    title: "Add Data Source",
  },
  {
    step: 2,
    label: "Data Target",
    title: "Add Data Target",
  },
];

const ProjectDetailsPage = ({ nextStep }) => {
  const numberOfSteps = StepperObject.length;
  const [currentStep, setCurrentStep] = useState(0);

  const handlePreviousStep = () => {
    setCurrentStep((prevState) =>
      currentStep < 0 ? currentStep : currentStep - 1
    );
  };
  const handleContinueStep = () => {
    setCurrentStep((prevState) =>
      currentStep === numberOfSteps ? currentStep : currentStep + 1
    );
  };

  function dynamicForms() {
    switch (currentStep) {
      case 0:
        return <AddProjectDetailsForm />;
      case 1:
        return <AddDataSourceForm />;
      case 2:
        return <AddDataTargetForm />;
      default:
        return <AddProjectDetailsForm />;
    }
  }

  return (
    <div className="project-form-page">
      <PageTitle
        name={StepperObject[currentStep]?.title || StepperObject[0]?.title}
      />
      <div style={{ display: "flex", margin: "20px 50px" }}>
        {StepperObject.map((i, index) => {
          return (
            <Stepper
              numberOfsteps={numberOfSteps}
              currentStep={currentStep}
              label={i.label}
              index={index}
            />
          );
        })}
      </div>
      {dynamicForms()}
      <div className="button-div">
        {currentStep === StepperObject.length - 1 ? (
          <Button name="Next" className={"primary-button"} onClick={nextStep} />
        ) : (
          <Button
            name="Continue"
            className={"primary-button"}
            onClick={handleContinueStep}
          />
        )}
        <Button name="Previous" onClick={handlePreviousStep} />
        <Button name="Cancel" />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
