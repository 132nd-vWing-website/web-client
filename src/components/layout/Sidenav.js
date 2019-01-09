import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

import Logo from "../../img/132nd-logo-105x102.png";

class Sidenav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // Nav-links to show if user is logged in
    const authLinks = (
      <div id="member-links">
        <Link
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          to="/dashboard"
        >
          {user.avatar ? "" : <span className="text-info">{user.name}</span>}
          <img
            className="rounded-circle"
            src={user.avatar}
            alt=""
            title="You must have a Gravatar connected to your email to display an image"
            style={{ width: "25px", marginRight: "5px" }}
          />
        </Link>
        <a
          href="/"
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          onClick={this.onLogoutClick}
        >
          Logout
        </a>
      </div>
    );

    // Nav-links to show if user is logged out
    const guestLinks = (
      <div id="guest-links">
        <Link
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          to="/register"
        >
          Sign Up
        </Link>
        <Link
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          to="/login"
        >
          Login
        </Link>
      </div>
    );

    return (
      <nav className="nav col-sm-12 col-md-1 flex-md-column main-nav">
        <span className="d-none d-md-block pb-5" />
        <Link
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center d-none d-md-block"
          to="/"
        >
          <img src={Logo} alt="132nd vWing" className="img-fluid" />
        </Link>
        <span className="d-sm-none d-md-block pb-5" />
        {isAuthenticated ? authLinks : guestLinks}
        <a
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          href="#"
        >
          Events
        </a>
        <span className="d-none d-md-block pb-5" />

        <Link
          className="nav-link nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          to="/profiles"
        >
          Profiles
        </Link>
        <Link
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center d-none d-md-block"
          to="/"
        >
          Home
        </Link>
        <a
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center"
          href="#"
        >
          About Us
        </a>
        <a
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center d-none d-md-block"
          href="#"
        >
          Squadrons
        </a>
        <a
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center d-none d-md-block"
          href="#"
        >
          Recruitment
        </a>
        <a
          className="nav-item nav-link text-md-left text-uppercase flex-sm-fill text-sm-center d-none d-md-block"
          href="#"
        >
          Contact Us
        </a>
        <span className="d-none d-md-block" style={{ minHeight: "30vh" }} />
      </nav>
    );
  }
}

Sidenav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile
})(Sidenav);
