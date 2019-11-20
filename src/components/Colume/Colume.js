import React from "react";
import PropTypes from "prop-types";
import classes from "./colume.module.scss";
import ColumeName from "./ColumeName/ColumeName";
import ColumeBody from "./ColumeBody";

function Colume(props) {
  const { colume } = props;

  return (
    <div className={classes.colume}>
      <ColumeName name={colume.name} />

      {/* colume body */}
      <ColumeBody list={colume.list} {...props} />
    </div>
  );
}

Colume.propTypes = {
  colume: PropTypes.instanceOf(Object).isRequired
};

export default Colume;
