import React from "react";
import "./index.scss";
import Avatar from "../../assets/images/Avatar.png";
import Icon1 from "../../assets/images/Icon-Wrapper.png";
import Icon2 from "../../assets/images/Icon-Wrapper1.png";
import Logo from "../../assets/images/Coforge-logo-Coral-White.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <img src={Logo} alt="logo" height="78px" />
          <span className="dqx">DQX</span>
          <span className="press-title">press</span>
          <span className="press-title">&nbsp;&nbsp;Developer</span>
        </div>
        <div className="header-nav">
          <img src={Icon2} height="60px" alt="logo" />
          <img src={Icon1} height="60px" alt="logo" />
          <div className="user-profile-div">
            <img src={Avatar} alt="logo" />
            <span>Vijay Bhatti</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
