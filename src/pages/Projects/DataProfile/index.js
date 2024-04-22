import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const DataProfile = ({ handleNextStep, handlePreviousStep }) => {
  const navigate = useNavigate();

  const handleLoanId = () => {
    navigate("/projects/create-project/loan-id");
    localStorage.setItem("loan-id", 2);
  };

  return (
    <>
      Data Profile
      <Button onClick={handleLoanId} />
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
    </>
  );
};

export default DataProfile;
