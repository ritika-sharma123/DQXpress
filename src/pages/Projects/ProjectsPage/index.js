import React from "react";
import Card from "../../../components/Card";
import "./index.scss";
import Button from "../../../components/Button";
import Union from "../../../assets/images/Union.png";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

export const DummyCard = () => {
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
        <Button name={"See Details"} onClick={() => {}}></Button>
      </div>
    </>
  );
};

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
        <Card>
          <DummyCard />
        </Card>
        <Card>
          <DummyCard />
        </Card>
        <Card>
          <DummyCard />
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
