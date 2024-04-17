/* eslint-disable no-unused-vars */
import React from "react";
import Input from "../../../components/Input";
import "./index.scss";


import Search from "../../../assets/images/Search.png";
import Button from "../../../components/Button";
import DataTable1 from "../../../components/DataTable";


const DatprofileForm = () => {
    const handleChange = () => {};


    return (
        <div className="form">
            <h1>DataProfile</h1>
            <Input placeholder={"Search column name"} className={"input"} />
      <Button className={"search-button"}>
        <img src={Search} alt="i" />


      </Button>
      <DataTable1 />
      

          
        </div>
      );
    };
export default DatprofileForm;

