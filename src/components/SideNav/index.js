import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../../assets/images/Dashboard.svg";
import Logout from "../../assets/images/Logout.svg";
import Bar from "../../assets/images/Bars.svg";
import Control from "../../assets/images/Control.svg";
import Question from "../../assets/images/Question.svg";
import SideMenubutton from "../SideMenuButton";
const Data = [
  {
    name: "Dashboard",
    image: Dashboard,
    path: "Dashboard",
  },
  {
    name: "Projects",
    image: Bar,
    path: "projects",
  },
  {
    name: "Administration",
    image: Control,
    path: "",
  },
  {
    name: "Help",
    image: Question,
    path: "",
  },
];

const SideNav = () => {
  return (
    <div className="side-nav-div">
      {Data.map((i, index) => {
        return (
          <NavLink to={`/${i.path}`} className="nav-link">
            <SideMenubutton name={i.name} image={i.image} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideNav;
