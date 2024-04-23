import React from "react";
import "./index.scss";
import Check from "../../assets/images/Check.png";

const ProgressStepper = ({ currentStep, numberOfSteps }) => {
  const isActive = (index) => (currentStep >= index ? "active" : "");
  const isFinalStep = (index) => index === numberOfSteps.length - 1;
  const isActiveState = (index) =>
    currentStep >= index + 1 ? "active-state" : "";

  return (
    <div className="progress-stepper-div">
      {numberOfSteps?.map((i, index) => {
        return (
          <div className="stepper-label-div">
            <div className="progress-circle-div">
              <div
                className={`progress-circle ${isActive(index)} ${isActiveState(
                  index
                )}`}
              >
                {isActiveState(index) ? (
                  <img src={Check} alt="i" />
                ) : (
                  <>{i.step}</>
                )}
              </div>
              {!isFinalStep(index) ? (
                <div className={`progress-line ${isActive(index + 1)}`}></div>
              ) : (
                ""
              )}
            </div>
            <div className="label-stepper">{i.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
