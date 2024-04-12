import React from "react";
import Button from "../../../components/Button";

const WorkflowsPage = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      Workflow
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
    </>
  );
};

export default WorkflowsPage;
