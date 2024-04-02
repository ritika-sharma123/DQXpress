import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = ({ name, className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className}`}
      style={{}}
    >
      {children}
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  buttonCss: PropTypes.object,
  onClick: PropTypes.any,
};

export default Button;
