import React from "react";
import PageTitle from "../../../components/PageTitle";
import Breadcrumbs from "../../../components/BreadCrumbs/index";

const Data = [
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Create New Project",
    path: "/projects/create-project",
  },
];

const CreateProject = () => {
  return (
    <div>
      <Breadcrumbs data={Data} />
      <PageTitle name={"New Project"} isImg />
    </div>
  );
};

export default CreateProject;
