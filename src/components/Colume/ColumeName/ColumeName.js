import React from "react";
import PropTypes from "prop-types";

import classes from "./columeName.module.scss";

function ColumeName({ name }) {
  return <h4 className={classes.title}>{name}</h4>;
}

ColumeName.propTypes = {
  name: PropTypes.string.isRequired
};

export default ColumeName;
