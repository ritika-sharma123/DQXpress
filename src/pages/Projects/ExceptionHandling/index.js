import React from "react";
import Button from "../../../components/Button";
import PageTitle from "../../../components/PageTitle";
import Input from "../../../components/Input";
import Search from "../../../assets/images/Search.png";
import "./index.scss";
import DataTable from "../../../components/DataTable";

const ExceptionHandlingPage = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      <>
        <PageTitle name={"Exception Handling"} />
        <DataTable />
        {/* <Button onClick={handleLoanId} /> */}
        <div className="button-group">
          <Button name={"Next"} onClick={handleNextStep} />
          <Button name="Previous" onClick={handlePreviousStep} />
          <Button name={"Cancel"} />
        </div>
      </>
    </>
  );
};

export default ExceptionHandlingPage;
