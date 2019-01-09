import React, { Component } from "react";
import PropTypes from "prop-types";

const DefaultContainer = props => (
  <div
    id={props.id ? props.id : null}
    className="col-sm-12 col-md-11 p-0"
    style={{ minHeight: "100vh" }}
  >
    <div
      id="panel-items"
      className="position-relative"
      style={{ overflow: "auto", height: "100vh" }}
      data-spy="scroll"
      data-target={props.dataTarget ? props.dataTarget : "#item-pills"}
      data-offset="0"
    >
      <div className="row align-items-center">
        <div className="w-75 mt-5 m-auto bg-white rounded p-3">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

DefaultContainer.propTypes = {
  id: PropTypes.string,
  dataTarget: PropTypes.string
};

export default DefaultContainer;
