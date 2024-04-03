import React from "react";
import Card from "../../../components/Card";
import "./index.scss";
import Button from "../../../components/Button";
import Union from "../../../assets/images/Union.png";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/projects/create-project");
  };

  return (
    <div>
      <div className="heading-div">
        <PageTitle name="Projects" />
        <Button
          name={"Create Project"}
          onClick={handleCreateProject}
          className={"buttoncss"}
        >
          <img src={Union} height={"15px"} alt="i" />
        </Button>
      </div>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProjectsPage;
