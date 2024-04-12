import React from "react";
import Button from "../../../components/Button";

const ExceptionHandlingPage = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      Exception Handling
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
    </>
  );
};

export default ExceptionHandlingPage;
