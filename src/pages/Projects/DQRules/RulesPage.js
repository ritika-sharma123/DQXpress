import React from "react";
import PageTitle from "../../../components/PageTitle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Search from "../../../assets/images/Search.png";
import "./index.scss";

const RulesPage = ({
  handlecreaterule,
  handlePreviousStep,
  handleNextStep,
}) => {
  return (
    <div>
      <div className="rules-title-div">
        <PageTitle name={"Rules"} />
        <Button name={"Automatic Rules"} className={"button-margin"} />
        <Button
          name={"Create Manually"}
          className={"button-margin"}
          onClick={handlecreaterule}
        />
        <Input placeholder={"Search Data by name..."} className={"input"} />
        <Button className={"search-button"}>
          <img src={Search} alt="i" />
        </Button>
      </div>
      <div className="text">
        No rules Added, Choose from below options to add rules.
      </div>
      <div className="button-group">
        <Button name={"Apply Rules"} isDisabled />
        <Button name={"Next"} onClick={handleNextStep} />
        <Button name={"Previous"} onClick={handlePreviousStep} />
        <Button name={"Cancel"} />
      </div>
    </div>
  );
};

export default RulesPage;
