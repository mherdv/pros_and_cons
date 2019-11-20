import React from "react";
import Pros from "../Pros";
import Cons from "../Cons";

import classes from "./ColumesWrapper.module.scss";

function ColumesWrapper() {
  return (
    <div className={classes.wrapper}>
      <Pros />
      <Cons />
    </div>
  );
}

export default ColumesWrapper;
