import React from "react";
import Input from "../../../components/Input";
import "./index.scss";
import InputSelector from "../../../components/InputSelector";

const Options = [
  {
    label: "x",
    value: "x",
  },
  {
    label: "y",
    value: "y",
  },
];

const AddDataTargetForm = () => {
  const handleChange = () => {};

  return (
    <div className="form">
      <div className="form">
        <div className="input-label">
          <InputSelector label="Server Name" options={Options} />
        </div>
        <div className="input-label">
          <InputSelector label="Server Port" options={Options} />
        </div>
        <div className="input-label">
          <InputSelector label="Database Name" options={Options} />
        </div>
        <div className="input-label">
          <InputSelector label="User Name" options={Options} />
        </div>
        <div className="input-label">
          <Input placeholder="Enter" label="Password" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default AddDataTargetForm;
