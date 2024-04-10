import React from "react";
import "./index.scss";

const ProgressBar = ({ scale }) => {
  return (
    <>
      <div className="progress-bar-div">
        <div className="progress-div" style={{ width: `${scale}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
