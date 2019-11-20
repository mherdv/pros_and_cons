import React from "react";
import PropTypes from "prop-types";

import classes from "./header.module.scss";

function Header({ value }) {
  return <h3 className={classes.title}>{value}</h3>;
}
Header.propTypes = {
  value: PropTypes.string.isRequired
};

export default Header;
