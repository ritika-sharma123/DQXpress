import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = ({ name, className, onClick, children, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`custom-button ${className}`}
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
  isDisabled: PropTypes.bool,
};

export default Button;
