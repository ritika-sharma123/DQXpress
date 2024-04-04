import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle";
import "./index.scss";
import AddProjectDetailsForm from "./AddProjectDetailsForm";
import Button from "../../../components/Button";
import Stepper from "../../../components/Stepper";
import AddDataSourceForm from "./AddDataSourceForm";
import AddDataTargetForm from "./AddDataTargetForm";

const StepperObject = [
  {
    step: 0,
    label: "Project Details",
    title: "Add Project Details",
  },
  {
    step: 1,
    label: "Source Database",
    title: "Add Data Source",
  },
  {
    step: 2,
    label: "Target Database",
    title: "Add Data Target",
  },
];

const ProjectDetailsPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePreviousStep = () => {
    setCurrentStep((prevState) => currentStep + 1);
  };
  const handleContinueStep = () => {
    setCurrentStep((prevState) => currentStep - 1);
  };

  console.log("currentStep", currentStep);

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
              numberOfsteps={StepperObject.length}
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
          <Button
            name="Next"
            className={"primary-button"}
            onClick={handlePreviousStep}
          />
        ) : (
          <Button
            name="Continue"
            className={"primary-button"}
            onClick={handlePreviousStep}
          />
        )}

        <Button name="Cancel" onClick={handleContinueStep} />
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
