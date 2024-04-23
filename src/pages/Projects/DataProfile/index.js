import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import DataTable from "../../../components/DataTable";
import Input from "../../../components/Input";
import Search from "../../../assets/images/Search.png";
import "./index.scss";

const DataProfile = ({ handleNextStep, handlePreviousStep }) => {
  const navigate = useNavigate();

  const handleLoanId = () => {
    navigate("/projects/create-project/loan-id");
    localStorage.setItem("loan-id", 2);
  };

  return (
    <>
      <PageTitle name={"Data Profile"} />
      <Input placeholder={"Search column name"} className={"input"} />
      <Button className={"search-button"}>
        <img src={Search} alt="i" />
      </Button>
      <DataTable />
      {/* <Button onClick={handleLoanId} /> */}
      <div className="button-group">
        <Button name={"Next"} onClick={handleNextStep} />
        <Button name="Previous" onClick={handlePreviousStep} />
        <Button name={"Cancel"} />
      </div>
    </>
  );
};

export default DataProfile;
