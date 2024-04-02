import React from "react";
import Card from "../../components/Card";
import "./index.scss";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
