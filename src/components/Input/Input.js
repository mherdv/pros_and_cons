import React from "react";
import PropTypes from "prop-types";
import classes from "./input.module.scss";

function Input({ type, value, onChange }) {
  return (
    <input
      className={classes.input}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Input;
