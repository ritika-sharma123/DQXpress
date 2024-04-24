import React from "react";
import Button from "../../../components/Button";
import ExceptionForm2 from "../../../components/DataTable/exceptionform";

const ExceptionHandlingPage = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      <div className="form">
            <h1>ExceptionHandling</h1>
            
   

      
      <ExceptionForm2 />
      

         
        </div>
        <div className="button-group">
      <Button name={"Next"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
      </div>
    </>
  );
};

export default ExceptionHandlingPage;
