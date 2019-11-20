import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Colume from "../Colume";

import { addProsAction, changeProsAction } from "../../store/actions/pros";

function Pros(props) {
  const { pros: colume } = props;
  return <Colume {...props} colume={colume} />;
}

function mapStateToProps(store) {
  return {
    pros: store.pros
  };
}

Pros.propTypes = {
  pros: PropTypes.instanceOf(Object).isRequired
};

export default connect(mapStateToProps, {
  addItem: addProsAction,
  changeItem: changeProsAction
})(Pros);
