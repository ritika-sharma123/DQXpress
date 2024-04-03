import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/images/ArrowLeft.png";
import "./index.scss";
import PropTypes from "prop-types";

const PageTitle = ({ name, isImg }) => {
  const navigate = useNavigate();
  return (
    <div className="heading-title">
      {isImg ? (
        <img
          src={ArrowLeft}
          height="16"
          width="19"
          alt=""
          onClick={() => navigate(-1)}
          className="img"
        />
      ) : null}
      <span>{name}</span>
    </div>
  );
};

PageTitle.propTypes = {
  name: PropTypes.string,
  isImg: PropTypes.bool,
};

export default PageTitle;
