import React from "react";
import PageTitle from "../../../components/PageTitle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Search from "../../../assets/images/Search.png";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const RulesPage = ({ handlecreaterule }) => {
  return (
    <div>
      <div className="rules-title-div">
        <PageTitle name={"Rules"} />
        <Input placeholder={"Search Data by name..."} className={"input"} />
        <Button className={"search-button"}>
          <img src={Search} alt="i" />
        </Button>
      </div>
      <div className="text">
        No rules Added, Choose from below options to add rules.
      </div>
      <div className="button-group">
        <Button name={"Automatic Rules"} className={"primary-button"} />
        <Button name={"Create Manually"} onClick={handlecreaterule} />
        <Button name={"Previous"} />
        <Button name={"Cancel"} />
      </div>
    </div>
  );
};

export default RulesPage;
