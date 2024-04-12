import React from "react";
import Button from "../../../components/Button";

const CorrectedDataPage = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      Corrected Data
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name={"Previous"} onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
    </>
  );
};

export default CorrectedDataPage;
