import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import findOne from "../../utils/findOne";

import Schema from "./admin-schema";

class AdminActions extends Component {
  state = {
    auth: {}
  };

  render() {
    const { user } = this.props.auth;

    let adminActions;
    let validRoles = [];

    /** Get all valid roles from the Schema to check against later */
    Schema.forEach(schema => validRoles.push(...schema.validRoles));

    // Check if user has any valid roles
    if (findOne(validRoles, user.roles)) {
      adminActions = Schema.map((schema, index) => {
        // Then for each schema, check if the user has access to this module
        if (findOne(schema.validRoles, user.roles)) {
          return (
            <Link key={index} to={schema.route} className="btn btn-light">
              <i className={`${schema.icon} text-info mr-1`} />
              {schema.label}
            </Link>
          );
        }
      });
    }

    return (
      <div className="btn-group mb-4" role="group">
        <button className="btn btn-info" onClick={this.props.history.goBack}>
          <i className="fas fa-arrow-left text-white mr-1" />
          Back
        </button>
        {adminActions}
      </div>
    );
  }
}

AdminActions.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(AdminActions));
