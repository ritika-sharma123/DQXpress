import React from "react";
import PageTitle from "../../../components/PageTitle";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "./index.scss";

const ScoreCards = () => {
  return (
    <div className="score-card-page">
      <div className="title-button-div">
        <PageTitle name={"Score Cards"} />
        <Button name="All Datascore Cards" className={"tab-button"} />
        <Button name="Column Datascore Cards" />
      </div>
      <Input placeholder={"Search column name"} className={"input"} />
    </div>
  );
};

export default ScoreCards;
