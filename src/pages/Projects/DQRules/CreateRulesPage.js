import React from "react";
import Input from "../../../components/Input";
import InputSelector from "../../../components/InputSelector";
import PageTitle from "../../../components/PageTitle";

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

const CreateRulesPage = () => {
  return (
    <>
      <div className="input-label">
        <InputSelector label="Rule Type" options={Options} />
      </div>
      <div className={"input-label"}>
        <Input
          label={"Rule Name"}
          placeholder="Enter"
          //   onChange={handleChange}
          className={"label"}
        />
      </div>
      <div className="input-label">
        <Input
          placeholder="Enter"
          type={"textarea"}
          label="Rule Description"
          className={"textarea-class"}
          //   onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CreateRulesPage;
