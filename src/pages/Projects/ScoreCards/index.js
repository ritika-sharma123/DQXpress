import React from "react";
import PageTitle from "../../../components/PageTitle";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import "./index.scss";
import Card from "../../../components/Card";
import { LineChart } from "./chartExam";
import Search from "../../../assets/images/Search.png";

export const CardData = ({ title = "Correct", dataPercent }) => {
  return (
    <div className="data-progress-percent-div">
      <span className="small-title">{title}</span>
      <div className="data-percent">{dataPercent}</div>
      <div>
        <div className="data-change">Change 12%</div>
      </div>
    </div>
  );
};

const ScoreCards = () => {
  return (
    <div className="score-card-page">
      <div className="title-button-div">
        <PageTitle name={"Score Cards"} />
        <Button name="All Datascore Cards" className={"tab-button"} />
        <Button name="Column Datascore Cards" />
      </div>
      <Input placeholder={"Search column name"} className={"input"} />
      <Button className={"search-button"}>
        <img src={Search} alt="i" />
      </Button>
      <div className="charts-div">
        <div>
          <Card className={"line-chart"}>
            <PageTitle name={"Passed checked by %"} />
            <LineChart />
          </Card>
        </div>
        <div>
          <Card className={"line-chart"}>
            <PageTitle name={"Dimensional Clarification"} />
            <LineChart />
          </Card>
        </div>
      </div>
      <div className="multiple-cards">
        <Card>
          <CardData dataPercent="79%" />
        </Card>
        <Card>
          <CardData dataPercent="40%" />
        </Card>
        <Card>
          <CardData dataPercent="25%" />
        </Card>
      </div>
      <div>
        <Button name="Next" />
        <Button name="Previous" />
        <Button name="Cancel" />
      </div>
    </div>
  );
};

export default ScoreCards;
