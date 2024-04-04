import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const InputSelector = ({
  onChange,
  label,
  name,
  value,
  options,
  className,
  hideSelect,
}) => {
  return (
    <div className={`input-selector ${className}`}>
      <label>{label}</label>
      <select name={name} onChange={onChange} value={value}>
        {hideSelect ? (
          ""
        ) : (
          <option value={1} selected disabled>
            Select
          </option>
        )}
        {options.map((i, index) => {
          return <option key={index}>{i.value}</option>;
        })}
      </select>
    </div>
  );
};

InputSelector.propTypes = {
  onChange: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.any,
  className: PropTypes.string,
  hideSelect: PropTypes.bool,
};

export default InputSelector;
