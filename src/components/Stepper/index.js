import React from "react";
import "./index.scss";

const Stepper = ({ label, numberOfsteps, currentStep, index }) => {
  const isActive = (index) => (index <= currentStep ? "active" : "");
  const isFinalStep = (index) => index === numberOfsteps - 1;

  return (
    <div className="stepper">
      <div className="stepper-step">
        <div className={`circle ${isActive(index)}`}></div>
        {isFinalStep(index) ? null : (
          <div className={`line ${isActive(index + 1)}`}></div>
        )}
      </div>
      <label>{label}</label>
    </div>
  );
};

export default Stepper;
