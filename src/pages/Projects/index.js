import React from "react";
import Card from "../../components/Card";
import "./index.scss";
import Button from "../../components/Button";
import Union from "../../assets/images/Union.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const styles = (theme) => ({
  field: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: "2px",
  },
});

const ButtonCss = `
  display: flex;
  alignItems: center;
  gap: 5px;
  borderadius: 2px;
`;

const Projects = () => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    console.log("create");
    navigate("/create-project");
  };

  return (
    <div>
      <div className="heading-div">
        <h2>Projects</h2>
        <Button
          name={"Create Project"}
          onClick={handleCreateProject}
          className={styles.field}
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

export default Projects;
