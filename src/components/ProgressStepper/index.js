import React from "react";
import "./index.scss";

const ProgressStepper = ({ currentStep, numberOfSteps }) => {
  const isActive = (index) => (currentStep >= index ? "active" : "");
  const isFinalStep = (index) => index === numberOfSteps.length - 1;

  return (
    <div className="progress-stepper-div">
      {numberOfSteps?.map((i, index) => {
        return (
          <div className="stepper-label-div">
            <div className="progress-circle-div">
              <div className={`progress-circle ${isActive(index)}`}>
                {i.step}
              </div>
              {!isFinalStep(index) ? (
                <div className={`progress-line ${isActive(index + 1)}`}></div>
              ) : (
                ""
              )}
            </div>
            <div>{i.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
