import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Colume from "../Colume";

import { addConsAction, changeConsAction } from "../../store/actions/cons";

function Cons(props) {
  console.log(props);
  const { cons: colume } = props;
  return <Colume {...props} colume={colume} />;
}

function mapStateToProps(store) {
  return {
    cons: store.cons
  };
}

Cons.propTypes = {
  cons: PropTypes.instanceOf(Object).isRequired
};

export default connect(mapStateToProps, {
  addItem: addConsAction,
  changeItem: changeConsAction
})(Cons);
