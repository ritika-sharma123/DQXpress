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

const AddProjectDetailsForm = () => {
  const handleChange = () => {};

  return (
    <div className="form">
      <div className="input-label">
        <Input
          placeholder="Enter"
          onChange={handleChange}
          label="Project Name"
          className={"label"}
        />
      </div>
      <div className="input-label">
        <Input
          placeholder="Enter"
          type={"textarea"}
          label="Description"
          className={"textarea-class"}
          onChange={handleChange}
        />
      </div>
      <div className="input-label">
        <InputSelector label="Source Database" options={Options} />
      </div>
      <div className="input-label">
        <InputSelector label="Target Database" options={Options} />
      </div>
    </div>
  );
};

export default AddProjectDetailsForm;
