import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Schema from "./admin-schema";
import AdminActions from "./AdminActions";

import findOne from "../../utils/findOne";

class Admin extends Component {
  render() {
    const { user } = this.props.auth;
    let dashboardContent;
    let validRoles = [];

    /** Get all valid roles from the Schema to check against later */
    Schema.forEach(schema => validRoles.push(...schema.validRoles));

    // Check if user has any valid roles
    if (!findOne(validRoles, user.roles)) {
      dashboardContent = (
        <div className="w-75 p-5 mt-5 bg-white rounded text-center ">
          <p className="lead text-muted">Hi {user.name}!</p>
          <p>You do not have the right roles to view this page</p>
          <Link to="/" className="btn btn-lg btn-info">
            Go back
          </Link>
        </div>
      );
    } else {
      dashboardContent = (
        <div className="w-75 mt-5 m-auto bg-white rounded p-3">
          <h1>Admin</h1>
          <p className="lead text-muted">Select a module from the below menu</p>
          <div className="btn-group mb-4" role="group">
            <AdminActions />
          </div>
        </div>
      );
    }

    return (
      <div
        id="panel"
        className="col-sm-12 col-md-11 p-0"
        style={{ minHeight: "100vh" }}
      >
        <div
          id="panel-items"
          className="position-relative"
          style={{ overflow: "auto", height: "100vh" }}
          data-spy="scroll"
          data-target="#item-pills"
          data-offset="0"
        >
          <div className="row align-items-center">{dashboardContent}</div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Admin);
