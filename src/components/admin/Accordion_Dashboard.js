import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import findOne from "../../utils/findOne";

import Schema from "./admin-schema";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    let dashboardContent;
    let validRoles = [];

    /** Get all valid roles from the Schema to check against later */
    Schema.forEach(panel => validRoles.push(...panel.validRoles));

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
      // If the user does, then show components according to roles!
      let componentsToShow = Schema.map((panel, index) => {
        return (
          <div id={panel.id} key={index}>
            {panel.component}
          </div>
        );
      });

      dashboardContent = (
        <div className="w-75 mt-5">
          <div id="accordion">{componentsToShow}</div>
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
          <div className="container">
            <div className="row align-items-center">
              <div className="col" />
              {dashboardContent}
              <div className="col" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
