import React from "react";
import "./index.scss";
import Button from "../Button";

const Card = ({ children }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="card">
      {children}
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
        <Button name={"See Details"} onClick={handleClick}></Button>
      </div>
    </div>
  );
};

export default Card;
