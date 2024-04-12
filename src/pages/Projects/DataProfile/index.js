import React from "react";
import Button from "../../../components/Button";

const DataProfile = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      Data Profile
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
    </>
  );
};

export default DataProfile;
