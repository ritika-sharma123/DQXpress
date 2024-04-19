import React, { useEffect } from "react";
import Card from "../../../components/Card";
import "./index.scss";
import Button from "../../../components/Button";
import Union from "../../../assets/images/Union.png";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

export const ProjectDetail = ({ handleSeeDetails }) => {
  return (
    <>
      <div className="card-title">
        <h2>Project1</h2>
      </div>
      <div className="card-content">
        <div>
          <div>
            <h3>Date Created</h3>
          </div>
          <div>
            <h3>Status</h3>
          </div>
        </div>
        <div>
          <div>
            <h3>2-04-2024</h3>
          </div>
          <div>
            <h3>Processed</h3>
          </div>
        </div>
      </div>
      <div className="button">
        <Button name={"See Details"} onClick={handleSeeDetails}></Button>
      </div>
    </>
  );
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    navigate("/projects/create-project");
  };

  const handleSeeDetails = () => {
    navigate("/projects/project-details");
  };

  useEffect(() => {
    return () => localStorage.removeItem("createRulesManually");
  }, []);

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
        <Card>
          <ProjectDetail handleSeeDetails={handleSeeDetails} />
        </Card>
        <Card>
          <ProjectDetail />
        </Card>
        <Card>
          <ProjectDetail />
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
