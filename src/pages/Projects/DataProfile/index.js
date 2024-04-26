/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import DataTable1 from "../../../components/DataTable";
import Search from "../../../assets/images/Search.png";
import Filter from "../../../assets/images/Filter alt.png";

const DataTableWrapper = styled.section`
    .MuiDataGrid-container--top [role=row], .MuiDataGrid-container--bottom [role=row]
    {
      background: #B0C4DE !important;
      border-color: #B0C4DE;
      color: #ffffff !important;

`;

const DataProfile = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <><>
   
      <div>
      <div className="form" >
            <h1>DataProfile</h1>
            <Input placeholder={"Search column name"} className={"input"} />
      <Button className={"search-button"}>
        <img src={Search} alt="i" /> 
        </Button>
       
        {/* <Button className={"Filter-button"}> */}
        {/* <img src={Filter} alt="i" />  */}
     
        {/* </Button> */}

        
        <DataTableWrapper>
          <DataTable1 />
        </DataTableWrapper>
       
    
      

          
        </div>
      </div>
      <div className="button-div">
      <Button name={"Next"} className={"primary-button"} onClick={handleNextStep} />
      <Button name="Previous" onClick={handlePreviousStep} />
      <Button name={"Cancel"} />
      </div>
    </></>
  );
};

export default DataProfile;
