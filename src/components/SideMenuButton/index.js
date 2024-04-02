import React from "react";
import "./index.scss";

const SideMenubutton = ({ name, image }) => {
  return (
    <div className="side-button">
      <img src={image} alt="" height="18px" width="18px" />
      <span>{name}</span>
    </div>
  );
};

export default SideMenubutton;
