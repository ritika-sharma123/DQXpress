import React from "react";
import "./index.scss";

const Stepper = ({ label, numberOfsteps, currentStep, index }) => {
  const isFinalStep = (index) => index === numberOfsteps - 1;

  return (
    <div className="stepper">
      <div className="stepper-step">
        <div className="circle"></div>
        {isFinalStep(index) ? null : <div className="line"></div>}
      </div>
      <label>{label}</label>
    </div>
  );
};

export default Stepper;
