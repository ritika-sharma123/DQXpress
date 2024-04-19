import React from "react";
import Breadcrumbs from "../../../components/BreadCrumbs";
import PageTitle from "../../../components/PageTitle";
import Card from "../../../components/Card";
import { LineChart } from "../ScoreCards/chartExam";

const breadcrumbsData = [
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Details",
    path: "/projects/project-details",
  },
];

const ProjectDetailsPage = () => {
  return (
    <div>
      <Breadcrumbs data={breadcrumbsData} />
      <PageTitle name={"New Project"} isImg />
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
    </div>
  );
};

export default ProjectDetailsPage;
